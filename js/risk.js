
Reveal.addEventListener( 'risk', function() {
    console.log("Got event risk");
    let riskScore = {value: 23};
    const scoreEl = document.querySelector('#score');
    anime({
        targets: riskScore,
        value: 50,
        round: 1,
        duration: 6000,
        direction: 'reverse',
        easing: 'linear',
        update: function() {
            scoreEl.innerHTML = "And managed to get <b style='color: red; font-size: 64px'>" + (riskScore.value/10) +  "</b> score";
        }
    });
}, false );

