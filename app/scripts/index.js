var $ = require('jquery');
var Backbone = require('backbone');



$('.cart-button').on('click', function(e){
 e.stopPropagation();
 window.location = 'checkout.html';
});



$('.add1').on('click', function(e){
  e.preventDefault();
  var name = $('.hugs1').html()
  console.log(name);
  var size = $('.size1').val();
  console.log(size);
  var quantity = $('.quantity1').val();
  console.log(quantity);
});

$('.add2').on('click', function(e){
  e.preventDefault();
  var name = $('.hugs2').html()
  console.log(name);
  var size = $('.size2').val();
  console.log(size);
  var quantity = $('.quantity2').val();
  console.log(quantity);
});

$('.add3').on('click', function(e){
  e.preventDefault();
  var name = $('.hugs3').html()
  console.log(name);
  var size = $('.size3').val();
  console.log(size);
  var quantity = $('.quantity3').val();
  console.log(quantity);
});
