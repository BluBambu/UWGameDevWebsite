// Closes the drawer after a click
$(".mdl-navigation__link").each(function(){
    $(this).click(function() {
        // Removes the is-visible which hides the drawer
        document.getElementById("drawer").className = "mdl-layout__drawer";
    });
});

$(function(){
    $('a.mdl-navigation__link').click(function(e){
        e.preventDefault();
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $(".mdl-layout__content").animate({scrollTop:position}, speed, "swing");
    });
});