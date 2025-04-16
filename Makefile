# Makefile for Jekyll + Tailwind Standalone CLI development

# Variables
TAILWIND_INPUT  := ./assets/css/tailwind.css
TAILWIND_OUTPUT := ./assets/css/output.css

# Default target (optional)
default: serve

# Install dependencies (Homebrew + Bundler)
.PHONY: setup install
setup install:
	@echo "--- Installing dependencies (Brew + Bundler) ---"
	@brew bundle install || (echo "Error: Homebrew (brew) not found or brew bundle failed." && exit 1)
	@bundle install || (echo "Error: Bundler (bundle) not found or bundle install failed." && exit 1)
	@echo "--- Setup complete ---"

# Build Tailwind CSS for production
.PHONY: build-css
build-css:
	@echo "--- Building Tailwind CSS (Production) ---"
	@tailwindcss -i $(TAILWIND_INPUT) -o $(TAILWIND_OUTPUT) --minify

# Build Jekyll site for production
.PHONY: build-jekyll
build-jekyll:
	@echo "--- Building Jekyll Site (Production) ---"
	@bundle exec jekyll build

# Build everything for production
.PHONY: build
build: build-css build-jekyll
	@echo "--- Full production build complete ---"

# Watch Tailwind CSS changes
.PHONY: watch-css
watch-css:
	@echo "--- Watching Tailwind CSS ---"
	@tailwindcss -i $(TAILWIND_INPUT) -o $(TAILWIND_OUTPUT) --watch

# Serve Jekyll site locally with LiveReload
.PHONY: serve-jekyll
serve-jekyll:
	@echo "--- Serving Jekyll Site ---"
	@bundle exec jekyll serve --livereload

# Run both Tailwind watch and Jekyll serve concurrently
# Note: This requires manually stopping with Ctrl+C
.PHONY: serve
serve:
	@echo "--- Starting Tailwind Watch and Jekyll Serve ---"
	@echo "NOTE: Press Ctrl+C to stop both processes."
	@make watch-css & bundle exec jekyll serve --livereload --incremental --force_polling
	@echo "--- Server stopped ---"
	@# Kill background Tailwind process if needed (simple approach)
	@pkill -f "tailwindcss -i $(TAILWIND_INPUT)" || true


# Clean build artifacts
.PHONY: clean
clean:
	@echo "--- Cleaning build artifacts ---"
	@rm -f $(TAILWIND_OUTPUT)
	@rm -rf _site
	@bundle exec jekyll clean 