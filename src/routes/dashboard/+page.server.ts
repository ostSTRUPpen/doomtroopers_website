export const prerender = true;
import { happened_events, upcoming_events, organized_events, other_info } from '$lib/data/dashboard_texts';

export const load = async ({ setHeaders }) => {
    setHeaders({
        'Cache-Control': `max-age=${60}, s-maxage=${60}`
    });

    // Newer is lower
    const other = other_info.length > 0 ? other_info.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day) : [];

    // Newer is higher
    const h_events = happened_events.length > 0 ? happened_events.sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day) : [];

    // Newer is lower
    const u_events = upcoming_events.length > 0 ? upcoming_events.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day) : [];

    // Newer is lower
    const o_events = organized_events.length > 0 ? organized_events.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day) : [];

    return {
        h_events,
        u_events,
        o_events,
        other
    };
}