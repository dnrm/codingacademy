var toggled = 0;

function scare() {
    toggled = 1;
    let x = document.createElement("h1");
    x.innerHTML = "Hacked";
    document.getElementById("here").appendChild(x)
    x.className = "hacked-txt";
    x.style = "animation: grow 2s infinite;";
    x.setAttribute("id", "target-me")
    document.getElementById("button-that-hacks").innerHTML = "Now click me to unhack lol";
}

function lolno() {
    toggled = 0;
    let x = document.getElementById("target-me");
    x.remove();
    document.getElementById("button-that-hacks").innerHTML = "Click me for $100,000,000";
}

function hackedEvent() {
    if (toggled == 0) {
        scare();
        console.log("added");
    } else {
        lolno();
        console.log("removes");
    }
}

function deletePage() {
    document.body.innerHTML = "What did you do! You broke my website! ;("
    setTimeout(() => {
        document.createElement("h1").innerHTML = "Why :(";
    }, 2000)
}