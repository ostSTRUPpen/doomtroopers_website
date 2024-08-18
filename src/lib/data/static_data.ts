export const gallery_pages = [
    {
        page_name: "pochod_x", //   Kvůli URL
        link_text: "Pochod X", //   Kvůli odkazům v tabulce/bočním panelu
        type: "treninky", // (nebo jiné, ale prostě "bojové akce, tréninky, propagační akce")    // Kvůli rozřazení do typů (asi nebo to udělám jinak, ale nechci ručně)
        date: "21.2.2020-24.2.2020",
        year: "2024", // Kvůli automatickému zobrazení/skrytí odkazů v bočním panelu, dle roku
        title: "pochod", // + ", {date}
        main_text: "Střelnice pro děti z příměstského tábora <b>Mladých strážníků</b> <i>MP HB</i>. Ukázka airsoftu s možností si zastřílet."
        //photos: Buď odkaz na celou složku ("api/data/images/${page_name}") nebo odkazy na jednotlivé obrázky, s možností dělat popisky a tak... odkaz na složku mi přijde lepší, ale záleží na hostingu obrázků...
    },
    {
        page_name: "lizzard_x", //   Kvůli URL
        link_text: "Lizzard X", //   Kvůli odkazům v tabulce/bočním panelu
        type: "akce", // (nebo jiné, ale prostě "bojové akce, tréninky, propagační akce")    // Kvůli rozřazení do typů (asi nebo to udělám jinak, ale nechci ručně)
        date: "21.2.2020-24.2.2020",
        year: "2024", // Kvůli automatickému zobrazení/skrytí odkazů v bočním panelu, dle roku
        title: "Operace Lizzard X",
        main_text: "Střelnice pro děti z příměstského tábora <b>Mladých strážníků</b> <i>MP HB</i>. Ukázka airsoftu s možností si zastřílet."
        //photos: Buď odkaz na celou složku ("api/data/images/${page_name}") nebo odkazy na jednotlivé obrázky, s možností dělat popisky a tak... odkaz na složku mi přijde lepší, ale záleží na hostingu obrázků...
    },
    {
        page_name: "fara_x", //   Kvůli URL
        link_text: "Fara X", //   Kvůli odkazům v tabulce/bočním panelu
        type: "propagace", // (nebo jiné, ale prostě "bojové akce, tréninky, propagační akce")    // Kvůli rozřazení do typů (asi nebo to udělám jinak, ale nechci ručně)
        date: "21.2.2020-24.2.2020",
        year: "2024", // Kvůli automatickému zobrazení/skrytí odkazů v bočním panelu, dle roku
        title: "Fara",
        main_text: "Střelnice pro děti z příměstského tábora <b>Mladých strážníků</b> <i>MP HB</i>. Ukázka airsoftu s možností si zastřílet."
        //photos: Buď odkaz na celou složku ("api/data/images/${page_name}") nebo odkazy na jednotlivé obrázky, s možností dělat popisky a tak... odkaz na složku mi přijde lepší, ale záleží na hostingu obrázků...
    }
]