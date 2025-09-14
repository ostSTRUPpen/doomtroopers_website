/**
 * Soubor obsahující data pro nástěnku
 * 
 * Soubor: dashboard_texts.ts
 */


/*
Boiler plate:
    
¨{   
        heading:"",
        display_date: "",
        day: ,
        month: ,
        year:  ,
        main_text: "",
    },

*/

/**
 * Obecné informace pro zobrazení na nástěnce
 */
export const other_info: dashboardTextsData[] = [];

/**
 * Proběhlé události
 */
export const happened_events: dashboardTextsData[] = [
      {
        heading: "Motorsvět 2025",
        display_date: "13. 9. 2025",
        day: 13,
        month: 9,
        year: 2025,
        main_text: "Více informací na <a class='link' target='_blank' href='https://www.besip-kv.cz/ponehodova-pece/'>www.besip-kv.cz/ponehodova-pece/</a> <br/><br/> <img src='https://dtimagestorage.blob.core.windows.net/dt-images/dashboard/Motosvet2025.jpg'/> ",
    },
]

/**
 * Nadcházející události
 */
export const upcoming_events: dashboardTextsData[] = [
]

/**
 * Klubem organizované události
 */
export const organized_events: dashboardTextsData[] = [];

/*** Konec souboru dashboard_texts.ts */