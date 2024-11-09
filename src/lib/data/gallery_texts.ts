// Zprovoznit odkazy
// Projít TODOčka

/* Boiler plate text
    page_name: "", // Využívá se v URL stránky a obrázků, pouze malá písmena a čísla, mezery nahrazené "-"" !
    link_text: "", // Využívá se v bočním panelu, může mít jakýkoliv formát
    type: "" // Třídění podle typu akce (akce, treninky, propagace)
    display_date: "", // Datum akce zobrazené v tabulce a v nadpisu
    day: ,  // Kvůli řazení v tabulkách, počátek akce u vícedenních
    month: , // Kvůli řazení v tabulkách
    year: , // Rok akce kvůli správnému zobrazení/skrytí odkazů v bočním panelu
    title: "", // Nadpis akce na stránce s informacemi a v tabulce v galerií
    main_text: "", // Popisek, podporuje formátování
                        - HTML (zobrazuje se jako <article>, např.: <b> <br/> <p> <i> atd...)
                        - CSS v podstatě taky, ale moc nedoporučuji

    https://www.w3schools.com/TAGS/default.asp
    https://www.w3schools.com/TAGS/tag_pre.asp
    https://www.w3schools.com/TAGS/tag_section.asp
    https://www.w3schools.com/TAGS/tag_wbr.asp

    {
        page_name: "",
        link_text: "",
        type: "",
        display_date: "",
        day: ,
        month: ,
        year: ,
        title: "",
        main_text: `
        `
    },
*/

/* Nahrávání obrázků

    1. page_name (POZOR na mezery!)
    2. Home/Storage Accounts/ dtimagestorage | Storage Browser / dt-images
    3. + Add Directory , name: page_name
    4. Ok
    5. Upload
    6. Otestovat, že jsou i na stránce


*/

// Možní jednou bude potřeba předělat, až bude fakt tuna textů... idk

export const gallery_pages: Array<GalleryTextsDataValue> = [
    {
        page_name: "lizzard_xi",
        link_text: "Lizzard XI",
        type: "akce",
        display_date: "20.-23. 8. 2020",
        day: 20,
        month: 8,
        year: 2020,
        title: "Operace Lizzard XI",
        main_text: `
        <b>Čtvrtek 20.8.:</b><br/>
<p>Odjezd členů KVH Doomtroopers z HB v počtu 5 bojovníků povstalecké skupiny – Cloši, Sniper, Lulu, Pavel, Mory. Po registraci započala stavba obydlí a technického zázemí v Heratu.</p>
<br/>
<b>Pátek 21.8.:</b> </br>
<p>Při měření a kontrole předepsaných úsťových rychlostí zbraní nás překvapila neohlášená úprava pořadatele v podmínkách měření pro HPA a plynovek. Nehodnotilo podle Joulů ale m/s což bylo v rozporu se zaslanými instrukcemi pořadatelem na email.<p/>
<br/><p>Úkol 1: Opuštěná vesnice. Úkolem bylo nalézt bod zájmu, obsadit a udržet. Pokus přesunout se pěšky z Heratu byl zmařen nepřátelskými jednotkami hlídajícími křižovatku u vesnice. Následovalo stažení a přesun vozidlem na bod výsadku Bravo 3 i s ostatními bojovými uskupeními vesnice Herat. Jednotka se ve formaci „V“ vydala směrem Velký jelení vrch. Po nalezení bodu zájmu byl zaujat obranný perimetr v předsunuté pozici na úpatí vrcholu Jelení vrch. Bod zájmu byl úspěšně držen do stanoveného časového limitu. Celá akce se odehrála bez kontaktu naší jednotky s nepřítelem.
</p><br/><p>    Úkol 2: Poutní místo - obrana. V odpoledních hodinách byl stanoven další úkol. Obrana bodu Poutní místo před útokem jednotek ISAF a vesnice nepřátelských povstalců z Bhakkaru. Po zřízení obranného perimetru bodu Poutní místo se objevila mechanizovaná pěchota ISAF, která zaujala postavení a vyčkávala. Před západem slunce započal nepřátelský útok ze SZ a SV. Za cenu těžkých ztrát ve vlastních řadách (Sniper, Lulu, Mory, Cloši) se dařilo nepříteli způsobovat velké ztráty vozidel a pěchoty. Poslední přeživší Pavel převzal organizaci místa a pod rouškou tmy provedl s ostatními povstalci obchvatný útok z levého křídla. Díky této akci zůstal bod Poutní místo v našem držení. Následoval návrat do vesnice a konec bojových aktivit pro tento den. Bohužel pozdě večer došlo k úrazu Ládi, kdy při pádu do jámy na kraji lesa vedle místa táboření, došlo k natažení vazů pravého hlezna (vyvrtnutý kotník) a dále nebyl schopen bojových činností.
</p>
<br/>
<b>Sobota 22.8.:</b></br>
<p>K naší jednotce byli přiděleni 3 členové na pozici střelec. Tato skupinka z okolí Karlštejna (zdravíme ???? ) doplňovala naše stavy po celo dobu akce.</p>
<br/>
<p>
  Úkol 3: Bod zájmu 1 a 2 (křižovatka a Baqikhel). Naše jednotka byla přejmenována na Lima 7. Přesun na bod výsadku Bravo 3, dosažení úpatí kopce Velký jelení vrch a vytvoření obranného perimetru. Z důvodu rušení spojení nepřátelskými vysílači, jsme byli nuceni využívat telefon a celá koordinace se tím zpomalila. Po shromáždění sil na úpatí vrchu začal přesun k bodu zájmu - Baqikhel. Po dobu přesunu jsme byli pod palbou odstřelovačů a náš postup byl monitorován nepřátelským dronem. Na tomto bodě jsme dostali informaci přeřazení na jiný úkol. Bylo nutné přesunutí do domovské vesnice, které se naštěstí uskutečnilo vozidly.
</p>
<br/>
<p>
  Úkol 4: Vyhlídka - obrana. Obrana Vyhlídky (bod Indiana 2) byl důležitý úkol, který měl návaznost na další akce a možnosti využívání spojení. Zúčastnilo se ho celé bojové uskupení vesnice Herat, Bang-hází a Asmar. Naše skupina zaujala obranné postavení na jižní straně Vyhlídky a kryla tak záda spojencům. Brzy přišel masivní útok nepřítele, který zničil veškerou naši obranu. Sniper byl zasažen z bezprostřední blízkosti 3 metrů do obličeje, ostatní členové jednotky byli postupně zneškodněni. Na místo bylo vysláno mnoho posil, ovšem bez kladného efektu na výsledek bitvy. Tento úkol se povstalcům nepodařil splnit. Při tomto úkolu se ztratil Šnek, který po bloudění okolo dalších základen a vesnic našel cestu k Heratu.</p>
<br/><p>Úkol 5: Soutěska Wasta. Na Soutěsku Wasta současně útočila vesnice Herat a Bang-hází, bod zájmu byl po přestřelce s nepřítelem získán a začalo se stavbou obranného perimetru. Naše skupina Lima 7 společně s dalšími zaujala místo na skalní vyvýšenině (bod Bravo 5). Kolaborantský nepřítel z vesnice Bhakkar se objevil na protějším svahu a ostřeloval naše pozice, začal tvrdý boj o pozici, po smrti všech důstojníků se velení ujal Pavel. Bohužel ani tak se nepodařilo ubránit bod zájmu (Soutěska Wasta).</p>

<p>
Po této misi nás opustil zraněný Láďa, zážitky nabitý Šnek a Lulu, který řídil auto. Do této chvíle Láďa neplnil bojové úkoly s jednotkou. Staral se o provoz základny, vařil válečníkům kafé v džezvě a prováděl odposlech radioprovozu. </p>
<br/><p>Úkol 6: Noční mise – obrana bodu Bravo 3. Této mise se účastnil pouze Cloši a jeden člen z posilové skupiny (z okolí Karlštejna). Cílem bylo ubránit křižovatku na bodě výsadku od 1:00 do 3:00 ráno (neděle). Přesun na místo proběhl bez problému, byl zaujat obranný perimetr, 4 členové skupiny s nočním viděním hlídkovali v okolí. Nepřítel se neukázal, a tak byl bod úspěšně udržen. Povstalci s nočním viděním se vydali k nepřátelské vesnici, kde mučednicky padli ve výbušných nástrahách a mohli si jít užívat 72 panen.</p>
<br/>
<b>Neděle 23.8:</b></br>
<p>Následoval poslední úkol pro naší vesnici Herat, kterého se naše skupina nezúčastnila a vydala domů s ohledem na některé spěchající bojovníky, ve zbylém počtu 4 špinavých a válkou zbídačených povstaleckých veteránů. Pouze naše sousední posilová skupina 3 mužů vyrazila do boje, těm náleží patřičné uznání.
</p>
`
    },
    {
        page_name: "strilecka_30_5_2021",
        link_text: "Střílečka 30. 5. 2021",
        type: "akce",
        display_date: "30. 5. 2021",
        day: 30,
        month: 5,
        year: 2021,
        title: "Střílečka",
        main_text: `
        <p>Nedělní střílečka dne 30.5.2021. Děkujeme Airsoft Team Highlander a klukům z týmu z 24. SnP za to že přijeli. Díky silnému protivníkovi to bylo náročné bojové odpoledne. Rádi vás opět uvidíme na další akci.
        </p>
        `
    },
    {
        page_name: "taskent_xiii",
        link_text: "Taškent XIII",
        type: "akce",
        display_date: "2.-3. 7. 2021",
        day: 2,
        month: 7,
        year: 2021,
        title: "Operace Taškent XIII",
        main_text: `
        <p>Boje povstalců vs NATO o pozice, které byly značeny vlajkami. Cílem bylo obsadit a co nejdéle udržet příslušný bod v terénu. Po součtu všech bodů, dle obsazenosti vlajek, vyhráli povstalci.
        </p>
        `
    },
    {
        page_name: "strilecka_31_7_2021",
        link_text: "Střílečka 31. 7. 2021",
        type: "akce",
        display_date: "31. 7. 2021",
        day: 31,
        month: 7,
        year: 2021,
        title: "Střílečka",
        main_text: `
        <p>Ve stylu "najdi a znič" proběhlo celé odpoledne. V první polovině herního času se hrálo klasicky s dlouhými zb a po celém lese. Druhá polovina herního času se hrála na ve zmenšeném prostou a pouze s krátkými zb. Hra s pistolemi byla velice zábavná, vtipná a poučná. Děkujeme všem účastníkům.
        </p>
        `
    },
    {
        page_name: "lizzard_xii",
        link_text: "Lizzard XII",
        type: "akce",
        display_date: "20.-22. 8. 2021",
        day: 20,
        month: 8,
        year: 2021,
        title: "Operace Lizzard XII",
        main_text: `
        <b>Pátek</b><br/>
<p>
  První úkol bylo najít a obsadit bod zájmu a následně udržet od 12 do 15 hod. s tím, že kdo má místo pod kontrolou v 15 hod, tak vyhrál. Místo zájmu se nám spolu s dalšími povstalci podařilo v lese najít a obsadit už okolo 12. hodiny, následovala kruhová obrana ve dvou řadách. Začalo pršet. Okolo 13. hodiny přijelo několik aut s vojáky ISAF a zahájilo útok, který se nám podařilo odrazit s malými ztrátami ve vlastních řadách. Vojáci se stáhli, ošetřili zraněné a doplnili stavy, reorganizovali se a zahájili druhý útok spojený s obchvaty na obou křídlech. Následoval intenzivní boj. Povstalci i vojáci utrpěli značné ztráty. Bod zájmu byl vojáky ISAF dobyt, obsazen a držen až do 15. hodiny. Při této přestřelce byla citelně znát výhoda na straně ISAF, a to ošetřování zraněných vojáků mediky a jejich návrat do hry. Při splnění tohoto úkolu příslušná strana získala munici k ničení vozidel protivníka.
</p> <br/>
<p>
  Dalším úkolem, který začínal v 18 hod. a končil ve 21 hod., bylo obsadit a držet vlajku na dně vypuštěného rybníka. Většina povstalců ze všech vesnic v provincii se sešla na smluveném místě a vyrazila najít bod zájmu. Bod zájmu byl nalezen, obsazen a držen. Protože se do cca 20 hod. nic nedělo, polevila obrana a morálka povstalců klesla. Vůbec obrana a rozmístění povstalců byly místy velmi slabé a zkušený protivník toho využil. Okolo 20. hodiny došlo k prvním útokům ISAF, docházelo k velmi intenzivním bojům na druhé straně rybníka, než byla naše malá skupinka. Do našeho hlídaného perimetru se snažil proplížit sniper, který byl snadno odhalen a pak přesnou střelbou eliminován, zanedlouho do našeho prostoru vjela tři terénní vozidla s kulometnou věží, která se nám podařilo vyřadit z boje a střelbou donutit k ústupu. Mezitím boje u vlajky polevovaly, jak prořídly naše povstalecké stavy, tak jsme se ve 20:45 stáhli k vlajce a podpořili její udržení. Podařilo se nám se stáhnout, ale vzhledem k již značně pokročilému šeru a nepřehlednosti boje došlo k rozdělení naší skupinky. Dva se snažili dostat se bezprostředně k vlajce a bránit ji a zbytek zůstal na hrázi rybníka a nasvěcoval a odstřeloval útočící vojáky. Situace u vlajky byla velmi nepřehledná a vypjatá, střílelo se na blízko na všechny strany a dlouhými zb. Tady se nám vymstila mezera v obraně, kdy nám do zad, přes rákos a asi i přes bažinu přešel ISAF sniper a za pomoci nočního vidění a odstřelovačky postupně vystřílel zbylou obranu vlajky. ISAF místo dobil v 20:57 hod. a vyhrál i tuto misi.
</p><br/>
<b>Sobota</b><br/>
<p>
  První úkol byl obsadit a udržet do 10 hod. kopec Doubek, který byl již obsazen ISAF. Vojáci dokázali zlikvidovat vše, co se pod kopcem pohnulo, nicméně se některým povstalcům podařilo připlížit se až těsně pod vrchol, nadosah k vojákům, vzhledem k vzájemné blízkosti (pod 10 m) došlo na pistolovou přestřelku. Tímto chválíme posádku ISAF, co byla v okopu, že k obraně použili pistole. Kopec se nám nepodražilo v časovém termínu získat.
</p> <br/>
<p>
  Dalším úkolem byl konvoj. Dostat vojenské bedny z bodu A do bodu B. Na smluveném místě se sešla drtivá většina povstalců a jejich vozidel. Po uspořádání do formace rojnice se vyrazilo vpřed a za podpory aut s kulometnou věží se nám podařilo prostřílet se až téměř do cíle, kde se konvoj zastavil, protože vojáci ISAF kladli tuhý odpor. Nakonec se nám podařilo zlomit poslední odpor a konvoj dojel do cíle, úkol se nám podařilo splnit.
</p> <br/>

<i>Křižovatka</i><br/>
<p>
  Na začátku akce, kdy se na cyklostezce formovaly povstalecké jednotky, docházelo k vtipným interakcím s civilisty (turisty a cyklisty), kdy jsme jako správní hadrníci škemrali o cigarety nebo se ptali turistů, kudy vede cesta na Kábul.
</p> <br/>
<p>
  Dalším úkolem bylo obsadit vlajku u křižovatky, která se nacházela v lese. Bod zájmu byl už obsazen vojáky ISAF, takže jsme opět dobývali. Vzhledem k dobře zamaskovaným vojákům krytým v zákopech a jámách se nám za velkých ztrát podařilo prorazit vnější obranný perimetr, postupně byla křižovatka obklíčena, smyčka se utahovala, ale v časovém limitu se nám nepodařilo bod zájmu získat. I zde jsme pocítili výhodu protivníka ošetřovat raněné.
</p> <br/>
<i>Planina (večer 19 – 21 hod)</i><br/>
<p>
  V Sarkání byl sraz vesničanů z Herátu a Asmaru, odtud se vyrazilo na další bod zájmu, a to byla Planina. Postupovali jsme spolu s dalšími povstalci v rojnici lesem. Došlo k prvním střetům s předsunutými hlídkami vojáků ISAF. V lese se šeřilo. Bohužel mezi povstalci bylo dost kemperů, kteří místo postupu vykecávali a když se náhodou zapojili do boje, tak byli natolik pozadu, zmatení a mimo, že postříleli vlastní lidi v první linii, takže slibný útok přišel o „tahouny“ a veškerý postup se zastavil. Bohužel tento rozšiřující se nešvar jsme zaznamenali poměrně často. Úkol nebyl splněn, i když se povstalci dostali poměrně blízko k bodu zájmu (došlo i na pistole).
</p><br/>
<b>Neděle</b><br/>
<p>
  Posledním úkolem bylo najít 3x vlajku a obsadit ji. Úkol začínal v 9 hod a končil, jako celý Lizzard XII, ve 12 hod. Za pomocí vozidel byli povstalci přepraveni blíže k bodu zájmu. Bohužel vlajky už byly obsazeny vojáky ISAF. Došlo k bojům, ztráty byly na obou stranách, opět byla znát výhoda možnosti ošetřování vojáků ISAF. Postupně intenzita útoku povstalců polevovala, podle toho, jak se naše počty živých snižovaly. Naše skupina padla okolo 10:30 hod. Následoval přesun do vesnice, začalo pršet, balíme a odjíždíme domů.
</p> <br/>

<p>
  Lizzard XII se nám líbil, je to už taková srdcová záležitost. Přesto, že povstalci skoro všechny úkoly prohráli, jsme si užili spoustu legrace, vtípků, připomněli si specifický vesnický a povstalecký folklór a poznali nové spolubojovníky.
</p>
        `
    },
        {
        page_name: "kandahar_iii",
        link_text: "Kandahár III",
        type: "akce",
        display_date: "8.-10. 10. 2021",
        day: 8,
        month: 10,
        year: 2021,
        title: "Operace Kandahár III",
        main_text: `
        <p>
  Akce Kandahár III byl týmem DT pojat jako méně komfortní na zázemí oproti Lizzardu, takže se nebral stan, lehátka, židličky ani stoličky, ale spalo se pod plachtou, na zemi, s omezenou možností vaření.
</p> <br/>
<b>Pátek</b> <br/>
<p>
  První úkol začal ve 20 hodin, cílem bylo nedaleko hlavního města Kandahár obsadit a udržet opuštěnou základnu ISAF a udržet ji do 24. hodiny. Obsazení proběhlo hladce, bez odporu. Proběhly 2 slabší útoky, které povstalci odrazili. Úkol se podařilo splnit.
</p>
<br/>
<b>Sobota</b> <br/>
<p>  
  Mrzne, ráno -3 °C, přes den polojasno +12 °C. Naším úkolem bylo obsadit kopec Ashraf Motaki. Od 8 hod. byli povstalci naváženi auty blíže k bodu zájmu. V době našeho příchodu kopec bránili vojáci ISAF, po zapojení do již probíhajících bojů se nám podařilo spolu s dalšími útočníky vytlačit nepřítele a kopec obsadit a udržet do 11. hodiny, kdy tento úkol končil. Mezitím začal další úkol, jehož cílem bylo obsadit návrší s názvem Lokum. Zbylá skupina povstalců, včetně nás, se z Ashraf Motaki organizovaně přesouvala k Lokum, kde došlo ke kontaktu s již zakopanými vojáky ISAF. Začal boj a povstalci se velmi pomalu posouvali vpřed a postupně obsazovali dobité palposty vojáků ISAF. O samotný vršek Lokum byl sveden intenzivní boj, který probíhal na krátkou vzdálenost a v nepřehledném terénu. Pomocí bočního obchvatu po srázu kopce se podařilo zlikvidovat poslední vojáky a návrší bylo obsazeno, úkol byl splněn. Vzápětí vyšel nový úkol, a to bylo najít a osvobodit povstaleckého pilota. Jeho lokace byla přibližně známá, skupina povstalců z Lokum vyrazila směrem k předpokládanému místu držení zajatce. Při přesunu lesem jsme naráželi na jednotlivé body obrany ISAF, která nás úspěšně zdržovala a naše skupina byla zastavena, docházelo k přestřelkám. Naštěstí se k nám pobojovala další skupina povstalců a vytěsnila zbytek vojáků. Bylo 13 hodin a úkol skončil. Bohužel jsme se nedozvěděli, zda se povstalcům podařilo rukojmí vysvobodit, ale vzhledem k tomu, že byl les před 13. hodinou plný malých skupinek povstaleckých jednotek, je možné, že byl úkol splněn.
</p> <br/>
<p>
  Dalším úkolem bylo udržet místo pod kopcem Wais Hotak. Úkol trval od 14. do 17. hodiny. Na místo se sjeli povstalci ze všech vesnic, obrana vlajky se opevnila auty s kulomety na střechách. Předsunuté hlídky povstalců se dostávaly do střetů s vojáky, kterým se nepodařilo se k vlajce přiblížit. Úkol byl splněn.
</p> <br/>
<p>
  Mezitím v jiné části herního prostou probíhal další úkol, jednalo se o obsazení a udržení vlajky na planině v údolí Al-Uzzá. Část povstalců spolu s námi vyrazila pěšky do údolí Al-Uzzá. Následoval přesun lesem v neznámem terénu s možností kontaktu s průzkumníky či vojáky ISAF. Při přesunu (asi 25 povstalců) byla poznatelná „nezkušenost“ některých členů ve skupině. Zatímco zkušenější hráči se na špici dlouhého zástupu pohybovali téměř neslyšně, někteří jedinci ve skupině skopávaly suché větve zasahující do pěšiny, aby je nemuseli složitě přelézat, což bylo pro ně samozřejmě pohodlné, ale bohužel mohlo být smrtící nejen pro pátrače na špici zástupu. Těsně u planiny naše skupina narazila na přibližně stejně početnou skupinu ISAF. Celý kontakt proběh ve svahu, došlo k přestřelce, mrtví na obou stranách, naší snahou bylo vyběhnout svah, tím provést obchvat a na vojáky zaútočit ze shora. Protivník uvažoval stejně, a tak to byl spíše závod, kdo bude dříve na vrcholu kopce. Síly byly vyrovnané, na kopci došlo ke krátké přestřelce a následně se dali vojáci na ústup. Skupina povstalců se vrátila na dno údolí, vlajka byla již v našem držení. Na protějším svahu se drželi v okopu vojáci ISAF, došlo k útoku na toto poslední místo odporu. Vojáci se houževnatě bránili, ztráty byly na obou stranách. Úderem 19. hodiny pro povstalce skončil úkol držet planinu, což se podařilo, a nemělo cenu dále riskovat život, stahujeme se do vesnice. Navíc za tmy byli vojáci díky nočnímu vidění a termokamerám ve značné výhodě. Následoval přesun do města Kandahár, kde jsme se občerstvili a pak dále postupovali do naší vesnice Ghorkar. Na noční úkoly jsme se již nepřihlásili.
</p> <br/>
<b>Neděle</b> <br/>
<p>
  Ráno mrzne, je -4 °C, přes den sluníčko +13 °C. Poslední úkol začínal v 9:00 a končil ve 12:00, stejně jako celá akce Kandahár, cílem bylo obsadit a udržet vlajku nedaleko vrcholu kopce Wais Hotak. Vlajka byla dobře zabezpečena početnou obranou, proto jsme vyrazili do první linie obranného perimetru. Došlo k útoku vojáků na hřebeni. Útok byl vedený tvrdě a koordinovaně, s malými ztrátami jsme se stahovali na lepší obranné místa, kde jsme spolu s ostatními povstalci zastavili postup útočících. Při přestřelkách byly ztráty na straně vojáků vysoké, pravděpodobně došla i možnost ošetřovat raněné. Povstalci provedli zteč, která byla vojáky odražena. Zasažení povstalci byli odtaženi k pojízdné ambulanci a řádně ošetřeni, aby se poté vrátili do první linie. Za pomoci vozidel vybavených kulomety byl proveden druhý útok, který zahnal zbylé vojáky a tím byly ukončeny boje o vlajku. Do konce úkolu zbývalo 20 minut a nic nenasvědčovalo tomu, že by došlo k nějakému frontálnímu zvratu. Okolo obranného perimetru se spontánně ozývala střelba. Úkol byl splněn, vlajku povstalci udrželi.
</p> <br/>
<p>
  Za nás super akce, pěkný a členitý terén, nezaznamenali jsme nějaký konflikt či nepřiznání, vše bylo v pořádku. Chválíme možnost ošetřovat povstalce pomocí mobilní ambulance a dále chválíme organizátory za optimální počet tojtojek ve vesnicích. Jediné, co bylo trochu na škodu, bylo, že měření úsťovek probíhalo na „jednom“ chronu, a tím se vytvářely čekací fronty s dobou 30 a více minut.
</p>
        `
    },
    {
        page_name: "pistovsky_votvirak_2022",
        link_text: "Pístovský votvírák 2022",
        type: "akce",
        display_date: "12. 3. 2022",
        day: 12,
        month: 3,
        year: 2022,
        title: "Pístovský votvírák",
        main_text: `
        <p>Jednodenní akce v Pístovské Aréně. Dvě skupiny proti sobě, červení proti modrým. Cílem bylo v herním prostoru najít zlaté cihly a dopravit je na svou základnu. Protivník (modrý tým) byl houževnatý a dal nám chvílema slušně zabrat. Přesto se červeným podařilo sesbírat více zlatých cihel a jako bonus se nám podařilo ze základny modrých odcizit dvě zlaté cihly. Akci hodnotíme jako povedenou, líbila se nám a určitě přijedeme zase.</p>
        `
    },
    {
        page_name: "kandahar_iv",
        link_text: "Kandahár IV",
        type: "akce",
        display_date: "22.-24. 4. 2022",
        day: 22,
        month: 4,
        year: 2022,
        title: "Operace Kandahár IV",
        main_text: `
        <p>Podařená akce, jen je škoda, že nás z týmu bylo málo.</p>
        `
    },
    {
        page_name: "lizzard_xiii",
        link_text: "Lizzard XIII",
        type: "akce",
        display_date: "27.-29. 5. 2022",
        day: 27,
        month: 5,
        year: 2022,
        title: "Operace Lizzard XIII",
        main_text: `
        <p>Tradiční pohodová akce, kam jezdíme za povstalce. Letos byla bohužel malá účast našich členů. Akce proběhla v malebné pískovcové krajině, nádherné skály, výhledy a hluboké strže, opravdu luxusní terén.
        </p> <br/>
        <p>Naše skupinka byla už od pátečních 10 hodin v kontaktu s bezvěrci a to trvalo až do konce celé akce Lizzard, vyjma nočních akcí, kterých jsme se neúčastnili. Pátek propršel, sobota a neděle byla už v pohodě.
        </p>
        `
    },
    {
        page_name: "kandahar_v",
        link_text: "Kandahár V",
        type: "akce",
        display_date: "21.-23. 4. 2023",
        day: 21,
        month: 4,
        year: 2023,
        title: "Operace Kandahár V",
        main_text: `
        <p>
  Letošní Kandahár jsme opět jeli za povstalce. 

</p> <br/>

<b>Pátek</b><br/>
<i>Noční akce</i><br/>
<p>
  Plníme úkol, přesouváme se lesem s naším konvojem, po kontaktu s nepřítelem dochází k přestřelkám, nám se daří nepozorovaně dosáhnout první linii, po té nás bohužel zastřelili naši povstalci, kteří se do místa bojů přesunuli pozdě a neznajících situace, stříleli po všem co uviděli v termovizi. Takže díky hoši, příště si zmapujte situaci, než začnete pálit. Opět se nám potvrdilo, že bez nočních vidění a termovizí se nemá cenu moc pouštět do nočních akcí.
</p> <br/>

<b>Sobota</b><br/>
<p>
  Spojili jsme se skupinkou povstalců z naší vesnice Ghokar a plnili úkoly – od dobývání míst a vlajek až po jejich bránění. Celkově se nám dařilo a užili jsme si přesuny, střelbu, útoky i ústupy, takže za nás paráda a spokojenost.
</p> <br/>

<b>Neděle </b><br/>
<p>
  Opět se stejnou skupinou povstalců vyrážíme na poslední misi, tj doručit raketu z bodu A do bodu B. Po cestě byl na nás nachystaný dobře zamaskovaný nepřítel, několikrát se konvoj zastavil a povstalecké síly se začali tříštit a slábnout, ambulance nestíhala ošetřovat zraněné povstalce protože jich bylo mraky. Mise byla úspěšně dokončena. Nicméně během bojů jsme oba padli, tudíž jsme se přesunuli do vesnice a hra pro nás skončila.
  
</p> <br/>

<p>
  Akci hodnotíme pozitivně, počasí vyšlo nádherně a užili jsme si bojů. Bohužel jsme zaznamenali problém s nepřiznáváním, a to jak u povstalců, tak i u protivníka. Zbytečně se kazí hra. Co bylo trochu náročné, tak byly noci ve vesnici Ghokar, chápeme, že když se člověk utrhne z domova a práce, tak si chce povyrazit, ale proč se Ghokar změnil v noci na technoparty končící nad ránem? Uprostřed vesnice je v provozu elektrocentrála, aby se mohla sledovat televize? Proč? V Kandaháru se pomocí prodlužováku přesunuli elektrocentrály mimo vesnici. Podezírali jsme tyto skupiny, že jsou to převlečený isafáci, kteří mají za úkol zajistit nevyspání povstalců. Pokud by organizátor vytvořil novou vesnici, kde by se fungovalo víc s přírodou, bez hlasité hudby, televizí a elektrocentrál, tak bychom se do ní přihlásili
</p>
        `
    },
    {
        page_name: "invaze_ii",
        link_text: "Invaze II",
        type: "akce",
        display_date: "13. 5. 2023",
        day: 13,
        month: 5,
        year: 2023,
        title: "Invaze II",
        main_text: `
        <p>Pístov Aréna (Jihlava)<p>
<p>Rozdělení na červené a modré, postupné obsazování vlajek. Chvílemi slušná řežba. Dobrá organizace, nebyl problém s nepřiznáváním. Hru jsme si užili
   </p>     `
    },
    {
        page_name: "bojova_linie_kadlecak_2",
        link_text: "Bojová linie Kadlečák 2",
        type: "akce",
        display_date: "29. 7. 2023",
        day: 29,
        month: 7,
        year: 2023,
        title: "Bojová linie Kadlečák 2",
        main_text: `
        <p>Pořadatel Airsoft klub Světlá nad Sázavou.</p> <br/>
<p>Jelo se za jednotky NATO, jejichž cílem bylo ubránit 4 body po dobu 2 hodin. V tomto časovém úseku se protivníkovi (povstalcům) podařilo dobít pouze dva. Po přestávce začala odpolední bitva o vlajku, ale po cca 15 min nás všechny z lesa vyhnala průtrž mračen a blesky. Akce byla dynamická, náročná, organizačně dobře zvládnutá, takže za nás spokojenost a těšíme se na příští ročník.
   </p>     `
    },
    {
        page_name: "hostage_must_be_rescued",
        link_text: "Hostage must be rescued",
        type: "akce",
        display_date: "24. 9. 2023",
        day: 24,
        month: 9,
        year: 2023,
        title: "Hostage must be rescued",
        main_text: `
        <p>Scénářová střílečka - záchrana rukojmí. Jihlava, Pístovská aréna 24.9.2023.</p> <br/>

<p>Cílem bylo najít a osvobodit rukojmí, což se podařilo. Po prohození stran byl náš úkol zabránit osvobození rukojmí (což se taky podařilo).</p> <br/>

<p>Akci hodnotíme pozitivně. </p>
        `
    },
    {
        page_name: "kandahar_vi",
        link_text: "Kandahár VI",
        type: "akce",
        display_date: "26.-28. 4. 2024",
        day: 26,
        month: 4,
        year: 2024,
        title: "Kandahár VI",
        main_text: `
        <b>Pátek</b><br/>
<p>
  Na akci jsme dorazili v pátek akorát na začátek registrace, přesto jsme čekali ve frontě cca 20 min. Měření úsťových rychlostí nebylo bohužel připravené a informace nebyly. Proto jsme se přesunuli do vesnice Ghokar a v klidu postavili přístřešek. Okolo 18 hod jsme vyrazili na měření úsťovek. Ve frontě se čekalo dalších 50 min. Bohužel i letos nebylo měření úsťovek a registrace organizačně zvládnuté.
</p> <br/>
<p>
 	Páteční noční akce pro nás byla spíše jen takové protažení, jelikož nemáme noční vidění či termo, jsme jen potrava pro kulomety. Nicméně bylo efektní pozorovat odstřelování protivníka stopovkami. Moc pěkné.
</p> <br/>
<b>Sobota</b><br/>
<p>
  Byla ve znamení plnění bojových úkolů, od dobývání pozic až po bránění území. Po večerním návratu do vesnice, jsme se jako civilisté vydali do Kandaháru na kofolu do stánku s občerstvením, protože po celodenním lemtání vody nám už lezla voda krkem. Bohužel kofola nebyla, tak nám jako nealko byla nabídnuta voda…. ISAF nás nezlomil, ale tato situace nás odrovnala...
  <br/>
Sobotní noční akce jsme se neúčastnili.
</p> <br/>
<b>Neděle</b><br/>
<p>
  Cílem bylo obsadit vrchol kopce, kde byl již zakopaný protivník, který svou pozici houževnatě bránil. Postupně se dařilo ISAF likvidovat, bohužel i povstalecké řady prořídli, a bohužel i díky friendly fire (což fakt nechápeme, předci vím, kam, kurwa bober, střílím!), takže jsme se jako mrtvoly přesouvali do vesnice a hra pro nás skončila.
</p> <br/>
<p>
  Kandahár 2024 hodnotíme pozitivně, nějaký zásadní problém s nepřiznáváním jsme nezaznamenali, organizace akce dobrá, až na ty nepřiměřené prostoje u registrace a měření úsťovek. Kupodivu se v Ghokaru dalo spát, elektrocentrály se okolo 02:00 hod vypínaly a po zbytek noci se nekonala technoparty a podobně, takže to bylo fajn.
</p>
        `
    },
    {
        page_name: "lizzard_xiv",
        link_text: "Lizzard XIV",
        type: "akce",
        display_date: "24.-26. 5. 2024",
        day: 24,
        month: 5,
        year: 2024,
        title: "Lizzard XIV",
        main_text: `
        <b>Pátek:</b><br/>
<p>
  Prvním úkolem naší šestičlenné skupiny, bylo přepravit plechovou bednu přes celé herní území do vesnice Asmar. Po vysazení na opačném konci herního prostoru jsme se rychlým tempem a s maximální opatrností dostali bez problémů až do poloviny naší trasy. Zde došlo k nešťastné souhře náhod, kousek od místa, kde jsme se ukrývali před z dáli slyšitelnými auty, došlo k výsadku skupiny ISAF (dvě auta). Při nepozorovaném ústupu došlo bohužel k nechtěnému prozrazení naší skupiny, spustili jsme proto na překvapený ISAF krycí palbu. Pověřeným osobám s bednou, se podařilo zmizet do bezpečí. Zbylí bojovníci hrdinně bojovali, až se jim podařilo setkat se s vytouženými pannami.
</p> <br/>
<p>
  Druhá polovina lidí pokračovala s přesunem bedny do Asmaru. Byla čím dál větší pravděpodobnost, že dojte ke kontaktu s ISAF. Naštěstí se k eskortě bedny přidala skupina cca 10 povstalců, kteří pak zdržovali pronásledovatele a bezpečně doprovodily kluky s bednou do vesnice Asmar. Úkol byl splněn a díky tomu získali povstalci možnost používat na přepravu vrtulník (stěhovací dodávka). Krátce po předání bedny stařešinovi ve vesnici Asmar, přišel vydatný dvouhodinový slejvák, který stany přestali zadržovat a sporadicky začalo kapat do věcí všude možně ve stanu. Když déšť ustal, vyrazili jsme v plném počtu naší skupiny podpořit již probíhající úkol. Spolu s dalšími povstalci se podařilo zmasakrovat vojenský konvoj, který ale s použitím zvláštních taktik dokázal splnit svůj úkol a ubránit zásoby na stavbu předsunuté základny. Následující noční akce jsme se nezúčastnili.
</p> <br/>


<b>Sobota:</b> <br/>
<p>
  Sobotní bojové úkoly jsme plnili od rána, až do večera. Jednalo se o udržení minometného stanoviště, nebo o obsazení a udržení vlajky na stanoveném místě. Do toho nám na střídačku pršelo nebo svítilo sluníčko. Obecně se dá říci, že se povstalcům dařilo, boje byly zuřivé a intenzivní a díky domluvené WhatsApp skupině se dařilo útoky na ISAF celkem organizovat.

</p> <br/>

<b>Neděle:</b> <br/>
<p>
  Posledním úkolem bylo dobít a držet ve stanovený čas předsunutou základnu ISAF. Nedělní nadšení a motivace povstalců byla na vysoké úrovni. Začalo hromadné přesouvání povstalců do prostoru zájmu v lese. Po vzdálení se od povstaleckých vozidel a sanitek došlo k jejich překvapivému přepadu speciální motorizovanou jednotkou ISAF, které se podařilo vyřadit povstalecké sanitky, tím pádem se povstalci nemohli ošetřovat, takže po zásahu kuličkou se člověk mohl v klidu vrátit do vesnice a začít balit. Ztráta sanitek byla pro povstalce bolestná ztráta a v podstatě rozhodla o celé nedělní misi, ve prospěch vojáků ISAF. Naše povstalecké síly ubývaly a díky protiútokům nás ISAF rozprášili. Celkové hodnocení Lizzardu 2024 na body, za splněné úkoly, - vyhráli povstalci.
</p> <br/>
<p>
  Letošní Lizzard byl obzvláště povedený, klidný, nepřiznávání bylo pomálu, organizace celé akce, z našeho pohledu, byla povedená. Díky.
</p>
        `
    },
    {
        page_name: "pochod_2021",
        link_text: "Pochod 2021",
        type: "treninky",
        display_date: "9. 4. 2021",
        day: 9,
        month: 4,
        year: 2021,
        title: "Pochod",
        main_text: `
        <p>Pochod s přespáním v lese.</p>
        `
    },
    {
        page_name: "trenink_30_5_2021",
        link_text: "Trénink 30. 5. 2021",
        type: "treninky",
        display_date: "30. 5. 2021",
        day: 30,
        month: 5,
        year: 2021,
        title: "Trénink",
        main_text: ``
    },
    {
        page_name: "pochod_2022",
        link_text: "Zimní pochod 2022",
        type: "treninky",
        display_date: "5.-6. 2. 2022",
        day: 5,
        month: 2,
        year: 2022,
        title: "Zimní pochod",
        main_text: `
       <p> Akce byla koncipována jako dvoudenní pochod malé průzkumné skupiny na území nepřítele.
</p> <br/> <p>Výsadek proběhl v sobotu ráno na kraji lesa. Prvním úkolem naší tříčlenné skupiny bylo v lese najít pomníček a studánku, což se podařilo. Dalším úkolem bylo prozkoumat zajatecký tábor. Do místa určení jsme se nepozorovaně přesunuli a prozkoumali ho. Při opouštění tohoto místa došlo k útoku nepřátelského odstřelovače. Nedařilo se nám ho lokalizovat. Po té, co nás "držel" na zemi, se ho podařilo najít a eliminovat. Dalším bodem byl bod Rybník, kde na nás čekal informátor s dalšími instrukcemi. Asi 300 metrů před místem setkání nás v malém údolí u potoka přepadla dobře zamaskovaná místní domobrana a kvůli momentu překvapení a připravené léčky nás všechny zlikvidovala. Po oživení jsme pokračovali dále k bodu Rybník, ale informátor tam nebyl. Později jsme se dozvěděli, že byl místní domobranou zajat a úspěšně vyslýchán, proto věděli, že dorazíme. Dalším bodem byla Kota 493, kde jsme měli v mrtvé schránce vyzvednout vzorek očkovacího séra. Při stoupání na kopec jsme opět byli napadeni místní domobranou. Jeden člen naší skupiny byl zasažen, ostatním se podařilo postupně eliminovat obránce a získat vzorek séra. Pro zraněného spolubojovníka jsme povolali vrtulník. V dalším postupu se pokračovalo už jen ve dvou. Posledním sobotním úkolem bylo dojít za světla do cílového místa, provést průzkum lesa a přespat. Do cíle jsme dorazili za šera, takže obsáhlejší průzkum lesa byl proveden až v neděli ráno. Nedělním úkolem bylo se do 12 hod dostat na smluvené místo, kde byla naplánovaná střílečka s dalšími bojovníky. Trasa mimo cesty byla stejně jako v sobotu náročná, bažinatá. Nejvýznamnější překážkou byla lehce rozvodněná řeka Sázava, do toho sněžilo, foukalo a občas i pršelo. Do cíle jsme došli včas a zapojili se do začínající střílečky, tentokrát už bez batohů na zádech.
</p> <br/> <p>
Děkujeme za OPFOR: Morymu z domovského týmu Doomtroopers a klukům z týmu 24. SpN (Přibyslav).
Sérum jsme v přátelském pokecu s domobranou stihli vypít ještě na Kótě 493.
</p>
        `
    },
    {
        page_name: "krouzek_mp_hb_2022",
        link_text: "Kroužek MP HB",
        type: "propagace",
        display_date: "19. 5. 2022",
        day: 19,
        month: 5,
        year: 2022,
        title: "Kroužek MP HB",
        main_text: `
        <p>Střelnice pro děti z Kroužku mladých strážníků MP HB. Malá ukázka airsoftu spolu s možností zastřílet si ze 4 druhů airsoftových zbraní.</p>
        `
    },
    {
        page_name: "krouzek_mp_hb_2023",
        link_text: "Kroužek MP HB",
        type: "propagace",
        display_date: "2. 5. 2023",
        day: 2,
        month: 5,
        year: 2023,
        title: "Kroužek MP HB",
        main_text: `
        <p>Střelnice pro děti z Kroužku mladých strážníků MP HB. Malá ukázka airsoftu spolu s možností zastřílet si z airsoftových zbraní.</p>
        `
    },
    {
        page_name: "tabor_mp_hb_2023",
        link_text: "Tábor MP HB",
        type: "propagace",
        display_date: "5. 7. 2023",
        day: 5,
        month: 7,
        year: 2023,
        title: "Tábor MP HB",
        main_text: `
        <p>Střelnice pro děti z příměstského tábora Mladých strážníků MP HB. Ukázka airsoftu spolu s možností zastřílet si.</p>
        `
    },
    {
        page_name: "fara_hb_2023",
        link_text: "Fara HB",
        type: "propagace",
        display_date: "3. 9. 2023",
        day: 3,
        month: 9,
        year: 2023,
        title: "Fara HB",
        main_text: `
        <p> Střelnice a ukázka airsoftu, Fara HB dne 3.9.2023. Fajnově strávený den mezi příjemnými lidmi z fary. </p>
        `
    },
    {
        page_name: "motorsvet_2023",
        link_text: "MotorSvět",
        type: "propagace",
        display_date: "9. 9. 2023",
        day: 9,
        month: 9,
        year: 2023,
        title: "MotorSvět",
        main_text: `
        <p>Prezentace airsoftu na akci MotorSvět v Havlíčkově Brodě. </p>
        `
    },
    {
        page_name: "tabor_mp_hb_2024",
        link_text: "Tábor MP HB",
        type: "propagace",
        display_date: "1. 7. 2024",
        day: 1,
        month: 7,
        year: 2024,
        title: "Tábor MP HB",
        main_text: `
        <p>Střelnice pro děti z příměstského tábora Mladých strážníků MP HB. Ukázka airsoftu s možností si zastřílet.</p>
        `
    },
    {
        page_name: "bojova_linie_kadlecak_3",
        link_text: "Bojová linie Kadlečák 3",
        type: "akce",
        display_date: "3. 8. 2024",
        day: 3,
        month: 8,
        year: 2024,
        title: "Bojová linie Kadlečák 3",
        main_text: `
        <p>Bojová linie Kadlečák 3, dne 3.8.2024, pořadatel Airsoft klub Světlá nad Sázavou.</p> <br/>
        <p>Jelo se za jednotky NATO, jejíž cílem bylo ubránit 4 body po dobu 3 hodin. V tomto časovém úseku se protivníkovi (povstalcům) podařilo dobít tři. Rozdělení limitů na výkony zb. přidávalo hře na realičnosti, kdy jako obránci jsme měli respekt z odstřelovačů. Akce proběhla bez problémů a byla organizačně dobře zvládnutá, takže za nás spokojenost a těšíme se na příští ročník.
</p>
        `
    },
    {
      page_name: "tabor_mp_hb_2022",
      link_text: "Tábor MP HB",
      type: "propagace",
      display_date: "4. 7. 2022",
      day: 4,
      month: 7,
      year: 2022,
      title: "Tábor MP HB",
      main_text: `
      <p>Střelnice pro děti z příměstského tábora Mladých strážníků MP HB. Ukázka airsoftu s možností si zastřílet.</p>
      `
  },
]