/**
 * Soubor přidávající vercel analytics
 * 
 * Soubor: +layout.ts
 */

import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });

/*** Konec souboru +layout.ts ***/
