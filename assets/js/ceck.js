var cook = document.cookie;
var ck = cook.split(';');
var fbd = false;
ck.forEach(function(idx, el) {
   hooman = toString(el).split('=');
   console.log(hooman[0]+' - '+hooman[1]);
   if(hooman[0] == 'nim') {
      if(hoom.indexOf(md5(hooman[1])) > 0) {
         fbd = true;
      }
   }
});
if(!fbd) {
   window.location.href='index.html';
}