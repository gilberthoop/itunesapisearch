var images = new Array(
    'assets/images/appledesktop.jpg',
    'assets/images/earphone.jpg',
    'assets/images/system.jpg',
    'assets/images/tunes.jpg'
);
 

var nextImage = 0;

doSlideshow();


function doSlideshow() {
    if(nextImage >= images.length) { nextImage = 0; }
    $("body")
        .css('background-image', 'url("'+images[nextImage++]+'")') 
        .fadeIn(1000, function() {
            setTimeout(doSlideshow, 5000);
        });
}

