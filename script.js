function changeNav() {
    var header__top = document.getElementById('header__top');
    var header__topClassLists = header__top.classList;
    if(header__topClassLists.contains('header__open')){
        header__topClassLists.remove('header__open');
    } else{
        header__topClassLists.add('header__open');
    }
}

$(document).ready(function(){
    $window = $(window);
$('div[data-type="background"]').each(function(){
     var $bgobj = $(this);
 $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        var coords = '50% '+ yPos + 'px';
        $bgobj.css({ backgroundPosition: coords });
    }); 
 });    
}); 