/**
 * Server side kód pro často kladené dotazy a odpovědi
 * Soubor: +page.server.ts
 */

export const prerender = true;
import { qaaData } from '$lib/data/qa_texts';

export const load = async ({ setHeaders }: { setHeaders: (headers: Record<string, string>) => void }) => {
    setHeaders({
        'Cache-Control': `max-age=${60}, s-maxage=${60}`
    });

    return { qaaData }
}

/*** Konec souboru +page.server.ts ***/