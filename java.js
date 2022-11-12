
// La mano ya se carga ahora debe poder agregarse al album



//--------------- Lista de cartas --------------------------------------------

/*

1.) Las cartas en la mano se inician de forma aleatoria
2.) Las cartas traen una funcion propia de donde escribir su cadena de texto
3.) 

					Base de datos de las cartas
nivel	nombre				cadena de caracteres	  lugar		 img

0		Patron de notas		       ABBAC	 		  Notas      00		 
0	    Trecillo				   [xxx]			  Patron	 01

3.) Los receptores de las imagenes son ()


*/
//------ PAtron y notas global IMPORTANTE

var __patron = "";
var __notas  = "";

//-------------------- importante para las notas
var __a = "";
var __b = "";
var __c = "";

var __abc = "";
//-------------------- fin notas


var __x = "";
var __y = "";

var cartas= [
	[0,	"	","abbac",	"notas"	, 0,"Al lado inferior derecho puedes pedir una nueva mano C; ."],
	[0,	"Patron ABBAC"	,"abbac",	"notas"	, 1,"La clasica secuencia de notas ABBAC . NADA LE GANA ! ."],
	[0, "Trecillo"	 	,"[xxx]","patron", 2," TAP TAP TAP . Tocas 3 notas ! "],
	[0, "Doscillo"	    ,"[xx]", "patron", 3," TAP TAP . Tocas 2 notas ! "],
	[0, "Patron AB "    ,"ab","notas",4,"Secuencia de  2 notas AB . Simple pero poderoso  " ],
];

/*   							Aun no se implementa deck
var deck = [

]
*/

// en la mano va la id , esta m+ano tiene que esta desordenada c:
//---------------------- Esta es el arreglo de la mano es muy importante------------
var hand = [
	0,
	0,
	0,
	0,
	0,
];

function desordenar_mano(){
	// cartas[0][4] = 00
	// con el 0 seleccionamos que carta queremos usar y con el ultimo numero su img ( que ahora es un id)

	for (let index = 0; index < hand.length; index++) {
		  var x = Math.floor((Math.random() * cartas.length));
		hand[index] = cartas[x][4];
	}
	console.log("Se entro dentro de *desordenar_mano*");
	console.log("1.)"+hand[0]+"\n2.)"+hand[1]+"\n3.)"+hand[2]+"\n4.)"+hand[3]);
	cm_p(); // despues de desordenar se cargará la mano aquí

}


//------------------------------------------------------------------------------------

// id hand_x  : Es la id donde ira la imagen de la mano

// Esta funcion carga de mano --------------------------------------------------------- funcion importante
function cm_p(){
	console.log("funcion : carga de mano");
	for (let index = 0; index < hand.length-1; index++) {
		console.log(index);
		document.getElementById("hand_"+(index)+"").src = "collection/"+hand[index]+".jpg";
		
	}
	console.log("----------------------------------------");
	console.log("El arreglo de la mano es el siguiente : ");
	console.log("1.)"+hand[0]+"\n2.)"+hand[1]+"\n3.)"+hand[2]+"\n4.)"+hand[3]);
	console.log("----------------------------------------");
	// nesecitamos un algoritmo que genere "efectos" dependiendo de la id  
}

// id hand_x  : Es la id donde ira la imagen de la mano

// cartas[0][0] = 0;
// cartas[0][1] = "Patron ABBAC";
// cartas[0][2] = "ABBAC";
// cartas[0][3] = "notas";
// cartas[0][4] = 00

function biblioteca_letras(op){
	var x = hand[op];
	document.getElementById("prueba_x").innerHTML = cartas[x][5];
}


function biblioteca_carga(op){

	// Cuando se haga click se pasara la imagen al album y se escribirá
	console.log("Se selecciono el indice :"+op);
	console.log("Se selcciono la carta "+hand[op]);

	var x = hand[op];
	
	load_play(x);

	switch(x){
		case 0:
			console.log("vacio");
			break;
		case 1:
			//N4otas ABBAC;

			__notas = __notas + __a+" "+__b+" "+__b+" "+__a+" "+__c+" ";
			console.log("se uso el case 0 - notas")
			console.log(__notas);
			break;
		case 2:
			//Patron [xxx]

			__patron = __patron +"[xxx]";
			console.log("se uso el case 1 - patron");
			console.log(__patron);
			break;
		case 3:
			//Patron [x-x]
			__patron = __patron +"[x-x]";
			console.log("se uso el case 2 - patron");
			console.log(__patron);
			break;

		case 4:
			__notas = __notas + __a+" "+__b+" ";
			//nada
			//carga_album(x);
			break;

		case 4:

			//nada
			carga_album(x);
			break;

		case 5:

			//nada
			carga_album(x);
			break;

		case 6:

			//nada
			carga_album(x);
			break;

		case 7:

			//nada
			carga_album(x);
			break;
	}
}	

//- Pese al nombre solo es de prueba ---- nada importante --- solo chekea la mano y su arreglo vectorialva

var __carga_album = 0;

function load_play(x){
	console.log("se ingreso al metodo load_play");
	document.getElementById("asd"+(__carga_album)+"").src = "collection/"+x+".jpg";
	__carga_album = __carga_album + 1;
	console.log(__carga_album);
	console.log("se termino con exito");
}

function load_t(x){
	var x = hand[op];
	document.getElementById("").innerHTML = cartas[x][5];
}


function carga_album(x){
	console.log("-------------------------------")
	console.log("Se entro al modulo carga_album(x)");
	console.log("Se tomo el valor x como :"+x);
	console.log(cartas[x][1]);
	console.log("1.)"+hand[0]+"\n2.)"+hand[1]+"\n3.)"+hand[2]+"\n4.)"+hand[3]);
	console.log("-------------------------------")
}


//--------------------------------------------------------
//					codigo de funcion
//--------------------------------------------------------

//--------------------------------------------------------
// crear un onload   - Aqui entra la quimera
//--------------------------------------------------------




function GO(){
	notas_aleatorias();
	console.log("--------------------------");
	console.log("Las notas aleatorias son :");
	console.log(__abc);
	console.log("--------------------------");
}

function notas_aleatorias() {
	var salida = "true";

	var notas = new String();
	var abc = new String();
	var op = new Number();
	var notas = new Array(10);
	var abc = new Array(10);
	var a = new String();
	var b = new String();
    var c = new String();
  
  a = "";
  b = "";
  c = "";
  
  // Escala pentatonica 

	notas[1] = "D#4";
	notas[2] = "F#4";
	notas[3] = "G#4";
	notas[4] = "A4";
	notas[5] = "A#4";
	notas[6] = "C#4";
    notas[7] = "D#5";
  
	while (salida=="true") {

		a = notas[Math.floor(Math.random()*6+1)];
		b = notas[Math.floor(Math.random()*6+1)];
		c = notas[Math.floor(Math.random()*6+1)];

		if(a!=b && b!=c && c !=a){
			salida="false";

		}
	}
	
    __a = a; 
    __b = b; 
    __c = c; 

	__abc = __a + " "+__b+" "+__c;
}


function prueba_a(){
	console.log("Entre a la funcion")
	document.getElementById("prueba_x").innerHTML = "Funciono";
}

function play() {

	

	stapu();

	//var x = document.calc.operando1.value    //un valor cualquiera
	var x = __patron.trim();
	//var y = document.calc.operando2.value    //segundo valor cualquiera
	var y = __notas.trim();
	// var result = x + y
	// document.getElementById("demo").innerHTML = result                  //es la suma de los dos valores

	patron = x;
	notas = y;

	let clip2 = scribble.clip({
		synth: 'PolySynth',
		pattern: patron,
		notes: notas

	}).start();

	Tone.context.resume().then(() => Tone.Transport.start());
}


function stapu() {
	Tone.Transport.cancel();
}





/*
//.-------------------------------- Parte Gráfica de Js ------------------------------------------.//


function myFunctionA() {
	document.getElementById("asd4").src = "https://static.hentai-gif-anime.com/upload/20160529/16/32014/1.gif"; //4
}

function myFunctionB() {
	document.getElementById("asd3").src = "https://thumb-p9.xhcdn.com/a/p6z1VaF2BDjQwdeml9abRQ/000/127/374/739_450.gif";
}

function myFunctionC() {
	document.getElementById("asd2").src = "https://multiwaifus.files.wordpress.com/2019/09/63259-039ac6cdacc3cc6c8c251d7c866ec028.gif?w=376&h=212";
}

function myFunctionD() {
	document.getElementById("asd1").src = "https://cdnio.luscious.net/486/lusciousnet_tumblr_mvjvpceqdg1rrsoi_2089743858.gif";
}	

// -------------------------------------------------------------------------------

function myFunctionE() {
	document.getElementById("asd8").src = "https://thumb-p3.xhcdn.com/a/Qlba9SQ6oYEJ_lKPUn_idg/000/109/847/693_450.gif";

}

function myFunctionF() {
	document.getElementById("asd7").src = "https://static.hentai-gif-anime.com/upload/20160529/15/28695/1.gif";
}

function myFunctionG() {
	document.getElementById("asd6").src = "https://68.media.tumblr.com/1ef63694b150c358c696552e6d0caa6a/tumblr_o8o5eajDvP1v2hfg0o7_400.gif";
}

function myFunctionH() {
	document.getElementById("asd5").src = "https://thumb-p1.xhcdn.com/a/VBzIqPqXp7dR8Ntticx4Dw/000/201/194/391_450.gif";
}
*/

// -------------------------------------------------------------------------------------------------------------------------------------

function openMenu() {
	document.getElementById("invisibleBar").className = "invisibleDesplazada";
	
	document.getElementById("top").className = "section topM";
	document.getElementById("middle").className = "section middleM";
	document.getElementById("mid").className = "section midM";
	document.getElementById("bottom").className = "section bottomM";
	document.getElementById("bot").className = "section botM";
}

function closeMenu() {

	// document.getElementById("top").className = "top";
	// document.getElementById("middle").className = "section middleM";
	// document.getElementById("mid").className = "section midM";
	// document.getElementById("bottom").className = "section bottomM";
	// document.getElementById("bot").className = "section botM";
	
	document.getElementById("invisibleBar").className = "invisible-bar"
	
	
}
function changeColorM(){

}