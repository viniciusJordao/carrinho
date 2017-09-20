(function() {
  var app = angular.module('store', []);

 app.controller('StoreController', function(){
    this.products = productsList;
	this.productsCart = cartList;
	this.subTotal = total
	
	
		this.cart = function(vem, total){
			cartList.push(vem);	
			//console.log(cartList);
			var total = 0;
			for (var i = 0; i < cartList.length; i++)
			{
				
				
				total += cartList[i].price;
	
			}
			

		
		
		console.log(total);
		};
	
	
  });

  
var productsList = [{
	name:"Camiseta Corinthians Réplica Sócrates",
	img:"img/product01.jpg",
	price:59.90
	},
	
	{	
	name:"Chuteira Nike Mercurial",
	img:"dasdasd",
	price:149.90		
	},
	
	{
	name:"Camiseta Corinthians Primeiro Mundial",
	img:"img/product01.jpg",
	price:59.90
	},
	
	{
	name:"Camiseta Corinthians Réplica Sócrates",
	img:"img/product01.jpg",
	price:59.90
	},
	
	{
	name:"Camiseta Corinthians O Mundo é Nosso",
	img:"img/product01.jpg",
	price:19.90
	},
	
	{
	name:"Camiseta Corinthians Cala a boca Campeão da Libertadores 2012",
	img:"img/product01.jpg",
	price:19.90
	},
	
	{
	name:"Camiseta Corinthians Campeão da Libertadores 2012",
	img:"img/product01.jpg",
	price:19.90
	},
	
	{
	name:"Camisa  Polo Corinthians Libertadores 2012",
	img:"img/product01.jpg",
	price:19.90
	}
];

var cartList = [];

var total = 0;

})();


