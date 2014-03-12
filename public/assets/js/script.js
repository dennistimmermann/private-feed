$( document ).ready(function() {

    var bg = $("#bg");

    var removeBg = function() {
        bg.removeClass("private family work public");
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
                $(e).find('.image').addClass('blur');
            }
            else {
                hide(e);
            }
        });
    }

    var makeFamily = function() {
        $(".entry").each(function(i, e) {
            if($(e).data("s").indexOf('family-all') != -1) {
                //do nottin
            }
            else if($(e).data("s").indexOf('family-name') != -1) {
                $(e).find('.text').addClass('blur');
                $(e).find('.image').addClass('blur');
            }
            else {
                hide(e);
            }
        });
    }

    var makeWork = function() {
        $(".entry").each(function(i, e) {
            if($(e).data("s").indexOf('work-all') != -1) {
                //do nottin
            }
            else if($(e).data("s").indexOf('work-name') != -1) {
                $(e).find('.text').addClass('blur');
                $(e).find('.image').addClass('blur');
            }
            else {
                hide(e);
            }
        });
    }

    var revert = function(e) {
        show(e);
        $(e).find('.picture').removeClass('blur');
        $(e).find('.text').removeClass('blur');
        $(e).find('.image').removeClass('blur');
    }

    var revertAll = function() {
        $(".entry").each(function(i, e) {
            revert(e);
        })
    }

    $("#private").bind("click", function(e) {
        removeBg();
        bg.addClass("private")
        revertAll();
    });

    $("#family").bind("click", function(e) {
        removeBg();
        bg.addClass("family")
        revertAll();
        makeFamily();
    });

    $("#work").bind("click", function(e) {
        removeBg();
        bg.addClass("work")
        revertAll();
        makeWork();
    });

    $("#public").bind("click", function(e) {
        removeBg();
        bg.addClass("public")
        revertAll();
        makePublic();
    });

    $(".entry").bind("click", function(e) {
        console.log(e);
        revert(e.currentTarget);
    })

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
