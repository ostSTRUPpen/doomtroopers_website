/**
 * Server side kód pro nástěnku
 * @file +page.server.ts
 */

export const prerender = true;
import { happened_events, upcoming_events, organized_events, other_info } from '$lib/data/dashboard_texts';

export const load = async ({ setHeaders }: { setHeaders: (headers: Record<string, string>) => void }) => {
    setHeaders({
        'Cache-Control': `max-age=${60}, s-maxage=${60}`
    });

    /**
     * Ostatní informace, seřazené od nejstarší
     */
    const other = other_info.length > 0 ? other_info.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day) : [];

    /**
     * Proběhlé události seřazené od nejnovější
     */
    const h_events = happened_events.length > 0 ? happened_events.sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day) : [];

    /**
     * Nadcházející události seřazené od nejstarší (nejbližší)
     */
    const u_events = upcoming_events.length > 0 ? upcoming_events.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day) : [];

    /**
     * Organizované události seřazené od nejstarší
     */
    const o_events = organized_events.length > 0 ? organized_events.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day) : [];

    return {
        h_events,
        u_events,
        o_events,
        other
    };
}

/*** Konec souboru +page.server.ts ***/