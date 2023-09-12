//Arrays Function

/*Function at():
Toma un valor entero y devuelve el elemento en ese indice. 
Lo permite con numeros enteros y negativos.*/
const Queens = ['Girls Generation', 'Kara', 'Sistar', 'After School'];
let index = 2
console.log(`El girl group de Kpop con el mejor concepto de verano 
siempre fue ${Queens.at(index)}`);

/*Function concat():
Concatena arreglos. No cambian los existentes, se crea uno nuevo.*/
const Q = ['Super Junior', 'Girls Generation', 'EXO'];
const K = ['2PM', 'WonderGirls', 'Twice']
const all = Q.concat(K);
console.log(all)

/*Function constructor():
El constructor crea Functionobjetos. 
Llamar al constructor directamente puede crear funciones dinámicamente.
El constructor crea funciones que se ejecutan únicamente en el ámbito global*/
function Persona(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
    
/*Function copyWithin():
El método no altera la longitud del arreglo, pero cambiará 
el contenido y creará nuevas propiedades o eliminará propiedades 
existentes, si es necesario. Ej, Mueve todos los elementos a la
derecha por 3 posiciones en este caso*/ 
const R = ['Isa', 'Juanes', 'José', 'Joan', 'Laura'];
console.log(R.copyWithin(3));

/*Function entries():
Este método devuelve un objeto iterador que contiene 
los pares clave/valor para cada índice de la matriz.*/
const Schools = ["Hanlim","Kaywon","SOPA","Lila"];
const i = Schools.entries();
for (const a of i) {
  console.log(a);
}

/*Function every():
Prueba si todos los elementos de la matriz pasan la prueba implementada 
por la función proporcionada. Devuelve un valor booleano. */
const Kiof = ["21","20","19","18"];
const legal = Kiof.every( x => x>=18);
console.log(legal)

/*Function fill():
Cambia todos los elementos dentro de un rango de índices en una matriz a un valor estático. 
Devuelve la matriz modificada.*/
const Letras = ['A','B','C','D'];
const NewLetras = Letras.fill('I',2,4)
console.log(NewLetras)

/*Function filter():
Crea una copia superficial de una parte de una matriz dada, 
filtrada solo a los elementos de la matriz dada que pasan la 
prueba implementada por la función proporcionada.*/
const colors = ['black','white','pink','yellow','blue'];
const CR = colors.filter((c) => c.length > 4);
console.log(CR);

/*Function find():
Devuelve el primer elemento de la matriz proporcionada que satisface 
la función de prueba proporcionada. Si ningún valor satisface la función de prueba, 
se devuelve indefinido; Hay opciones secundarias ligadas a está función.
Entrega el valor*/
const AgeTrainee = [12, 13, 11, 14, 16, 17];
const find = AgeTrainee.find( x => x > 15);
console.log(find)


/*Function findIndex():
Devuelve el "indice" del primer elemento que cumpla con la función de prueba 
dentro del arreglo. Si no se encuentra este dará "-1"*/
const AgeDebut = [16, 13, 18, 19, 21, 15];
const fIndex = AgeDebut.findIndex( x => x >= 18);
console.log(fIndex)

/*Function findLast():
Devuelve el valor del ultimo elemento que cumpla con la función 
de prueba dentro del arreglo. Si no se encuentra este dará "-1"*/
const ADebut1 = [2021,2007,2015,2018,2003];
const last = ADebut1.findLast( x => x > 2008);
console.log(last)

/*Function findLastIndex():
Devuelve el "indice" del ultimo elemento que cumpla con la función 
de prueba dentro del arreglo. Si no se encuentra este dará "-1"*/
const ADebut = [2021,2007,2015,2018,2003];
const lastI = ADebut.findLastIndex( x => x > 2008);
console.log(lastI)

/*Function flat():
Aplanar arreglos*/
const ANum = [1, 2, [3, 4, [5, 6]]];
console.log(ANum.flat());

const ANum1 = [1, 2, [3, 4, [5, 6]]];
console.log(ANum1.flat(2));
/*Resultado = [1, 2, 3, 4, 5, 6]*/

/*Function flatMap():
Recorre el arreglo + Aplanar arreglo
Solo se aplana un nivel*/
const XD = [18, 19, 20, 21]
console.log(XD.flatMap((x) => [x * 2]))  

const XD1 = [18, 19, 20, 21]
console.log(XD1.flatMap((x) => [[x * 2]]))  

/*Function forEach():
ejecuta una función proporcionada una vez para cada elemento de la matriz.*/
const array1 = ['SuperShy', 'NewJeans', 'ETA'];
array1.forEach((a) => console.log(a));

/*Function includes():
Determina si un arreglo incluye un determinado valor entre sus entradas, 
regresando verdadero o falso según corresponda.*/
const GetUp = ['Cool With You','ASAP','Get Up','New Jeans','Super Shy','ETA'];
const IncluyeNJ = GetUp.includes('ETA');
console.log(IncluyeNJ)

/*Function indexOf():
Devuelve el "indice" en el cual se encuentra el elemento que estamos 
buscando dentro del arreglo. Si no se encuentra este dará "-1"*/
const GirlGr = ['NewJeans', 'IVE','Lesserafim', 'G-idle'];
const Gg = GirlGr.indexOf('NewJeans');
console.log(Gg)

/*Function join():
Crea y devuelve una nueva cadena concatenando todos los elementos de esta matriz, 
separados por comas o una cadena de separación especificada. 
Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.*/
const GetUp1 = ['Cool With You','ASAP','Get Up','New Jeans','Super Shy','ETA'];
console.log(GetUp1.join(' - '))

/*Function keys():
Devuelve un nuevo objeto iterador de matriz que contiene las claves 
para cada índice de la matriz.*/
const XD2 = [18, 19, 20, 21]
const iterator = XD2.keys();
for (const key of iterator) {
  console.log(key);
}

/*Function lastIndexOf():
Devuelve el último índice en el que se puede encontrar un elemento dado en la 
matriz, o -1 si no está presente. La matriz se busca hacia atrás*/
const Vocaloid3 = ['Miku', 'Rin', 'Len', 'Kaito', 'Megu', 'Rin', 'Luka']
const SelectVocaloid = Vocaloid3.lastIndexOf('Rin')
console.log(SelectVocaloid)

/*Function length():
La función devueelve la cantdad de elementos en la matriz.
Y de manera similar, devuleve 0 si se encuentra vacía*/
const GetUp2 = ['Cool With You','ASAP','Get Up','New Jeans','Super Shy','ETA'];
console.log(GetUp2.length)

/*Function map():
Crea una nueva matriz que se completa con los resultados de llamar 
a una función proporcionada en cada elemento de la matriz que se llama.
A diferencia del 'flatMap' no aplana los arreglos.
*/
const XD3 = [18, 19, 20, 21]
console.log(XD3.map((x) => [x * 2]))  

/*Function pop():
Elimina el último elemento de una matriz y devuelve ese elemento. 
Este método cambia la longitud de la matriz.*/
const AgeDebut1 = [21, 19, 18, 16, 15, 12];
console.log(AgeDebut1);
AgeDebut.pop();

/*Function push():
Agregar un elemento al final de un arreglo.*/
const BoyGr = ['BoyNextDoor', 'Ateez'];
BoyGr.push('StrayKids')
console.log(BoyGr)

/*Function reduce():
El reductor recorre la matriz elemento por elemento, agregando en cada paso el valor actual de la matriz al 
resultado del paso anterior (este resultado es la suma acumulada de todos los pasos anteriores), 
hasta que no haya más elementos para agregar.*/
const sumatoria = [12, 10, 4, 8];
const initialValue = 0;
const inicializar = sumatoria.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(inicializar);

/*Function reduceRight():
Aplica una función contra un acumulador y cada valor del array (de derecha a izquierda) para reducirlo a un único valor.*/
const arregloA = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const resultado = arregloA.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(resultado);

/*Function reverse():
Invierte una matriz en su lugar y devuelve la referencia a la misma matriz
,el primer elemento de la matriz ahora se convierte en el último 
y el último elemento de la matriz se convierte en el primero.*/
const R2 = ['Isa', 'Juanes', 'José', 'Joan', 'Laura'];
R2.reverse();

/*Function shift():
Este metodo elimina el primer elemento de una matriz y devuelve ese elemento eliminado. 
Este método cambia la longitud de la matriz.*/
const Vocaloid = ['Miku', 'Rin', 'Len', 'Kaito', 'Megu', 'Rin', 'Luka']
const XVocaloid = Vocaloid.shift()
console.log(XVocaloid)

/*Function slice():
El método devuelve una copia superficial de una parte de una matriz en un nuevo objeto.
La matriz original no se modificará.*/
const VocaloidSA = ['Meiko','Megu','Rin','Miku','Len','Luka','Kaito']
const VocaloidNewA = VocaloidSA.slice(4)
console.log(VocaloidNewA)

const VocaloidSB = ['Meiko','Megu','Rin','Miku','Len','Luka','Kaito']
const VocaloidNewB = VocaloidSB.slice(1,4)
console.log(VocaloidNewB)

/*Function some():
El método comprueba si al menos un elemento de la matriz pasa la prueba implementada 
por la función proporcionada.*/
const EdadDebut = [2021,2007,2015,2018,2003];
const Pasa = (Año) => Año > 2001;
console.log(EdadDebut.some(Pasa));

/*Function sort():
El método ordena los elementos de una matriz en su lugar y devuelve la referencia 
a la misma matriz, ahora ordenada. */
const AñoDebut = [2003, 1997, 2018, 2007, 2004, 2021];
AñoDebut.sort();
console.log(AñoDebut)

/*Function splice():
El método cambia el contenido de una matriz eliminando o reemplazando 
elementos existentes y/o agregando nuevos elementos en su lugar .*/
const Meses = ['Ene', 'Marzo', 'Abril'];
Meses.splice(1,0,'Febrero');
console.log(Meses);
Meses.splice(0,1,'Enero');
console.log(Meses);

/*Function toLocaleString():
El método devuelve una cadena que representa los elementos del array. 
Los elementos se convierten en cadenas utilizando sus toLocaleStringmétodos y 
estas cadenas se separan por una cadena específica de la configuración regional 
(como una coma ",").*/
const PrecioAlbum = [500, 1100, 4200, 98];
PrecioAlbum.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

/*Function toString():
El método devuelve una cadena que representa la matriz especificada y 
sus elementos.*/
const VocaloidS = ['Meiko','Megu','Rin','Miku','Len','Luka','Kaito'];
console.log(VocaloidS.toString());

/*Function unshift():
Agrega los elementos especificados al comienzo de una matriz y devuelve 
la nueva longitud de la matriz.*/
const GirlGr1 = ['NewJeans', 'IVE','Lesserafim', 'G-idle'];
const GG1 = GirlGr1.unshift('Nmixx');
console.log(GG1)

/*Function values():
Devuelve un nuevo objeto iterador de matriz que itera el valor de cada elemento 
de la matriz.*/
const GetUp3 = ['Cool With You','ASAP','Get Up','New Jeans','Super Shy','ETA'];
const ETA = GetUp3.values();
for (const value of ETA) {
  console.log(value);
}
