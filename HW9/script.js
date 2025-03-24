$(document).ready(function () {
    $.ajax({
        url: "data.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            let output = "<div class='book-list'>";
            $.each(data, function (index, book) {
                output += `
                    <div class="book-card">
                        <img src="${book.image}" alt="${book.title}">
                        <div class="book-info">
                            <h2>${book.title}</h2>
                            <p>by ${book.author} (${book.year})</p>
                        </div>
                    </div>
                `;
            });
            output += "</div>";
            $("#book-container").html(output);

            $(".book-list").highlightOldBooks();

            $(".book-list").flipBook();
        },
        error: function () {
            $("#book-container").html("<p>Failed to load data.</p>");
        }
    });
});
