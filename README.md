# frameworks-ontdekken

## **11ty**
https://github.com/Matthijs217/11ty

### User eXperience
- Doelgroep <!-- Wie zijn de gebruikers, wat voor apparaten, snel internet of niet? Daarna -> wat voor type site deze stack genereert (bijv zwaar op 3d animatie of veel javascript?)  -->
  11ty is ideaal voor blogs, documentatie en e-commerce content. Eigenlijk alles waarbij snelle eerste render en navigatie belangrijk zijn. 11ty genereert statische HTML, dus geen JS nodig waardoor het dus voor veel mesnen toegankelijk is en het dus super werkt op low-end devices en trage netwerken. 

- WCAG <!-- WCAG test, device gewoon alles.  -->

- Bevindingen <!-- Wat valt er op... -->

### Developer eXperience
- Functionaliteit <!-- Ontwikkeling ervaring, werkt het lekker -->
  
  Ik vond 11ty best makkelijk werken moet ik zeggen, maar ik maakte wel gebruik van een [tutorial](https://11ty.rocks/posts/create-your-first-basic-11ty-website/). Maar als ik het zonder moest doen vond ik het wel wat lastiger te begrijpen. Je kan wel veel templates ook gebruiken zoals; Nunjucks, Liquid etc..
  
- Betrouwbaar <!-- Performance, hoe word er om gegaan met bugs bijvoorbeeld -->

  11ty maakt gebruik van een github repo waar je bijvoorbeeld een bugg in kan delen. Deze houden ze ook goed actief bij dus daar word wel goed mee om gegaan. Ik vind hun eigen website heel onoverzichtelijk en zat echt te zoeken waar wat zit, de docs zijn dan ook niet lekker te volgen.
  
- Gemak <!-- Documentatie, snippets, filters werkt dat lekker -->
  
  Zoals ik al zei vond ik de docs erg onoverzichtelijk en het voelt gewoon niet lekker ofzo. Ik heb een kleine pagina gemaakt dat ging wel maar het was erg zoeken, meer dan met andere frameworks
  
- Bevindingen <!-- -->

### Content Management eXperience

#### Directus
- Kennis <!-- Kunnen ze makkelijk omgaan met de CMS of hebben ze kennis nodig over frontend.  -->
Directus bied een visual studio. Hierin kan je dus de content gemakkelijk aanpassen naar wat je wilt. Dit is voor mensen zonder enige code ervaring of cms ervaring super gemakkelijk om te gebruiken. Daarnaast heeft directus ook een mooie getting started voor meer uitleg.

- Bevindingen <!-- -->

## **React**

### User eXperience
- Doelgroep <!-- Wie zijn de gebruikers, wat voor apparaten, snel internet of niet? Daarna -> wat voor type site deze stack genereert (bijv zwaar op 3d animatie of veel javascript?)  -->
- WCAG <!-- WCAG test, device gewoon alles.  -->
- Bevindingen <!-- Wat valt er op... -->

### Developer eXperience
- Functionaliteit <!-- Ontwikkeling ervaring, werkt het lekker -->
- Betrouwbaar <!-- Performance, hoe word er om gegaan met bugs bijvoorbeeld -->
- Gemak <!-- Documentatie, snippets, filters werkt dat lekker -->
- Bevindingen <!-- -->

### Content Management eXperience
- Kennis <!-- Kunnen ze makkelijk omgaan met de CMS of hebben ze kennis nodig over frontend.  -->
- Bevindingen <!-- -->
  
## **Astro + Supabase (directus)**

### User eXperience
- Doelgroep <!-- Wie zijn de gebruikers, wat voor apparaten, snel internet of niet? Daarna -> wat voor type site deze stack genereert (bijv zwaar op 3d animatie of veel javascript?)  -->
  Astro is gemaakt voor "content gerichte sites" zoals: blogs, webshops of documentatie. Het is erg handig voor elke gebruiker aangezien het werkt met een 0kb JS wat zorgt dat de site snel is, dus ook mensen met een oude telefoon of slome 4g kunnen de site makkelijk gebruiken.
  
- UX Test (Lighthouse)
  Astro is echt top qua performance en lighthouse. Ik heb een simpele fetch een simpele pagina met wat articles een formulier etc. Ik laad de blogs in via supabase en de lighthouse komt gewoon met 2x 100
  <img width="888" height="726" alt="image" src="https://github.com/user-attachments/assets/a149a0db-ed00-4050-8505-8442d1069a42" />

  ik heb verder nog een handmatige accessibility test gedaan en deze ging ook helemaal top.

  
- Bevindingen <!-- Wat valt er op... -->

### Developer eXperience
- Functionaliteit <!-- Ontwikkeling ervaring, werkt het lekker -->
  Ik vond het echt super makkelijk om Astro op te starten. Zoals je kan zien in de [issue](https://github.com/Matthijs217/frameworks-ontdekken/issues/1) was het super simpel en makkelijk te volgen. Het werkt net zoals svelte ook met file based routing. Dus elke folder die je aanmaakt is een route. Daarnaast krijg je op je dev server een kleine toolbar om zelfs accessibility te testen en de zo gehete "islands" te inspecten.
  <img width="559" height="767" alt="image" src="https://github.com/user-attachments/assets/f463074e-97a7-41ce-873b-d1a298b62629" />

- Betrouwbaar <!-- Performance, hoe word er om gegaan met bugs bijvoorbeeld -->
  Astro heeft een uitgebreide community. Een discord met 35.000 leden, waar je support kanalen vind en zelfs themes. Daarnaast kan je bugs melden via dat menu'tje wat ik net liet zien. Daarnaast heeft Astro zelfs een eigen debug component wat je value gelijk in je component laad. En er is een hele pagina over troubleshooting en bekende problemen. Als je zelf een issue hebt, maak gewoon een issue aan op hun astro repository op github!

- Gemak <!-- Documentatie, snippets, filters werkt dat lekker -->
  Ik vind de documentatie heel fijn voor een beginnend framework developer. Ik volgde de stappen makkelijk om een project te starten en wat je daarna allemaal kan. Sommige docs vind ik moeilijk te volgen. Maar deze heeft wel echt een soort chronologische volgorde erin zitten wat ik erg fijn vind. Ik ben er nog niet echt achter hoe die filters nou precies werken, dus misschien is dat nog wat onduidelijk.

  Als extra voorbeeld, ik ben bezig met een login systeem en er komt een error en kijk hoe mooi ze dat afhandelen:
  <img width="457" height="928" alt="image" src="https://github.com/user-attachments/assets/e7690321-0321-484a-88c9-f666646f4649" />

  
- Bevindingen <!-- -->

### Content Management eXperience

#### Directus
- Kennis <!-- Kunnen ze makkelijk omgaan met de CMS of hebben ze kennis nodig over frontend.  -->
Directus bied een visual studio. Hierin kan je dus de content gemakkelijk aanpassen naar wat je wilt. Dit is voor mensen zonder enige code ervaring of cms ervaring super gemakkelijk om te gebruiken. Daarnaast heeft directus ook een mooie getting started voor meer uitleg.

#### Supabase

Supabase is een BaaS (backend as a service). Het biedt een kant-en-klare toolkit met een PostgreSQL-database, authenticatie, realtime-functies, opslag, en automatisch gegenereerde API's. Astro bied een uitgebreide documentatie in samenwerking met supabase om dit helemaal in te stellen voor Astro. Hier word stap voor stap uitgelegd hoe je een authenticatie installeert voor een inlog systeem. Je kan verschillende authenticaties aanzetten zoals gewone gmail authenticatie, maar ook Github, Google, Apple en zelfs Figma!

Supabase is voor mensen met kennis ook nog redelijk lastig om te gebruiken vind ik en vereist wel wat tutorials.
https://docs.astro.build/ar/guides/backend/supabase/
