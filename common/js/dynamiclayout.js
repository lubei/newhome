
function getBrowserWidth(){
  if (window.innerWidth){
      return window.innerWidth;}  
  else if (document.documentElement && document.documentElement.clientWidth != 0){
      return document.documentElement.clientWidth;    }
  else if (document.body){return document.body.clientWidth;}      
      return 0;
}

function dynamicLayout(){
  var browserWidth = getBrowserWidth();
  if (browserWidth < 750){
      changeLayout("narrow");
  }
  if ((browserWidth >= 750) && (browserWidth <= 950)){
      changeLayout("wide");
  }
  if (browserWidth > 950){
      changeLayout("wider");
  }
}

function changeLayout(description){
 var rows = document.getElementsByTagName('link');
 for(var i=0, row; row = rows[i]; i++){
     if(row.getAttribute("title") == description){row.disabled = false;}
     else if(row.getAttribute("title") != "default"){row.disabled = true;}
 }
}

function addEvent( obj, type, fn ){ 
  if (obj.addEventListener){ 
    obj.addEventListener( type, fn, false );
  }
  else if (obj.attachEvent){ 
    obj["e"+type+fn] = fn; 
    obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 
    obj.attachEvent( "on"+type, obj[type+fn] ); 
  } 
} 

addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);