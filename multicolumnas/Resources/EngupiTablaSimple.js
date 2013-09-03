/**
 * EngupiTablaSimple.js
 * 
 * Crea una tabla con multiples columnas dentro de un scrollView
 * 
 * @agustinistmo
 * agustin@engupisoft.com
 * 2013 Agosto
 * http://guru.engupisoft.com
 * 
* El código de Guru Engupi se distribuye bajo la licencia Apache Software License 2.0
 * 
 */

var fontSize  =  ( ( Ti.Platform.displayCaps.platformHeight >  Ti.Platform.displayCaps.platformWidth ) ?
Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformWidth ) / 32 ;

var EngupiTablaSimple = function( parametros ){

	this.parametros = parametros;	
	
	this.crearTabla();
	
}

EngupiTablaSimple.prototype.getVistaTabla = function(){
	return this.scrollView;
}


module.exports = EngupiTablaSimple;


EngupiTablaSimple.prototype.crearTabla = function(){
	
	this.tabla = Ti.UI.createTableView( this.parametros.tabla );
	var items = this.parametros.datos;
	
	var rows = [];
	var columnas = this.parametros.columnas.length;
	var anchoTotal = 0;
	
	for ( var i in this.parametros.columnas )
		anchoTotal += this.parametros.columnas[ i ];
		
	Ti.API.info(' anchoTotal = ' + anchoTotal );
	
	for ( var i in items ){
		Ti.API.info(' items i = ' + i );
		
		var item = items[i];
		var tvr = Ti.UI.createTableViewRow({
			height: fontSize*2.5,
		});
		var view = Ti.UI.createView({
			width: anchoTotal,
			layout:'horizontal'
		});
		var x = 0;
		for ( var d in item ){
			Ti.API.info( ' d = ' + d + ' ' + item[d] );
			var lbl = Ti.UI.createLabel({
				text: item[ d ],
				width: this.parametros.columnas[ x++ ],
				font:{fontSize: fontSize }
			});
			view.add( lbl );
		}
		tvr.add( view );
		rows.push( tvr );
	}
	
	this.tabla.setData( rows );
	
	this.scrollView = Ti.UI.createScrollView( this.parametros.tabla );
	this.scrollView.scrollType = 'horizontal';
  	this.scrollView.showHorizontalScrollIndicator = true,
    this.scrollView.contentWidth = 'auto';
  	this.scrollView.contentHeight = 'auto';	
	
	this.view = Ti.UI.createView({
		width: anchoTotal,
		top:0,
		left:0,
		right:0,
		bottom:0
	})
	this.view.add( this.tabla );
	
	this.scrollView.add( this.view );
}