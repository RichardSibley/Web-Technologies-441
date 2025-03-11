$(document).ready(function() {
    const images = [
        'Images/Boulder.png',
        'Images/Mindset.png',
        'Images/Success.png'
    ];
    let imageIndex = 0;

    function changeImage() {
        const img = $('<img>').attr('src', images[imageIndex])
            .css({
                left: Math.random() * 80 + '%',
                top: Math.random() * 80 + '%',
                opacity: 1
            })
            .appendTo('.image-container');

        $('.image-container img').not(img).fadeOut(500, function() {
            $(this).remove();
        });

        img.fadeIn(500).animate({
            left: Math.random() * 80 + '%',
            top: Math.random() * 80 + '%'
        }, 3000);

        imageIndex = (imageIndex + 1) % images.length;
    }

    setInterval(changeImage, 4000); 
    changeImage(); 

    const texts = [
        '"Impossible is for the unwilling. - John Keats"',
        '"No pressure, no diamonds. -Thomas Carlyle"',
        '"Boldness be my friend. -Shakespeare"'
    ];
    let textIndex = 0;

    function changeText() {
        const text = $('<div class="text">').text(texts[textIndex])
            .css({
                left: Math.random() * 80 + '%',
                top: Math.random() * 80 + '%',
                opacity: 1 
            })
            .appendTo('.text-container');

        $('.text-container .text').not(text).fadeOut(300, function() { 
            $(this).remove();
        });

        text.fadeIn(500).animate({
            left: Math.random() * 80 + '%',
            top: Math.random() * 80 + '%'
        }, 3000);

        setTimeout(() => {
            text.fadeOut(300, function() {
                textIndex = (textIndex + 1) % texts.length;
                changeText();
            });
        }, 3500);

        textIndex = (textIndex + 1) % texts.length;
    }

    changeText();

    const shapes = ['circle', 'square', 'triangle'];
    let shapeIndex = 0;

    function createShape() {
        const size = Math.random() * 100 + 50; 


        const shape = $('<div class="shape">').addClass(shapes[shapeIndex])
            .css({
                width: size + 'px',  
                height: size + 'px',  
                left: Math.random() * 80 + '%',
                top: Math.random() * 80 + '%'
            })
            .appendTo('.shape-container');

        $('.shape-container .shape').not(shape).fadeOut(500, function() { 
            $(this).remove();
        });

        shape.fadeIn(500).animate({
            left: Math.random() * 80 + '%',
            top: Math.random() * 80 + '%'
        }, 2000);

        shapeIndex = (shapeIndex + 1) % shapes.length;
    }

    setInterval(createShape, 4000); 
    createShape(); 
});
