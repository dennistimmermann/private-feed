$( document ).ready(function() {

    var bg = $("#bg");

    var removeBg = function() {
        bg.removeClass("office public concert");
    }

    var hide = function(e) {
        $(e).addClass('hide');
    }

    var show = function(e) {
        $(e).removeClass('hide');
    }

    var makePublic = function() {
        $(".entry").each(function(i, e) {
            $(e).find('.picture').addClass('blur');
            if($(e).data("s").indexOf('public-all') != -1) {
                //do nottin
            }
            else if($(e).data("s").indexOf('public-name') != -1) {
                $(e).find('.text').addClass('blur');
            }
            else {
                hide(e);
            }
        });
    }

    var makeFamily = function() {
        $(".entry").each(function(i, e) {
            $(e).find('.picture').addClass('blur');
            if($(e).data("s").indexOf('family-all') != -1) {
                //do nottin
            }
            else if($(e).data("s").indexOf('family-name') != -1) {
                $(e).find('.text').addClass('blur');
            }
            else {
                hide(e);
            }
        });
    }

    var revert = function() {
        $(".entry").each(function(i, e) {
            show(e);
            $(e).find('.picture').removeClass('blur');
            $(e).find('.text').removeClass('blur');
        })
    }

    $("#private").bind("click", function(e) {
        removeBg();
        bg.addClass("office")
        revert();
    });

    $("#family").bind("click", function(e) {
        removeBg();
        bg.addClass("concert")
        revert();
        makeFamily();
    });

    $("#public").bind("click", function(e) {
        removeBg();
        bg.addClass("public")
        revert();
        makePublic();
    });

    // $(".entry").each(function(i, e) {
    //     if($(e).data("s").indexOf('private') != -1) {
    //         console.log("yap yap")
    //     }
    //     else {
    //         hide(e);
    //     }
    //     //console.log($(e).data("s"));
    // });





    window.makePublic = makePublic;

});
