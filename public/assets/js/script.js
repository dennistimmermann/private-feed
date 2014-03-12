$( document ).ready(function() {

    var bg = $("#bg");

    var removeBg = function() {
        bg.removeClass("office public concert");
    }

    $("#private").bind("click", function(e) {
        removeBg();
        bg.addClass("office")
    });

    $("#family").bind("click", function(e) {
        removeBg();
        bg.addClass("concert")
    });

    $("#public").bind("click", function(e) {
        removeBg();
        bg.addClass("public")
    });

    $(".entry").each(function(i, e) {
        if($(e).data("s").indexOf('public') != -1) {
            console.log("yap yap")
        }
        //console.log($(e).data("s"));
    });

    var makePublic = function() {
        $(".entry").each(function(i, e) {
            $(e).find("h3").addClass("blur");
            $(e).find(".picture").addClass("blur");
        })
    }

    window.makePublic = makePublic;

});
