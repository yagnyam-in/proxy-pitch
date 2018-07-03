

Reveal.configure({
    keyboard: {
        13: 'next',
        32: animateNext
    }
});

Reveal.addEventListener( 'banking-demo', function() {
	// TODO: Sprinkle magic
}, false );

Reveal.addEventListener('slidechanged', function (event) {
    animateNext();
});

function animateNext() {
    jsPlumb.ready(function () {
        console.log('animateNext', Reveal.getCurrentSlide());
        jsPlumb.connect({
            source: "proxy",
            target: "bank",
            anchors: ["Right", "Left"],
        });
    });
}