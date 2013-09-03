/**
 * WinPrincipal.js
 * 
 * Clase cliente de EngupiTablaSimple
 * 
 * @agustinistmo
 * agustin@engupisoft.com
 * 2013 Agosto
 * http://guru.engupisoft.com
 * 
* El código de Guru Engupi se distribuye bajo la licencia Apache Software License 2.0 
 * 
 */


var WinPrincipal = function(){
	
	this.self = Ti.UI.createWindow({
		backgroundColor:'#323232'
	});
	
	this.crearTabla();
	
	return this.self;
}

module.exports = WinPrincipal;


WinPrincipal.prototype.crearTabla = function(){
	
	var EngupiTablaSimple = require('EngupiTablaSimple');
	
	var items = [
		{estado:'Oaxaca', capital: 'Oaxaca', poblacion:255029, datox:' mas información' },
		{estado:'Colima', capital: 'Colima', poblacion:137383 , datox:' mas información' },
		{estado:'Veracruz', capital: 'Xalapa', poblacion:424755 , datox:' mas información' },
		{estado:'Michoacán', capital: 'Morelia', poblacion:597511 , datox:' mas información' },
		{estado:'Tabasco', capital: 'Villahermosa ', poblacion: 353577 , datox:' mas información' },
		{estado:'Yucatán', capital: 'Mérida', poblacion: 777615 , datox:' mas información' },
		{estado:'Chihuahua', capital: 'Chihuahua', poblacion: 809232 , datox:' mas información' },
		{estado:'aaaaa', capital: 'a1', poblacion: 111 , datox:' mas información' },
		{estado:'bbbbb', capital: 'b1', poblacion: 222 , datox:' mas información' },
		{estado:'ccccc', capital: 'c1', poblacion: 333 , datox:' mas información' },
		{estado:'ddddd', capital: 'd1', poblacion: 444 , datox:' mas información' },
		{estado:'eeeee', capital: 'e1', poblacion: 555 , datox:' mas información' },
	];
	
	var tabla = new EngupiTablaSimple({
		tabla:{
			top:50,
			left:0,
			right:0,
			height:300
		},
		columnas:[200,180,180,200],
		datos:items
	});
	
	this.self.add( tabla.getVistaTabla() );
	
}




