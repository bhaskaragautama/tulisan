function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

function jQexec(nim){
   var auth = ['160010222','170010133','170030036','170030563','170030659','170030817','180030021','190030016'];
   if(auth.indexOf(nim) >= 0) {
      setCookie('nim',nim,30);
      window.location.href='home.html';
   } else {
      return 0;
   }
}
