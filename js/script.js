// variables soportadas

var numero = 7;
console.log(numero);

var string = 'string'
console.log(string);

var booleano = true;
console.log(booleano);

var array = ['1', '2', '3'];
console.log(array);

var objeto = {
	make: 'Ford',
	model: 'Mustang',
	year: 1969
};

console.log(objeto);

//operadores matematicos

var w = 4;
console.log(w+1);

var x = 3;
console.log(x-1);

var y = 2;
console.log(y*1);

var z = 1
console.log(z/1);

var a = 20;
a -= 5; 
console.log(a); // Output: 15

var b = 50;
b *= 2; 
console.log(b); // Output: 100

var c = 8;
c /= 2; 
console.log(c)// Output: 4

//incremetal operador

var n = 10;
n++;
console.log(n);

let m = 20;
m--;
console.log(m);

//negaciones

var token = 'mi_token';
console.log( token == true );   // false
console.log( !token == true );  // false
console.log( !!token == true ); // true

// comparadores

console.log(8 > 12);
console.log(8 < 12);
console.log(8 <= 12);
console.log(8 >= 12);
console.log(8 === 12);
console.log(8 !== 12);

// operadores logicos

var luzVerde = 'green';
var peatones = 0;

if (luzVerde === 'green' && peatones === 0) {
  console.log('avance!');
} else {
  console.log('Detente');
}

day = 'Domingo';
if (day === 'Sabado' || day === 'Domingo') {
  console.log('buen fin de semana.');
} else {
  console.log('Semana de trabajo.');
}

var verdad = true;
var falsedad = false;

// conjuncion
console.log( verdad && verdad );
console.log( verdad && falsedad );
console.log( falsedad && verdad  );
console.log( falsedad && falsedad  );

//disyuncion 

console.log( verdad || verdad );
console.log( verdad || falsedad );
console.log( falsedad || verdad  );
console.log( falsedad || falsedad  );
