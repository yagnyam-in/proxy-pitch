var mobile = document.querySelector('#mobile');
var enticements = document.querySelector('#enticements');
var ming = document.querySelector('#ming');

function removeAllConnections() {
    jsPlumb.deleteConnectionsForElement("mobile");
    jsPlumb.deleteConnectionsForElement("enticements");
    jsPlumb.deleteConnectionsForElement("ming");
    jsPlumb.deleteConnectionsForElement("sm");
    jsPlumb.deleteConnectionsForElement("holderAgreements");
    jsPlumb.deleteConnectionsForElement("proxyAgreements");
}

function connect(source, target) {
    jsPlumb.connect({
        source: source,
        target: target,
        anchors: ["Right", "Left"],
        //endpointStyle:{radius:3}
    });
}

function delayed(fun) {
    setTimeout(fun, 500);
}

function mobileFlow() {
    console.log("mobile flow");
    removeAllConnections();
    connect("mobile", "sm");
    delayed(() => {
        connect("sm", "holderAgreements");
        connect("sm", "proxyAgreements");
        delayed(() => {
            connect("holderAgreements", "targets");
            connect("proxyAgreements", "targets");
            connect("holderAgreements", "names");
            connect("proxyAgreements", "names");
        });
    });
}

function enticementsFlow() {
    console.log("enticements flow");
    removeAllConnections();
    connect("enticements", "sm");
    delayed(() => {
        connect("sm", "holderAgreements");
        connect("sm", "proxyAgreements");
    });
}

function mingFlow() {
    console.log("ming flow");
    removeAllConnections();
    connect("ming", "sm");
    delayed(() => {
        connect("sm", "holderAgreements");
        connect("sm", "proxyAgreements");
        delayed(() => {
            connect("holderAgreements", "targets");
            connect("proxyAgreements", "targets");
            connect("holderAgreements", "names");
            connect("proxyAgreements", "names");
            connect("holderAgreements", "accountDetails");
            connect("proxyAgreements", "accountDetails");
        });
    });
}

mobile.addEventListener("click", function () {
    jsPlumb.ready(function () {
        mobileFlow();
    });
});

enticements.addEventListener("click", function () {
    jsPlumb.ready(function () {
        enticementsFlow();
    });
});

ming.addEventListener("click", function () {
    jsPlumb.ready(function () {
        mingFlow();
    });
});

Reveal.addEventListener('partialResponse', function () {
    console.log("Got event partialResponse");
    delayed(() => {
        jsPlumb.ready(function () {
            mingFlow();
        });
    });
}, false);

