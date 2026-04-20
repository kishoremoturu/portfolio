# Portfolio

A modern React portfolio site for Sai Kishore Moturu, built with Create React App and deployed through GitHub Pages.

## Tech Stack

- React 18
- Create React App (react-scripts 5)
- Tailwind CSS (CDN)
- React Icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

npm install

### Run Locally

npm start

### Production Build

npm run build

### Preview Production Build

Serve the `build` folder with any static server.

## Project Structure

.github/workflows/ - CI and deployment workflows
src/ - React source code
src/index.js - React entry point
src/App.js - app wrapper component
src/Portfolio.jsx - main portfolio component
public/index.html - app shell

## Deployment

Deployment is handled by GitHub Actions via the workflow in .github/workflows/deploy-pages.yml.

Published URL:
https://kishoremoturu.github.io/portfolio/
