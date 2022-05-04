let fs   = require( 'fs' );
let path = require( 'path' );

let tareas = fs.readFileSync( './tareas.json', 'utf-8' );

tareas     = JSON.parse( tareas);

//console.log(tareas[0]);

for( i = 0 ; i < tareas.length ; i++)
{
    console.log("El tipo de tareas es: " + tareas[i].tipos +", la cual se encuentra en el siguiente estado: " + tareas[i].estado);
}

process.argv.forEach(function (val, index, array) { console.log(index + ': ' + val); });





