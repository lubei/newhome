
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
      //swiperNews.updateContainerSize();
      if(typeof(swiperNews)!='undefined'){
          swiperNews.detachEvents();
          $('.newsList li').css({'width':'12rem','marginRight':'1rem'});
      }
  }
  if ((browserWidth >= 750) && (browserWidth <= 950)){
      changeLayout("wide");
      if(typeof(swiperNews)!='undefined'){
          swiperNews.onResize();
          swiperNews.attachEvents()
      }
  }
  if ((browserWidth > 950) && (browserWidth <= 1440)) {
      changeLayout("wider");
      if(typeof(swiperNews)!='undefined'){
          swiperNews.onResize();
          swiperNews.attachEvents()
      }
  }
  if (browserWidth > 1440) {
        changeLayout("larger");
        if(typeof(swiperNews)!='undefined'){
            swiperNews.onResize();
            swiperNews.attachEvents()
        }
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

function showMenu() {
    var screenWidth = document.body.offsetWidth;
    $('#menuMob').animate({ left: "0" });
    $('body').css('position', 'relative');
    $('body').animate({ left: "10.7rem" }, function () { $('body').css({ 'position': 'fixed', 'width': screenWidth }); });
    $('.menu-mask').show().animate({ left: "10.7rem" });
    // $('.menu-mask').show();
    // $('#menuMob').addClass('menuMobMove');
    // $('body').addClass('allMove', function () { $('body').css({ 'position': 'fixed', 'width': screenWidth }); });

}

function hideMenu() {
    $('#menuMob').animate({ left: "-10.7rem" });
    $('body').css('position', 'relative');
    $('body').animate({ left: "0rem" });
    $('.menu-mask').hide().animate({ left: "0rem" });
}

$(function () {
    $('#checkSlide').change(function(){
        var nav = $('.navigation-slide');
        var _this = $(this);
        nav.slideToggle(300);
    });
    $('.menu').click(function () {
        showMenu();
    });
    $('.menu-mask').click(function () {
        hideMenu();
    });

})

addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);