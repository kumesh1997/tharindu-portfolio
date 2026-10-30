import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import portfolio from './src/data/portfolio.json';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]!));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'portfolio-metadata',
      transformIndexHtml: html => html
        .replace('%PORTFOLIO_TITLE%', escapeHtml(portfolio.meta.title))
        .replace('%PORTFOLIO_DESCRIPTION%', escapeHtml(portfolio.meta.description)),
    },
  ],
  base: process.env.GITHUB_PAGES === 'true' ? '/tharindu-portfolio/' : '/',
});
