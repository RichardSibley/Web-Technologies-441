(function ($) {
    $.fn.flipBook = function () {
        this.addClass("flip-container"); 
        this.find(".book-card").wrapInner("<div class='flip-card-inner'></div>");
        this.find(".book-card img").wrap("<div class='flip-card-front'></div>");
        this.find(".book-info").wrap("<div class='flip-card-back'></div>");

        this.find(".book-card").each(function () {
            let inner = $(this).find(".flip-card-inner");

            $(this).click(function () {
                inner.toggleClass("flipped");
            });
        });

        return this;
    };
})(jQuery);
