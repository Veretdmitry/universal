$(function () {
  var current = window.location;
  var from = ("'"+current+"'").search('articles-'); 
  var to = ("'"+current+"'").length;
  var newcurrent = ("'"+current+"'").substring(from,to);
  var num = ("'"+newcurrent+"'").match(/\d+/);
  var toNumber = to-7;
  var number = +num;
  var prev =("'"+current+"'").substring(from,toNumber)+(number-1)+'.html';
  var next =("'"+current+"'").substring(from,toNumber)+(number+1)+'.html';
// Переход между статьями
 $('.prev').on('click', function(e){
  e.preventDefault();
  window.location = prev;
 });
 $('.next').on('click', function(e){
  e.preventDefault();
  window.location = next;
 });
});