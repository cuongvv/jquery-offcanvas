(function(window, document, $, undefined) {
    "use strict";

    var site = {

        addJSClass: function() {
            if (typeof window.Modernizr === "undefined") {
                $("html").removeClass("no-js").addClass("js");
            }
        },

        initOffcanvas: function() {
            $("#offcanvas").offcanvas({
                
            });
        },

        init: function() {
            this.addJSClass();
            this.initOffcanvas();
        }
    };

    $(function() {
        site.init();
    });

})(window, document, jQuery);
