(function() {
  var app = angular.module('store', []);

 app.controller('StoreController', function(){
    this.products = productsList;
  });
  
 app.controller('CartController', function(){
	this.productsCart = cartList;
	this.subTotal = 0;
	
	this.cart = function(vem){

			cartList.push(vem);	
			
			var d = new Date();
			var bang = d.getTime();
			var obj = bang;
			vem.id = obj;
			
			var total = 0;
			for (var i = 0; i < cartList.length; i++)
			{
				total = total + cartList[i].price;
			}
			
			vem = {};
		this.subTotal = total;
		total = 0;
		
		console.log(cartList)
	};
	this.removeCart = function(vai){
		console.log(vai);
		for (var x = 0; x < cartList.length; x++){
					
			var obj = vai.id;
			var price = cartList[x].price;
			
			//console.log(obj);
			
			if(obj === cartList[x].id){
				cartList.splice(x, 1);
				total = total + cartList[x].price;
			}
			
		}
		this.subTotal = total;
		
	}
 });

  
var productsList = [{
		id:01,
		name:"Camiseta Corinthians Réplica Sócrates",
		img: [
			"img/product01.jpg", 
			"img/product01_thumb.jpg",
		],
		price:59.90
	},
	
	{
	id:02,		
	name:"Chuteira Nike Mercurial",
	img: [
		"img/product02.jpg", 
		"img/product02_thumb.jpg",
	],
	price:149.90		
	},
	
	{
	id:03,		
	name:"Camiseta Corinthians Primeiro Mundial",
	img: [
		"img/product03.jpg", 
		"img/product03_thumb.jpg",
	],
	
	price:59.90
	},
	
	{
	id:04,	
	name:"Camiseta Corinthians Réplica Sócrates",
	img: [
		"img/product04.jpg", 
		"img/product04_thumb.jpg",
	],
	price:59.90
	},
	
	{
	id:05,
	name:"Camiseta Corinthians O Mundo é Nosso",
	img: [
		"img/product05.jpg", 
		"img/product05_thumb.jpg",
	],
	price:19.90
	},
	
	{
	id:06,
	name:"Camiseta Corinthians Cala a boca Campeão da Libertadores 2012",
	img: [
		"img/product06.jpg", 
		"img/product06_thumb.jpg",
	],
	price:19.90
	},
	
	{
	id:07,
	name:"Camiseta Corinthians Campeão da Libertadores 2012",
	img: [
		"img/product07.jpg", 
		"img/product07_thumb.jpg",
	],
	price:19.90
	},
	
	{
	id:08,
	name:"Camisa  Polo Corinthians Libertadores 2012",
	img: [
		"img/product08.jpg", 
		"img/product08_thumb.jpg",
	],
	price:19.90
	}
];

var cartList = [];

var total = 0;

})();


