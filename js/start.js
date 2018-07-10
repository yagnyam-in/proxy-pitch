
var stories = [
    'abc',
    'def',
    'xyz',
    'abc',
    'def',
    'xyz',
    'abc',
    'def',
    'xyz',
    'abc',
    'def',
    'xyz',
    'abc',
    'def',
    'xyz',
    'abc',
    'def',
    'xyz'
];

Reveal.addEventListener( 'startPage', function() {
    console.log("Got event startPage");
    var pendingStories = {value: 0};
    var noOfStories = document.querySelector('#noOfStories');
    anime({
        targets: pendingStories,
        value: stories.length,
        round: 1,
        duration: 60000,
        easing: 'linear',
        update: function() {
            if (pendingStories.value < stories.length) {
                noOfStories.innerHTML = (stories.length - pendingStories.value) + ": " + stories[pendingStories.value];
            }
        }
    });
}, false );

