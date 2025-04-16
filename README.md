# Steve Hill's Blog & Portfolio

This repository contains the source code for my personal website and blog, available at [stevehill.xyz](https://stevehill.xyz).

Built with [Jekyll](https://jekyllrb.com/) and styled with [Tailwind CSS](https://tailwindcss.com/).

## Development Setup

There are two main ways to set up the development environment:

**1. Using Dev Containers (Recommended)**

This is the easiest and most consistent way to get started.

*   **Prerequisites:**
    *   Docker Desktop installed and running.
    *   VS Code with the ["Dev Containers" extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installed.
*   **Setup:**
    1.  Clone this repository.
    2.  Open the cloned folder in VS Code.
    3.  When prompted, click "Reopen in Container". (Or, open the Command Palette (Cmd/Ctrl+Shift+P) and run "Dev Containers: Reopen in Container").
*   **Usage:**
    *   The container will automatically run `make setup` on first creation to install dependencies (Gems via Bundler, Tailwind CLI via Homebrew).
    *   Open a terminal within VS Code (Terminal > New Terminal).
    *   Run `make serve` to start the Jekyll server and Tailwind CSS watcher.
    *   Access the site locally at `http://localhost:4000`.

**2. Manual Local Setup (macOS with Homebrew)**

*   **Prerequisites:**
    *   Ruby (check `.ruby-version` for required version) and Bundler (`gem install bundler`).
    *   Homebrew (`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`).
*   **Setup:**
    1.  Clone this repository: `git clone ...`
    2.  Navigate into the directory: `cd stevehill1981.github.io`
    3.  Install dependencies: `make setup` (This runs `brew bundle install` and `bundle install`).
*   **Usage:**
    *   Run `make serve` to start the Jekyll server and Tailwind CSS watcher.
    *   Access the site locally at `http://localhost:4000`.

## Common Makefile Commands

*   `make setup` (or `make install`): Installs Homebrew and Ruby dependencies.
*   `make serve`: Starts the local development server (Jekyll serve + Tailwind watch). Access at `http://localhost:4000`. Press `Ctrl+C` to stop.
*   `make build`: Creates a production-ready build in the `_site/` directory.
*   `make build-css`: Builds Tailwind CSS for production (minified).
*   `make watch-css`: Starts only the Tailwind CSS watcher.
*   `make clean`: Removes generated files (`_site/`, `assets/css/output.css`).

## Deployment

Deployment to GitHub Pages is handled automatically via the GitHub Actions workflow defined in `.github/workflows/deploy.yml`. Pushing changes to the `main` branch will trigger a build and deployment.

The workflow uses the standalone Tailwind CSS binary, so Node.js is not required in the deployment environment.