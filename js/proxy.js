

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

const names = [
    "T",
    "TI",
    "TIB",
    "TIBC",
    "TIBCO",
    "TIBCO Z",
    "TIBCO ZE",
    "TIBCO Z",
    "TIBCO",
    "TIBCO H",
    "TIBCO HE",
    "TIBCO HER",
    "TIBCO HERO",
    "TIBCO HEROE",
    "TIBCO HEROES",
    "TIBCO HEROE",
    "TIBCO HERO",
    "TIBCO HER",
    "TIBCO HE",
    "TIBCO H",
    "TIBCO",
    "TIBCO S",
    "TIBCO SU",
    "TIBCO SUP",
    "TIBCO SUPE",
    "TIBCO SUPER",
    "TIBCO SUPER H",
    "TIBCO SUPER HE",
    "TIBCO SUPER HER",
    "TIBCO SUPER HERO",
    "TIBCO SUPER HEROE",
    "TIBCO SUPER HEROES",
];
Reveal.addEventListener( 'tibco', function() {
    const name = "TIBCO SUPER HEROES";
    let counter = {value: 0};
    const tibco = document.querySelector('#tibco');
    anime({
        targets: counter,
        value: names.length-1,
        round: 1,
        duration: 9000,
        easing: 'linear',
        update: function(a) {
            tibco.innerHTML = names[counter.value]//name.substr(0, counter.value);
        }
    });

}, false);
