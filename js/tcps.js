

Reveal.addEventListener( 'tcps', function() {
    console.log("Got event tcps");
    let accountsMigrated = {value: 0};
    const accounts = document.querySelector('#accounts');
    //const tcpsAccounts = document.querySelector('#tcpsAccounts');
    //const orangeAccounts = document.querySelector('#orangeAccounts');
    anime({
        targets: accountsMigrated,
        value: 296958,
        round: 1,
        duration: 6000,
        easing: 'linear',
        update: function() {
            accounts.innerHTML = "Accounts migrated <b style='color: orangered'>" + accountsMigrated.value +  "</b>";
            //tcpsAccounts.innerHTML = "TCPS Accounts <b style='color: blue'>" + (296958-accountsMigrated.value) +  "</b>";
            //orangeAccounts.innerHTML = "Orange Savings Accounts <b style='color: red'>" + accountsMigrated.value +  "</b>";
        }
    });



}, false );

