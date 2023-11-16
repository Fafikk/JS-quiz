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

// first question

function start() {
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
    current = 1;
    let question1 = questions[0];
    let answer1 = answersA[0];
    let answer2 = answersB[0];
    let answer3 = answersC[0];
    let answer4 = answersD[0];
    document.getElementById('numer').innerText = 1;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

// next question

function next() {

    switch (current){
        case 1: question1Check(); break;
        case 2: question2Check(); break;
        case 3: question3Check(); break;
        case 4: question4Check(); break;
        case 5: question5Check(); break;
        case 6: question6Check(); break;
        case 7: question7Check(); break;
        case 8: question8Check(); break;
        case 9: question9Check(); break;
        case 10: question10Check(); break;
        case 11: question11Check(); break;
        case 12: question12Check(); break;
        case 13: question13Check(); break;
        case 14: question14Check(); break;
        case 15: question15Check(); break;
        case 16: question16Check(); break;
        case 17: question17Check(); break;
        case 18: question18Check(); break;
        case 19: question19Check(); break;
        case 20: question20Check(); break;
        default: document.getElementById('error').innerHTML = "Najpierw musisz rozpocząć quiz.";
    }

}

function exit() {
    document.getElementById('board').innerHTML = `
    <h1>Wynik końcowy:<h1>
    <p>${score} z 20 punktów</p>
    `;
}

// checking answers

function question1Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[0];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question2();
}

function question2Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[1];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question3();
}

function question3Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[2];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question4();
}

function question4Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[3];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question5();
}

function question5Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[4];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question6();
}

function question6Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[5];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question7();
}

function question7Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[6];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question8();
}

function question8Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[7];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question9();
}

function question9Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[8];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question10();
}

function question10Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[9];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question11();
}

function question11Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[10];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question12();
}

function question12Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[11];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question13();
}

function question13Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[12];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question14();
}

function question14Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[13];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question15();
}

function question15Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[14];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question16();
}

function question16Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[15];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question17();
}

function question17Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[16];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question18();
}

function question18Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[17];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question19();
}

function question19Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[18];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    question20();
}

function question20Check() {
    let clientAnswer = document.querySelector('input[name="answer"]:checked').value;
    let correctCheck = correct[19];

    if (correctCheck == clientAnswer){
        score+=1;
    }

    exit();
}

// loading questions

function question2() {
    current = 2;
    let question1 = questions[1];
    let answer1 = answersA[1];
    let answer2 = answersB[1];
    let answer3 = answersC[1];
    let answer4 = answersD[1];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question3() {
    current = 3;
    let question1 = questions[2];
    let answer1 = answersA[2];
    let answer2 = answersB[2];
    let answer3 = answersC[2];
    let answer4 = answersD[2];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question4() {
    current = 4;
    let question1 = questions[3];
    let answer1 = answersA[3];
    let answer2 = answersB[3];
    let answer3 = answersC[3];
    let answer4 = answersD[3];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question5() {
    current = 5;
    let question1 = questions[4];
    let answer1 = answersA[4];
    let answer2 = answersB[4];
    let answer3 = answersC[4];
    let answer4 = answersD[4];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question6() {
    current = 6;
    let question1 = questions[5];
    let answer1 = answersA[5];
    let answer2 = answersB[5];
    let answer3 = answersC[5];
    let answer4 = answersD[5];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question7() {
    current = 7;
    let question1 = questions[6];
    let answer1 = answersA[6];
    let answer2 = answersB[6];
    let answer3 = answersC[6];
    let answer4 = answersD[6];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question8() {
    current = 8;
    let question1 = questions[7];
    let answer1 = answersA[7];
    let answer2 = answersB[7];
    let answer3 = answersC[7];
    let answer4 = answersD[7];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question9() {
    current = 9;
    let question1 = questions[8];
    let answer1 = answersA[8];
    let answer2 = answersB[8];
    let answer3 = answersC[8];
    let answer4 = answersD[8];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question10() {
    current = 10;
    let question1 = questions[9];
    let answer1 = answersA[9];
    let answer2 = answersB[9];
    let answer3 = answersC[9];
    let answer4 = answersD[9];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question11() {
    current = 11;
    let question1 = questions[10];
    let answer1 = answersA[10];
    let answer2 = answersB[10];
    let answer3 = answersC[10];
    let answer4 = answersD[10];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question12() {
    current = 12;
    let question1 = questions[11];
    let answer1 = answersA[11];
    let answer2 = answersB[11];
    let answer3 = answersC[11];
    let answer4 = answersD[11];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question13() {
    current = 13;
    let question1 = questions[12];
    let answer1 = answersA[12];
    let answer2 = answersB[12];
    let answer3 = answersC[12];
    let answer4 = answersD[12];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question14() {
    current = 14;
    let question1 = questions[13];
    let answer1 = answersA[13];
    let answer2 = answersB[13];
    let answer3 = answersC[13];
    let answer4 = answersD[13];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question15() {
    current = 15;
    let question1 = questions[14];
    let answer1 = answersA[14];
    let answer2 = answersB[14];
    let answer3 = answersC[14];
    let answer4 = answersD[14];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question16() {
    current = 16;
    let question1 = questions[15];
    let answer1 = answersA[15];
    let answer2 = answersB[15];
    let answer3 = answersC[15];
    let answer4 = answersD[15];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question17() {
    current = 17;
    let question1 = questions[16];
    let answer1 = answersA[16];
    let answer2 = answersB[16];
    let answer3 = answersC[16];
    let answer4 = answersD[16];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question18() {
    current = 18;
    let question1 = questions[17];
    let answer1 = answersA[17];
    let answer2 = answersB[17];
    let answer3 = answersC[17];
    let answer4 = answersD[17];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question19() {
    current = 19;
    let question1 = questions[18];
    let answer1 = answersA[18];
    let answer2 = answersB[18];
    let answer3 = answersC[18];
    let answer4 = answersD[18];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}

function question20() {
    current = 20;
    let question1 = questions[19];
    let answer1 = answersA[19];
    let answer2 = answersB[19];
    let answer3 = answersC[19];
    let answer4 = answersD[19];
    document.getElementById('numer').innerText = current;
    document.getElementById('question').innerHTML = question1;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
}