var nombre = 'luis';

var apellido = 'bueno';

var nombrecompleto= nombre + ' ' + apellido;
console.log(nombrecompleto);

//aca concatena como esta no realiza ninguna operacion
var x = nombre + 2 + 4;
console.log(x);


//agregando un parentesis entre los datos a concatenar y son int o floot se suman depediendo del signo

var x = nombre + (2 + 4);
console.log(x);

// si pone primero la operacion logica  se efectua la operacion y luego se pone el valor string  

x=2+4+nombre;
console.log(x);


