var xmlHttp;
function createXmlHttp() 
{
    if (window.XMLHttpRequest) 
       xmlHttp = new XMLHttpRequest();  
    else 
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
function update()
{
if(xmlHttp.readyState == 4)
 {
  results = xmlHttp.responseText;
  linkdiv.innerHTML=results;
 }
}
function send(linkurl)
{
createXmlHttp();
xmlHttp.onreadystatechange = update;
xmlHttp.open("get",linkurl, true);
xmlHttp.send(null);
}
