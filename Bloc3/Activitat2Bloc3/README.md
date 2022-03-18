1- Crea la DTD que permeti validar el document XML que es mostra a continuació. Mira que el document XML està ben format abans de crear-la DTD.

La DTD que validi aquest document ha de tenir en compte les següents característiques:
- No sempre hi ha una web amb la informació del llibre.
- Es vol guardar informació sobre el fitxer gràfic que conté la portada del llibre. Aquest fitxer de la portada no sempre està disponible.
- En cas que no es proporcioni l'any del llibre es posarà per defecte 2000.
```xml
<biblioteca>
    <llibre codi="LL1" any="2002">
        <titol>El instituto</titol>
        <idioma>Anglès</idioma>
        <genere>suspens</genere>
        <autor>Stephen King</autor>
        <web>https://www.todostuslibros.com/libros/el-instituto_978-84-01-02235-7</web>
        <portada>/imatges/elinstituto.gif</portada>
    </llibre>
    <Llibre codi="LL2">
        <titol> La ruta infinita</titol></titol>
        <idioma>Espanyol</idioma>
        <genere>històrica</genere>
        <autor>José Calvo Poyato</autor>
    </llibre>
</biblioteca>
```

2- Uns tècnics d’informàtica necessiten un format de fitxer per intercanviar informació sobre tot el material informàtic que utilitzen. Volen implementar la següent estructura XML amb aquest objectiu:
- Un element arrel que podria ser: `<materialsInformatics>`
- Aquest element pare (arrel) estirà format per elements amb la informació de cada material, per exemple podria ser: `<material>`.
- Per a cada «material», volen emmagatzemar:
    - Codi de material (com atribut)
    - Descripció (No pot quedar buida)
    - Quantitat en estoc
    - Lloc on es guarda al magatzem (opcional)
    - Proveïdor
- Nom del proveïdor
- Adreça postal
- Adreça electrònica
- Telèfon (opcional)

Crea un XML d’exemple amb un contingut (almanco ha d'haver-hi informació de 3 materials).

Defineix la DTD corresponent per poder validar.

4- Per a cada DTD, crea un document XML vàlid. (Has d'afegir contingut a tots els documents)

4.1- Es tracta d'un document que mostrarà la informació de missatges de telèfon.
```xml
<!DOCTYPE missatges [
    <!ELEMENT missatges (missatge)>
    <!ELEMENT missatge (telefon, data, hora, titol_missatge, cos_missatge)>
    <!ELEMENT telefon (#PCDATA)>
    <!ELEMENT data (#PCDATA)>
    <!ELEMENT hora (#PCDATA)>
    <!ELEMENT titol_missatge (#PCDATA)>
    <!ELEMENT cos_missatge (#PCDATA)>
]>
```
4.2- Es tracta d'un document que mostrarà la informació de llibres d'una biblioteca.
```xml
<!DOCTYPE biblioteca [
    <!ELEMENT biblioteca (llibre*)>
    <!ELEMENT llibre (titol, editorial, (edicio | ISBN), numero_de_pagines?, autor*)>
    <!ELEMENT titol (#PCDATA)>
    <!ELEMENT editorial (#PCDATA)>
    <!ELEMENT edicio (#PCDATA)>
    <!ELEMENT ISBN (#PCDATA)>
    <!ELEMENT numero_de_pagines (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ATTLIST llibre codi ID #REQUIRED>
]>
```
4.3- Es tracta d'un document que mostrarà la informació de productes que s'han comprat.
```xml
<!DOCTYPE llistaCompra [
    <!ELEMENT llistaCompra (producte*)
    <!ELEMENT producte(quantitat, preu)>
    <!ATTLIST producte ref CDATA #REQUIRED>
    <!ATTLIST producte fecha CDATA #IMPLIED>
    <!ATTLIST producte seccio (alimentacio | drogueria | congelats) #REQUIRED >
    <!ELEMENT quantitat (#PCDATA)>
    <!ELEMENT preu (#PCDATA)>
]>
```
4.4- Es tracta de una document que mostra informació envers a una secció esportiva que vols
emmagatzemar informació d'esports i equips.
```xml
<!DOCTYPE seccio_esportiva [
    <!ELEMENT seccio_esportiva (esport*)>
    <!ELEMENT esport (equip, categoria?, poblacio)>
    <!ATTLIST esport nom NMTOKENS #REQUIRED>
    <!ATTLIST esport modalitat (individual | grup) #REQUIRED>
    <!ELEMENT equip (#PCDATA)>
    <!ATTLIST equip codi ID #REQUIRED>
    <!ELEMENT categoria (#PCDATA)>
    <!ELEMENT poblacio (#PCDATA)>
    <!ATTLIST poblacio pais CDATA #IMPLIED>
]>
```
5- Si tenim el següent text:
```
La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitale (LOPD-GDD) es una ley orgánica aprobada por las Cortes Generales de España que tiene por objeto adaptar el Derecho interno español al Reglamento General de Protección de Datos. Esta ley orgánica deroga a la anterior Ley Orgánica 15/1999 de Protección de Datos de Carácter Personal (aunque se mantiene vigente para la regulación de ciertas actividades).
```
- Crea un XML que mostri el contingut amb una entitat interna a la DTD. Basta crear un sol element a l'XML.