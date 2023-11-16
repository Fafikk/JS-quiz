const questions = [
    'W którym tagu HTML wpisujemy kod JavaScript?',
    'Jaka jest poprawna składnia JavaScript, aby zmienić zawartość poniższego elementu HTML? <br> <p id="demo">Przykład.</p>',
    'Gdzie jest właściwe miejsce do wstawienia kodu JavaScript?',
    'Jaka jest poprawna składnia odwoływania się do zewnętrznego skryptu o nazwie „xxx.js”?',
    'Zewnętrzny plik JavaScript musi zawierać znacznik <script>.',
    'Jak napisać „Hello World” w polu alert?',
    'Jak utworzyć funkcję w JavaScript?',
    'Jak wywołać funkcję o nazwie „myFunction”?',
    'Jak napisać instrukcję IF w JavaScript?',
    'Jak napisać instrukcję IF do wykonania jakiegoś kodu, jeśli „i” NIE jest równe 5?',
    'Jak zaczyna się pętla WHILE?',
    'Jak zaczyna się pętla FOR?',
    'Jak dodać komentarz w JavaScript?',
    'Jak wstawić komentarz mający więcej niż jedną linię?',
    'Jaki jest prawidłowy sposób pisania tablicy JavaScript?',
    'Jak zaokrąglić liczbę 7,25 do najbliższej liczby całkowitej?',
    'Który operator służy do przypisania wartości zmiennej?',
    'Jak zadeklarować zmienną JavaScript?',
    'JavaScript to jest to samo, co Java.',
    'Które zdarzenie ma miejsce, gdy użytkownik kliknie element HTML?'
];

const answersA = [
    '<js>',
    '#demo.innerHTML = "Hello World!";',
    'Oby dwie sekcje (<head> i <body>)',
    '<script href="xxx.js">',
    'Prawda',
    'msgBox("Hello World");',
    'function myFunction()',
    'call myFunction()',
    'if (i == 5)',
    'if (i != 5)',
    'while i = 1 to 10',
    'for (i <= 5; i++)',
    '`To jest komentarz',
    '//Ten komentarz ma więcej niż jedną linię//',
    'var colors = (1:"red", 2:"green", 3:"blue")',
    'Math.rnd(7.25)',
    '*',
    'v carName;',
    'Fałsz',
    'onmouseover'
];

const answersB = [
    '<javascript>',
    'document.getElementByName("p").innerHTML = "Hello World!";',
    'Sekcja <body>',
    '<script name="xxx.js">',
    'Fałsz',
    'msg("Hello World");',
    'function:myFunction()',
    'call function myFunction()',
    'if i = 5 then',
    'if (i <> 5)',
    'while (i <= 10)',
    'for i = 1 to 5',
    '<!--To jest komentarz-->',
    '/*Ten komentarz ma więcej niż jedną linię*/',
    'var colors = ["red", "green", "blue"]',
    'Math.round(7.25)',
    '-',
    'variable carName;',
    'Prawda',
    'onchange'
];

const answersC = [
    '<scripting>',
    'document.getElement("p").innerHTML = "Hello World!";',
    'Sekcja <head>',
    '<script src="xxx.js">',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'alertBox("Hello World");',
    'function = myFunction()',
    'myFunction()',
    'if i = 5',
    'if i <> 5',
    'while (i <= 10; i++)',
    'for (i = 0; i <= 5)',
    '//To jest komentarz',
    '<!--Ten komentarz ma więcej niż jedną linię-->',
    'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    'rnd(7.25)',
    'X',
    'var carName;',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'onmouseclick'
];

const answersD = [
    '<script>',
    'document.getElementById("demo").innerHTML = "Hello World!";',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'alert("Hello World");',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'if i == 5 then',
    'if i =! 5 then',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'for (i = 0; i <= 5; i++)',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'var colors = "red", "green", "blue"',
    'round(7.25)',
    '=',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'Brak odpowiedzi, zaznacz jedną z pozostałych.',
    'onclick'
];

const correct = [
    'd', // 1
    'd', // 2
    'a', // 3
    'c', // 4
    'b', // 5
    'd', // 6
    'a', // 7
    'c', // 8
    'a', // 9
    'a', // 10
    'b', // 11
    'd', // 12
    'c', // 13
    'b', // 14
    'b', // 15
    'b', // 16
    'd', // 17
    'c', // 18
    'a', // 19
    'd'
];

// indexes from 0

let current = 0;
let score = 0;

// starting when website opens

window.addEventListener("load", start(1));

// first question

function start(id) { // id from event listener
    document.getElementById('board').innerHTML = `
    <p class="numer">Pytanie <span id="numer">-</span> z 20:</p>
    <p id="question">Pytanie</p>
    <p class="inputs">A <input type="radio" name="answer" value="a" > <span id="answer1">-</span> </p>
    <p class="inputs">B <input type="radio" name="answer" value="b" > <span id="answer2">-</span> </p>
    <p class="inputs">C <input type="radio" name="answer" value="c" > <span id="answer3">-</span> </p>
    <p class="inputs">D <input type="radio" name="answer" value="d" > <span id="answer4">-</span> </p>
    <button onclick="next()">Następne pytanie</button>
    <button onclick="exit()">Zakończ quiz</button>
    <p id="error"></p>
    `;

    score = 0;
    document.getElementById('error').innerHTML = "";
    current = id;
    let question1 = questions[id-1];
    let answer1 = answersA[id-1];
    let answer2 = answersB[id-1];
    let answer3 = answersC[id-1];
    let answer4 = answersD[id-1];
    document.getElementById('numer').innerText = id;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

// next question

function next() {

    questionCheck(current); // current from start() function

}

// without changes

function exit() {
    document.getElementById('board').innerHTML = `
    <h1>Wynik końcowy:<h1>
    <p>${score} z 20 punktów</p>
    `;
}

// checking answers

function questionCheck(id) { // id from function next()
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[id-1];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    id+=1; // next id

    question(id);
}

// loading questions

function question(id) { // id from function questionCheck()
    if (id == 21) {
        exit();
        return;
    }
    current = id;
    let question1 = questions[id-1];
    let answer1 = answersA[id-1];
    let answer2 = answersB[id-1];
    let answer3 = answersC[id-1];
    let answer4 = answersD[id-1];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}
