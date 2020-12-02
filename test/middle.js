var a=window.location.href;
var b=a.indexOf("watch?v=")+8;
var c=a.indexOf("youtu.be/")+9;
var d=a.indexOf("LIVE")+4;
var getid="";
if(d==3){if(b!==7){if(b!==41){window.location.replace("https://namasteybharat.github.io/watch?v="+getid)};getid=a.slice(b,b+11)}else{if(c!==8){getid=a.slice(c,c+11);window.location.replace("https://namasteybharat.github.io/watch?v="+getid)}else{window.location.replace("https://namasteybharat.github.io/LIVE")}};
 };