var cook = document.cookie;
var ck = cook.split(';');
var fbd = false;
ck.forEach(function(el, idx) {
   hooman = el.split('=');
   if(hooman[0].trim() == 'nim') {
      if(hoom.indexOf(md5(hooman[1])) == 0) {
         fbd = true;
      }
   }
});
if(!fbd) {
   window.location.href='index.html';
}