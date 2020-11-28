let str = prompt('Enter string');
let chars = [];
let frequency = []

function howManyTimes(str) {
    for (let i = 0; i < str.length; i++) {
        let times = str.split(str[i]).length - 1;
        if (!chars.includes(str[i])) {
            chars.push(str[i]);
            frequency.push(times);
        } else {
            frequency[frequency.indexOf(str[i])] += 1;
        }
    }
}

function createTable() {
    for (let i = 0; i < chars.length; i++) {
        let element = document.createElement('tr');
        let characterData = document.createElement('td').innerText = chars[i];
        let frequencyData = document.createElement('td').innerText = frequency[i];
        element.appendChild(characterData);
        element.appendChild(frequencyData);
        document.getElementById('table').appendChild(element);
    }
}

howManyTimes(str);
createTable();