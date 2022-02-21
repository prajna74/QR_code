var data={
    "size": 250, 
    "backgroundColor": "38-38-38", 
    "qrColor": "255-255-255", 
    "padding": 2, 
    "data": "dev.to"
}

function dowork(dataa){
 var parameters=`size=${data.size}&bgcolor=${data.backgroundColor}&color=${data.qrColor}&data=${dataa}`;
 var img=document.getElementById("imgg");
 img.src=`https://api.qrserver.com/v1/create-qr-code/?${parameters}`;
 document.querySelector(".form").style.display="";
 document.getElementById("downloadlink").href=`https://api.qrserver.com/v1/create-qr-code/?${parameters}`;
 document.getElementById("result").style.display="block";
}
function downloadimg(){
    document.getElementById("downloadlink").href=`https://api.qrserver.com/v1/create-qr-code/?${parameters}`;
}