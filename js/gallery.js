function showGallery(index) {
  var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
                src: 'images/gallery/g1.jpeg',
                w: 1200,
                h: 900
            },
            {
                src: 'images/gallery/g2.jpeg',
                w: 1200,
                h: 900
            },
            {
                src: 'images/gallery/g3.jpeg',
                w: 1200,
                h: 900
            }
        ];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: index // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
}
