1- Definir 2 documents XML que representin els resultats d'una lliga de futbol, (un sense atributs i l'altra amb atributs). Després, defineix les DTD's que validin cada XML. La informació que es vol emmagatzemar de cada partit és:
- El nom de l'equip local .
- El nom de l'equip visitant.
- Els gols marcats per l'equip local.
- Els gols marcats per l'equip visitant.

2- Crea un esquema XSD que guardaràs amb el nom:"persones.xsd", pel següent arxiu XML. Restriccions:
- L’element «edat», només accepta 1-99.
- L’element «nom», ha de tenir una llargària màxima de 15.

Afegeix comentaris que expliquin breument el codi XSD:

XML: "persones.xml"
```xml
<persones>
  <persona sexe="dona">
    <nom>Inés </nom>
    <llinatge>Ruíz</llinatge>
    <edat>36</edat>
    <data_naixement població="Madrid">3-10-1985</data_naixement>
  </persona>
  <persona>
    <llinatge>Pons</llinatge>
    <edat>45</edat>
    <data_naixement població="Palma">3-10-1979</data_naixement>
  </persona>
</persones>
```