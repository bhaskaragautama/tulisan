function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

function jQexec(nim){
   if(hoom.indexOf(md5(nim)) >= 0) {
      setCookie('nim',md5(nim),30);
      window.location.href='home.html';
   } else {
      return 0;
   }
}
