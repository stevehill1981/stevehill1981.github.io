import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginSeo from "eleventy-plugin-seo";
import { DateTime } from "luxon";
import markdownIt from "markdown-it";
import axe from "axe-core";
import bundle from "@11ty/eleventy-plugin-bundle";
import { JSDOM } from "jsdom";
import { Canvas } from 'canvas';

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
  // Re-enable eleventyImageTransformPlugin for image optimization
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Set default attributes for images
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async'
    },
    // Skip processing if image fetch fails to prevent build errors
    skipOnError: true
  });
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

  eleventyConfig.addFilter("filterBySeries", (posts, seriesName) => {
    return posts.filter(post => post.data.series === seriesName);
  });

  eleventyConfig.addFilter("sortByDate", (posts) => {
    return posts.sort((a, b) => a.date - b.date);
  });

  eleventyConfig.addFilter("getIndex", (posts, url) => {
    return posts.findIndex(post => post.url === url);
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

  // Accessibility audit using axe-core and jsdom
  eleventyConfig.on('eleventy.after', async ({ results }) => {
    console.log('[11ty] Running accessibility audit...');
    for (const result of results) {
      try {
        // Create a new JSDOM instance for each result
        const dom = new JSDOM(result.content);
        // Set up global window and document for axe-core
        global.window = dom.window;
        global.document = dom.window.document;
        // Explicitly set the context for axe-core
        const context = dom.window.document.documentElement;
        // Run axe-core on the DOM with explicit context
        const axeResults = await axe.run(context, {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa']
          },
          rules: {
            'color-contrast': { enabled: true },
            'link-name': { enabled: true }
          }
        });
        // Clean up globals to prevent memory leaks
        delete global.window;
        delete global.document;
        if (axeResults.violations.length > 0) {
          console.warn(`[11ty] Accessibility issues found in ${result.outputPath}:`);
          axeResults.violations.forEach((violation, index) => {
            console.warn(`  ${index + 1}. ${violation.id}: ${violation.description}`);
            console.warn(`     Impact: ${violation.impact}`);
            console.warn(`     Nodes: ${violation.nodes.length}`);
          });
        }
      } catch (error) {
        console.error(`[11ty] Accessibility audit error for ${result.outputPath}:`, error.message);
      }
    }
    console.log('[11ty] Accessibility audit completed.');
  });

  // Setup jsdom with canvas support
  const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    beforeParse(window) {
      window.HTMLCanvasElement.prototype.getContext = function(type) {
        return new Canvas(100, 100).getContext(type);
      };
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