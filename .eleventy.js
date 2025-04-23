import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyImg from "@11ty/eleventy-img";
import pluginSeo from "eleventy-plugin-seo";
import { DateTime } from "luxon";
import markdownIt from "markdown-it";
import { Axe } from "axe-core";
import bundle from "@11ty/eleventy-plugin-bundle";

export default function(eleventyConfig) {
  // Configure Markdown
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  
  const markdownLib = markdownIt(markdownItOptions);

  eleventyConfig.setLibrary("md", markdownLib);

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(eleventyImg);
  eleventyConfig.addPlugin(pluginSeo, {
    title: "Steve Hill's Blog",
    description: "A blog about technology, coding, and personal projects.",
    url: "https://stevehill.xyz",
    author: "Steve Hill",
    twitter: "stevehill1981",
    image: "/assets/images/profile.jpg"
  });
  eleventyConfig.addPlugin(bundle);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Add filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("date", (dateInput, format) => {
    let dt;
    if (dateInput instanceof Date) {
      // It's a JS Date object, convert to Luxon
      dt = DateTime.fromJSDate(dateInput, { zone: 'utc' });
    } else if (dateInput instanceof DateTime) {
      // Already a Luxon DateTime
      dt = dateInput;
    } else if (typeof dateInput === 'string') {
      // It's a string, try parsing it as ISO 8601
      dt = DateTime.fromISO(dateInput, { zone: 'utc' });
      // Fallback to other formats if ISO fails
      if (!dt.isValid) {
        dt = DateTime.fromSQL(dateInput, { zone: 'utc' });
      }
      if (!dt.isValid) {
        dt = DateTime.fromHTTP(dateInput, { zone: 'utc' });
      }
      if (!dt.isValid) {
        dt = DateTime.fromRFC2822(dateInput, { zone: 'utc' });
      }
    } else {
      // Log unsupported type
      console.warn(`Unsupported date type passed to 'date' filter: ${typeof dateInput}`, dateInput);
      return dateInput; // Return original input or indicate error
    }
  
    if (dt && dt.isValid) {
      return dt.toFormat(format);
    } else {
      console.warn(`Could not format invalid or unparseable date: ${dateInput}`);
      return 'Invalid Date'; // Or return original input, or empty string
    }
  });

  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });

  // Add custom filter to clean up empty paragraphs
  eleventyConfig.addFilter("cleanExcerpt", (content) => {
    if (!content) return content;
    return content.replace(/<p>\s*<\/p>/g, '');
  });

  // Add collections
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("src/blog/**/*.md")
      .sort((a, b) => {
        return b.date - a.date;
      });
  });

  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getFilteredByGlob("src/projects/**/*.md");
  });

  eleventyConfig.addCollection("code198x", function(collection) {
    return collection.getFilteredByGlob("src/code198x/**/*.md")
      .sort((a, b) => {
        return b.date - a.date;
      });
  });

  // Add global data
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  // Add accessibility audit
  eleventyConfig.on("eleventy.after", async ({ dir, results, runMode }) => {
    const axe = new Axe();
    axe.withRules([
      { id: "color-contrast", enabled: true },
      { id: "link-name", enabled: true }
    ]);
    axe.withTags(["wcag2a", "wcag2aa"]);
    for (const result of results) {
      const violations = await axe.analyze(result.content);
      if (violations.length > 0) {
        console.warn(`Accessibility issues found in ${result.outputPath}:`, violations);
      }
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
} 