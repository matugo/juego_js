//Autor:Marcos Gonzalez
//ADSI 
//1132133
//CDATTG
var g_seleccion = 1 ;
var g_correct=0;
var g_incorrect=0;
var g_puntaje = 0 ; 
var g_conjunto = [] ;
var g_global =0;

	g_conjunto.push( [ [ 'uno' ] , 		[ 1 ] , 	[ 0 ] ,	    ['img/uno.png'] , 	 [0] ,   [0] ,   ['Las personas naturales y jur&iacute;dicas poseer&iacute;an sobre una obra los derechos morales y patrimoniales?'] , 							['No es posible que las personas jur&iacute;dicas posean derechos morales debido a que es una empresa, es decir no pueden crear <br> una obra, por otro lado las personas naturales si poseen los derechos morales y patrimoniales.'] , ['No es posible porque las personas jur&iacute;dicas solo pueden poseer derechos patrimoniales'] , ['Si es posible que las personas naturales y jur&iacute;dicas posean los derechos morales y <br> patrimoniales debido a que son una misma persona el cual est&aacute;n referenciadas por un seud&oacute;nimo.'] , ['Todas Las Anteriores']], 
					 [ [ 'dos' ] , 		[ 2 ] , 	[ 0 ] ,     ['img/dos.png'] ,    [40] ,  [50] ,  ['Cu&aacute;l es la forma de protecci&oacute;n de software en Colombia?'] , 											 						['Copyright.'] , ['Model Provisions on the Protection of Computer Software.'] , ['Copyleft.'] , ['Todas Las Anteriores']],
					 [ [ 'tres' ] ,		[ 2 ] , 	[ 0 ] ,	    ['img/tres.png'] , 	 [80] ,  [100] , ['El software libre o c&oacute;digo abierto y software propietario son la misma cosa?'] , 					 									['No son la misma cosa porque el software libre brinda la opci&oacute;n de libertad de uso, de an&aacute;lisis, de copia y de modificaci&oacute;n, <br> a comparaci&oacute;n del software propietario o privativo el cual carece de las cuatro libertades &oacute;sea que esta restringido.'] , ['Si lo son porque el software son representados por el mismo nombre.'] , ['Si lo son, ya que es un software que respeta las cuatro libertades que la FSF (Free Software Foundation) que establece.'] , ['Todas Las Anteriores']],
					 [ [ 'cuatro' ] ,	[ 2 ] , 	[ 0 ] , 	['img/cuatro.png'],  [120] , [150] , ['El copy left es restrictivo?'] , 																	 										['No es restrictivo porque permite la libre distribuci&oacute;n de copias y versiones modificadas de una obra u otro trabajo, exigiendo que los mismos <br> derechos sean preservados en las versiones modificadas.'] , ['Si es restrictivo porque se debe a&ntilde;adir una cl&aacute;usula legal que hace que toda copia o versi&oacute;n modificada del programa <br> se gobierne por las mismas condiciones que el original.'] , ['No es restrictivo porque nace en el &aacute;mbito de la programaci&oacute;n inform&aacute;tica como una <br> estrategia legal diseñada por el movimiento del software libre para hacer del c&oacute;digo una herramienta “libre”.'] , ['Todas Las Anteriores']],
					 [ [ 'cinco' ] ,	[ 2 ] , 	[ 0 ] , 	['img/cinco.png'] ,	 [160] , [200] , ['Los derechos morales podr&iacute;an no aplicar al software?'] ,												 								["Si podr&iacute;an aplicar porque desde el momento mismo de la creaci&oacute;n de la obra, se le reconocen a los autores dos clases de <br> prerrogativas: los derechos morales y los derechos patrimoniales."] ,	["No podr&iacute;an aplicar porque  es un derecho que es inherente a las personas y no puede ser transmitido."] , ["Si podr&iacute;an aplicar porque son en esencia transferibles y sometidos a un t&eacute;rmino de duraci&oacute;n de la protecci&oacute;n que en Colombia."] , ['Todas Las Anteriores']],
					 [ [ 'seis' ] ,   	[ 2 ] , 	[ 0 ] ,  	['img/seis.png'] ,   [200] , [250] , ['Es correcto y legal descargar cualquier imagen o m&uacute;sica desde internet y colocarla en un software solo por necesidad?'] , 			["Porque existe un set de herramientas legales estandarizadas conocidas como las Licencias Creative Commons que, basadas en el derecho <br> de autor, cambian el paradigma del sistema tradicional “Todos los derechos reservados” por una premisa m&aacute;s flexible “Algunos derechos reservados”."],	["No, porque si toman la imagen o m&uacute;sica y no dan la autoria a su respectivo dueño."], ["No, porque es un prop&oacute;sito fortalecer a creadores para que sean ellos quienes definan los t&eacute;rminos <br> en que sus obras pueden ser usadas, qu&eacute; derechos desean entregar y en qu&eacute; condiciones lo har&aacute;n."] , ['Todas Las Anteriores']],
					 [ [ 'siete' ] ,	[ 2 ] , 	[ 0 ] , 	['img/siete.png'] ,  [240] , [300] , ['Cualquier contrato laboral es un contrato de prestaci&oacute;n de servicios?'] ,																["No, porque el contrato laboral difiere de los aportes al Sistema de Seguridad Social en cambio un contrato <br> de prestaci&oacute;n de servicios se caracteriza por ser un acuerdo de voluntades, en donde de forma independiente y aut&oacute;noma una persona."],	["Si, porque recibe un salario por el trabajo realizado e indemnizaci&oacute;n a comparaci&oacute;n de honorarios."], ["Si, porque en ambos contratos recibe salarios m&iacute;nimos."] , ['Todas Las Anteriores']],
					 [ [ 'ocho' ] ,		[ 2 ] , 	[ 0 ] , 	['img/ocho.png'] ,   [280] , [250] , ['El contrato de prestaci&oacute;n de servicios es ideal cuando se quiere trabajar desde casa?'] , 											["Si, porque trabajar&iacute;a de forma independiente y aut&oacute;noma por su voluntad o para otra persona."],	["No, porque existe una retribuci&oacute;n econ&oacute;mica."] ,			 										["Si, porque si desea crear su micro empresa usted seria su propio jefe."] , ['Todas Las Anteriores']],
					 [ [ 'nueve' ] ,	[ 2 ] , 	[ 0 ] , 	['img/nueve.png'] ,  [320] , [200] , ['En el desarrollo de software y un contrato de prestaci&oacute;n de servicios los honorarios podr&iacute;an ser por cualquier valor?'] , 		["Si, debido a que el desarrollador tiene su previo conocimiento y est&aacute; ejerciendo su trabajo de manera voluntaria y aut&oacute;noma por un honorario que &eacute;l estipula."] ,											["No, porque es un acuerdo entre un trabajador bajo una subordinaci&oacute;n y dependencia."], ["Si, porque el contratista le exige por medio de un documento valor del honorario."] , ['Todas Las Anteriores']],
					 [ [ 'diez' ] ,		[ 2 ] , 	[ 0 ] , 	['img/diez.png'] ,   [360] , [150] , ['Un prestador de servicios puede negociar bajo los t&eacute;rminos que quiera con su contratante?'] , 										["Si, porque est&aacute;n llegando a un acuerdo que el contratista est&aacute; ofreciendo."] , ["Si, porque lo est&aacute; estipulando por medio de un documento legible."] , 														["No, porque est&aacute; recibiendo una paga estipulada por el contratante."] , ['Todas Las Anteriores']],
					 [ [ 'once' ] ,		[ 2 ] , 	[ 0 ] , 	['img/once.png'] ,   [400] , [100] , ['Un contrato verbal no tiene validez ante el estado?'] , 																						["Si, tiene validez porque si en el determinado tiempo en el que trabajo no le <br>pagaron prestaciones sociales, seguridad social puede demandar ante un juez de la<br> rep&uacute;blica."] ,			 							["No, tiene validez porque no hay una subordinaci&oacute;n. "], ["Si, tiene validez porque es aquel en el que no existe ning&uacute;n documento escrito<br> que contenga las condiciones pactadas verbalmente (de palabra) entre el<br> empleador y el trabajador."] , ['Todas Las Anteriores']]

			);
			
window.onload = function()
{
	setInterval(moving,100);
	document.getElementById("cntfr").innerHTML=painting_elements();//pinta las frutas.
}
	

function painting_elements()
{
	var salida="";
	for(var i=0; i<g_conjunto.length;i++)
		{
			salida +="<img width='60px' style='position:absolute;' id="+g_conjunto[i][0]+" src='img/"+g_conjunto[i][0]+".png' onclick='make_points("+i+");'>";
		}	
	return salida;
}
//setInterval(make_points);

function make_points(idx)
{
	//console.log(g_conjunto[idx][0]);
	g_puntaje+=parseInt(g_conjunto[idx][g_seleccion]);
	document.getElementById('array_num').value = idx;
	//document.getElementById("total").innerHTML=g_puntaje;
	document.getElementById("preguntas").innerHTML=g_conjunto[idx][6]+g_conjunto[idx][0];
	//console.log('hola ');
	document.getElementById('A').style.display='block';
	document.getElementById('B').style.display='block';
	document.getElementById('C').style.display='block';
	document.getElementById('D').style.display='block';
	
	document.getElementById("A").innerHTML=g_conjunto[idx][7];
	document.getElementById("B").innerHTML=g_conjunto[idx][8];
	document.getElementById("C").innerHTML=g_conjunto[idx][9];
	document.getElementById("D").innerHTML=g_conjunto[idx][10];
	//document.getElementById(innerHTML=g_conjunto[idx][0]).style.display='none';
		//console.log(g_puntaje);
}

function hola()
{
	id_array = document.getElementById('array_num').value;
	document.getElementById('muestra').innerHTML='correct '+g_puntaje;
	if (true) 
	{
		var correctas =g_correct=parseInt(g_correct)+1;
		document.getElementById('suma').innerHTML='Buenas'+g_correct;
		document.getElementById('A').style.display='none';
		document.getElementById('B').style.display='none';
		document.getElementById('C').style.display='none';
		document.getElementById('D').style.display='none';
		console.log	('SUMA');
		document.getElementById(innerHTML=g_conjunto[id_array][0]).style.display='none';

		var res = parseInt(g_incorrect) + parseInt(g_correct);

		if (res == 11) {
			document.getElementById('muestra').style.display='none';
			document.getElementById('suma').style.display='none';
			document.getElementById('sumaa').style.display='none';
			document.getElementById('preguntas').style.display='none';
			document.getElementById('cntfr').style.display='none';

			var correctas = g_correct * 2;

			var mensaje = "Correctas";
			var mensaje1 = "puntos"
			var mensaje10 = "preguntas resueltas";
			document.getElementById('total').innerHTML = correctas + " " + mensaje1;
			document.getElementById('buenas').innerHTML = g_correct + " " + mensaje;
			document.getElementById('to_preguntas').innerHTML = res + " " + mensaje10;
	 	}
	}

}
function holaa()
{
	id_array = document.getElementById('array_num').value;
	document.getElementById('muestra').innerHTML='correct '+g_puntaje;
	if (true) 
	{
		g_incorrect=parseInt(g_incorrect)+1;
		document.getElementById('sumaa').innerHTML='Malas'+g_incorrect;
		document.getElementById('A').style.display='none';
		document.getElementById('B').style.display='none';
		document.getElementById('C').style.display='none';
		document.getElementById('D').style.display='none';
		console.log	('RESTA');
		document.getElementById(innerHTML=g_conjunto[id_array][0]).style.display='none';

		
	}
}

function total(){
	//var total=document.getElementById('total').value;
}


function moving()
{
	//console.log(Math.random());
	for (var i = 0; i < g_conjunto.length; i++) {

	document.getElementById(g_conjunto[i][0]).style.top=g_conjunto[i][4]+"px";
	g_conjunto[i][5] =  parseInt(g_conjunto[i][5]) + 8;

	document.getElementById(g_conjunto[i][0]).style.left=g_conjunto[i][5]+"px";
	if(parseInt(g_conjunto[i][5])>875) g_conjunto[i][5]=0;
	}	
}
