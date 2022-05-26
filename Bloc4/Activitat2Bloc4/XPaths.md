# Ejercicios Actividad 2
1. Quants partits han jugat els "Lleons"?
```
count(//equip[nom="Lleons"])
```
2. Quins partits han jugat a casa els "Elefants"?
```
count(//equip[@juga="local"][nom="Elefants"]/..)
count(//partit[equip[@juga="local"][nom="Elefants"]])
```
3. Quants jugadors han marcat gols abans de la mitja part (minut 45) jugant com a
locals?
```
count(//jugador[@minut<45]/../..[@juga="local"])
```
4. Quants partits en els quals jugaven els "Elefants"jvght empatats?
```
```
5. En quines jornades els"Lleons" han jugat a casa?
```
```
6. Quina és la mitjana de gols per partit dels "Cavalls"?
```
```
7. Trobar la suma total de tots els resultats. Per exemple, resultat dia 1 és 3, resultat dia 5 és 1, la suma serà 4.
```
```
8. Llista els jugadors que ha fet gols a tots els partits
```
```
9. Llista els jugadors que fet gols el dia 25-12-2019?
```
```
10. Mostra una llista de cada dia on el partit hagi acabat amb un resultat major que 2
```
```
