# PRACTICA 2 BLOQUE 2

1. Escriu una funció Javascript que ordeni 10 números que introduirà l'usuari per pantalla. El resultat es mostrarà amb un alert.

   
2. Escriu una funció Javascript que calculi un descompte aplicat a una marca de cotxe determinada, que es demanarà a l'usuari (les opcions són: Ford, Seat, Citroen i Audi). Si és Ford, el descompte que s'aplicarà serà d'un 10%, i és Seat un descompte del 8%, si és Citroen serà d'un 6% i si és Audi un 4%. Després de mostrar el descompte per pantalla ha de demanar que escrigui el preu del cotxe i el programa ha de calcular el preu final aplicant el descompte.

    
3. Escriu una funció Javascript que demani l'edat d'un usuari, si l'edat és major o igual que 16, escriurem en pantalla l'enllaç del portal d'FP de Balears (http://www.caib.es) i si és menor mostrarem un alert que dirà que encara no té l'edat per accedir al portal d'FP.

    
4. Escriu una funció Javascript que donada una cadena de caràcters (que es demanarà per pantalla), retorni la cadena:
    - en minúscules,
    - en majúscules,
    - que retorni el text llevant les 5 lletres finals,
    - i finalment que converteixi l'string d'entrada en un array el qual després haurem de recorre i mostrar el contingut de l'array (és a dir, les paraules una a una de l'string inicial).
      
5. Si tenim el següent codi html, Escriu una funció Javascript que mostri:
    - el número d'enllaços que té la pàgina,
    - l'últim enllaç de la pàgina,
    - i quants d'enllaços apunten a Google.
```html
Codi html

<html>
...
  <p>Aquesta web té molts d'enllaços</p>
  <p> Alguns ens permeten anar a pàgines de cercadors com: <br> <a href="https://www.google.es">Google</a>, <br> <a href="https://www.bing.com">Bing</a>, <br> <a href="https://duckduckgo.com/">Duck Duck Go</a> <br> </p>
   <p>També tenim enllaços a altres web interessants com per exemple: <br> <a href="https://www.travelbelize.org/">Belice</a> <br> <a href="https://vr.wowhungary.com/en/map/">Hungria</a> <br> </p>
...
</html>
```

6. Si tenim el següent codi html, escriure una funció Javascript que permeti que la pàgina mostri inicialment només la primera part del text (el primer paragraf), i que després, fent clic amb el ratolí damunt un text (que serà per exemple, "clica damunt per veure tot el contingut", es pugui veure la resta de paràgrafs.
```html
<html>
...
<p>Internet es una de las herramientas más importantes que tiene la sociedad para mantenerse en contacto con los demás en tiempos de pandemia. Sin embargo, para no correr ningún riesgo, es importante que el usuario conozca bien el funcionamiento de su router: ese dispositivo con forma de caja que te permite conectarte a la red gracias al WiFi. Con el fin de que seamos capaces de conocer su funcionamiento, y de protegernos de cualquier ataque o intento de robo, el Instituto Nacional de Ciberseguridad (INCIBE) ha compartido una guía los pasos que los usuarios deben dar para convertir su conexión en una fortaleza.</p>
<p>"El router es el dispositivo que nos permite conectarnos y navegar por Internet. Configurarlo de manera correcta evitará, en gran medida, que alguien sin permiso utilice nuestra Red e invada nuestra privacidad y seguridad», explican desde INCIBE a este respecto. De acuerdo con la institución, lo primero que debemos hacer cuando adquirimos un router nuevo es revisar su configuración para comprobar si es suficientemente segura. Para ello debemos coger la dirección IP del dispositivo y ponerla en el navegador que queramos, ya sea Chrome, Safari o cualquier otro.."</p>
...
</html>
```
7. Crea una pàgina web que mostri una imatge, i després amb funcions Javascript s'ha de poder:
    - Fer invisible la imatge.
    - Fer visible la imatge.
    - Canviar la grandària de la imatge fent-la més grossa.
    - Canviar la grandària de la imatge fent-la més petita.
     
8. Crea una pàgina web que mostri quatre imatges que representen cercles d'un color (que trobaràs aquí per a descarregar a continuació). Després amb una funció Javascript, que quan es passi amb el ratolí per damunt de cada cercle, ha de canviar el color del fons de la pàgina amb el mateix color del cercle seleccionat. Quan es surti de l'àmbit de la imatge, es recuperarà el color de fons inicial.
    - imatges per a descarregar:
    - La pàgina ha de tenir un títol «h1» que anirà dins d'un «header», amb una regla de CSS: Centrat i color del text violeta. Les imatges han d'anar dins d’un «main». El «main» ha de tenir les següents regles de CSS: Una amplada automàtica i una alçada de 500px, Un marge de 30px i una vora sòlida de 5px de grossor i de color blau, Les imatges han de tenir una grandària de 150px per 150px.

     
9. Crea una pàgina web amb un formulari (que anirà dirigit als usuaris de la web). El formulari ha de demanar: Nom de l'usuari, la seva edat, l'esport que practica l'usuari (com per exemple bàsquet, futbol, atletisme, etc.), el color de la camiseta del seu club esportiu, data des de quan practica l'esport. La pàgina ha de tenir:
    - Un "header" amb un títol: "Els nostres usuaris són esportistes", 
    - Diferents seccions, on cada secció (que es crearan dinàmicament), contendrà una llista no ordenada, que es crearà amb les dades de les respostes del usuaris. Per exemple, podria quedar:  
        Futbol: 
        - Pep, 24 anys, color camiseta vermell, 10/07/2019
        - Aina, 20 anys, color camiseta blanc, 01/01/2010
        
        Basquet:
        - Pere, 19 anys, color camiseta verda i blanca, 14/09/2018