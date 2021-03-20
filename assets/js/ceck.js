var cook = document.cookie;
var ck = cook.split(';');
ck.forEach(function(idx, el) {
   console.log(el);
   // hooman = el.split('=');
   // if(hooman[0] == 'nim') {
   //    if(hoom.indexOf(md5(hooman[1])) < 0) {
   //       window.location.href='index.html';
   //    }
   // }
});