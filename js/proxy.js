

Reveal.configure({
    keyboard: {
        13: 'next',
        32: animateNext
    }
});


Reveal.addEventListener('slidechanged', function (event) {
    //console.log("Got event slidechanged");
    //animateNext();
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

Reveal.addEventListener( 'ten24', function() {
    let counter = {value: 0};
    const ten24 = document.querySelector('#ten24');
    anime({
        targets: counter,
        value: 1024,
        round: 1,
        duration: 3000,
        easing: 'linear',
        update: function(a) {
            ten24.innerHTML = counter.value.toString(2).padStart(11, "0");
        },
        complete: function (a) {
            delayed(() => {
                ten24.innerHTML = "1024";
                delayed(() => {
                    ten24.innerHTML = "Ten24";
                });
            });
        }
    });

}, false);

Reveal.addEventListener( 'tibco', function() {
    const name = "TIBCO SUPER HEROES";
    let counter = {value: 0};
    const tibco = document.querySelector('#tibco');
    anime({
        targets: counter,
        value: name.length,
        round: 1,
        duration: 3000,
        easing: 'linear',
        update: function(a) {
            tibco.innerHTML = name.substr(0, counter.value);
        }
    });

}, false);
