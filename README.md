// TODO udělat normální readme

# doomtroopers_website

## GitHub pages:

https://stackoverflow.com/questions/75784781/how-to-host-a-sveltekit-app-on-github-pages
https://medium.com/mkdir-awesome/a-piece-of-cake-deploying-sveltekit-on-github-pages-bc851ec860ad
https://kit.svelte.dev/docs/adapter-static#github-pages
https://github.com/metonym/sveltekit-gh-pages
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit

## Code for the page:

https://rodneylab.com/simple-svelte-responsive-image-gallery/
https://kit.svelte.dev/docs/images
https://svelteland.github.io/svelte-kit-blog-demo/create-your-blog/
https://fantinel.dev/blog-development-sveltekit

## Random

https://github.com/estruyf/vscode-front-matter
https://frontmatter.codes/




# Plán

- Basic statická stránka
Viz web_layout.jpg

routes/gallery/trainings (nebo jiné, ale prostě "bojové akce, tréninky, propagační akce")/[page_name]

Plus nástěnka, ale to ještě moc nevím, jak bude


JSON s daty:

{
    {
        page_name: "lizzard_x" //   Kvůli URL NO DESIGN!
        link_text: "Lizzard X" //   Kvůli odkazům v tabulce/bočním panelu
        type: "training" // (nebo jiné, ale prostě "bojové akce, tréninky, propagační akce")  NO DESIGN!   // Kvůli rozřazení do typů (asi nebo to udělám jinak, ale nechci ručně)
        date: "21.2.2020-24.2.2020"
        year: "2024" // Kvůli automatickému zobrazení/skrytí odkazů v bočním panelu, dle roku NO DESIGN!
        title: "Operace Lizzard X" // + ", {date}
        main_text: "Střelnice pro děti z příměstského tábora <b>Mladých strážníků</b> <i>MP HB</i>. Ukázka airsoftu s možností si zastřílet."
        photos: Buď odkaz na celou složku ("api/data/images/${page_name}") nebo odkazy na jednotlivé obrázky, s možností dělat popisky a tak... odkaz na složku mi přijde lepší, ale záleží na hostingu obrázků...
    }

}

Který to následně vykreslí (podle page_name -> pokud nenajde, tak 404)