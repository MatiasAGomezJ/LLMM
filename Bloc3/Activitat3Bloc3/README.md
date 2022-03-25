1- Comprova que el següent XML és vàlid per l’esquema XSD que es mostra. Explica en el cas de que no sigui vàlid els canvis fas.

XSD: "adrecesInternet.xsd"
```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="adreint">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="pagina" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="nom" type="xs:string"/>
              <xs:element name="descripcio" type="xs:string"/>
              <xs:element name="url" type="xs:string"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```
XML: "adresint.xml"
```xml
<?xml version="1.0" encoding="UTF-8"?>
<adreint xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation = "adreint.xsd" >
  <pagina>
    <nom>Google</nom>
    <descripcio>Cercador</descripcio>
    <url>http://www.google.com/</url>
  </pagina>
  <pagina>
    <nom>Wikipedia</nom>
    <descripcio>Es baluard</descripcio>
    <url>http://http://www.esbaluard.org/</url>
  </pagina>
    <pagina>
    <nom>W3C</nom>
    <descripcio>World Wide Web Consortium.</descripcio>
    <url>http://www.w3.org/</url>
  </pagina>
</adreint>
```

2- Crea un element simple amb XSD, que guardaràs amb el nom "edat.xsd", amb les següent restricció: El valor de l'edat no pot ser menor que 0 ni major que 105. Afegeix comentaris breus explicatius necessaris.

3- Defineix un XSD que declari un element simple que guardaràs amb el nom "direccio.xsd" que tengui la restricció dels espais en blanc on els tabuladors, salts de línia i retorn de carro són substituïts per espais. Afegeix els comentaris necessaris.

4- Escriu un XSD que declari un element complex, que guardaràs amb el nom "camiseta.xds" que tengui tres elements fills: "talla" (de tipus cadena), "color" (de tipus cadena) i "preu" (de tipus sencer)), i que aquests fills puguin aparèixer en qualsevol ordre. Afegeix els comentaris necessaris.

5- Definir un esquema XSD perquè les dades d'empleat contingudes en el següent fitxer XML siguin validades correctament. (l'esquema XSD estarà dins un fitxer local anomenat "empleat.xsd"). Explicar mitjançant comentaris l'esquema:

XML: "empleat.xml"
```xml
<?xml version="1.0" encoding="UTF-8"?>
<empleat codi="emp001" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="empleat.xsd">
  <nom>Joan Pérez</nom>
  <direccio>
    <carrer>Avenida de las flores</carrer>
    <numero>10</numero>
    <ciutat>Baeza</ciutat>
    <provincia>Jaén</provincia>
  </direccio>
  <telefono>6768994545</telefono>
</empleat>
```