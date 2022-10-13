import { qwikCity } from '@builder.io/qwik-city/middleware/node';
import express from 'express';
import { fileURLToPath } from 'url';
import { join } from 'path';
import render from './entry.ssr';

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), '..', '..', 'dist');
const buildDir = join(distDir, 'build');

// Create the Qwik City middleware
const { router, notFound } = qwikCity(render);

// Create the express server
const app = express();

// Use Qwik City's page and endpoint router
app.use(router);

// Static asset handlers
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: '1y', index: false }));
app.use(express.static(distDir, { index: false }));

// Use Qwik City's 404 handler
app.use(notFound);

// Start the express server
app.listen(3000);