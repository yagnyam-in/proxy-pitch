

Reveal.configure({
    keyboard: {
        13: 'next',
        32: animateNext
    }
});


Reveal.addEventListener('slidechanged', function (event) {
    console.log("Got event slidechanged");
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