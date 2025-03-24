(function ($) {
    $.fn.highlightOldBooks = function () {
        this.find(".book-card").each(function () {
            let yearText = $(this).find(".book-info p").text();
            let yearMatch = yearText.match(/\((\d{4})\)/);

            if (yearMatch) {
                let year = parseInt(yearMatch[1]);
                console.log("Checking book with year:", year); 

                if (year < 1950) {
                    $(this).css({ 
                        "border": "3px solid red", 
                        "box-shadow": "0px 0px 10px red" 
                    });
                    console.log("Applied red border to:", $(this).find("h2").text());
                }
            }
        });
        return this;
    };
})(jQuery);
