//MANEJO DE ERRORES

// let error = document.getElementById('error');

// equalBtn.addEventListener('click', (result) => {

//         if ( result === null || result === undefined ) {
//             error.innerHTML =
//                 "<i class='fas fa-exclamation-circle'></i>" +
//                 "Error";
//             error.firstChild.style.animation =
//                 "highlightNode .8s ease";
//             return;
//         };
// })

document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    const audio = document.querySelector("audio");

    function add(){
        return parseFloat(screen.split('+')[0]) + parseFloat(screen.split('+')[1]) 
    };
    function subtract(){
        return parseFloat(screen.split('-')[0]) - 
        parseFloat(screen.split('-')[1])
    };
    function multiply(){
        return parseFloat(screen.split('*')[0]) * 
        parseFloat(screen.split('*')[1])
    };
    function split(){
        return parseFloat(screen.split('/')[0]) / 
        parseFloat(screen.split('/')[1])
    };
    function playSound() {
        audio.play();
        setTimeout(() => {
            audio.pause();
        }, 100);
    };

    let screen = '0'
    document.getElementById('screen').value = screen;

    let operator  //save the operation clicked to know what's execute

    // Numbers Button
    document.getElementById('number1Btn').addEventListener('click', function() {
        playSound();
        screen = screen !== '0' ? screen.concat(1) : '1';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number2Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(2) : '2';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number3Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(3) : '3';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number4Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(4) : '4';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number5Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(5) : '5';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number6Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(6) : '6';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number7Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(7) : '7';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number8Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(8) : '8';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number9Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(9) : '9';
        document.getElementById('screen').value = screen;
    });
    document.getElementById('number0Btn').addEventListener('click', function() {
        screen = screen !== '0' ? screen.concat(0) : '0';
        document.getElementById('screen').value = screen;
    });
    // Coma Button
    document.getElementById('comaBtn').addEventListener('click', function() {
        screen = screen.concat('.');
        document.getElementById('screen').value = screen;
    });
    // Back Button
    document.getElementById('backBtn').addEventListener('click', function() {
        screen = screen.slice(0,screen.length-1);
        document.getElementById('screen').value = screen;
    });
    // AC Button
    document.getElementById('aceBtn').addEventListener('click', function() {
        screen = '0';
        operator = '';
        document.getElementById('screen').value = screen;
    });
    // Operator Button
    document.getElementById('/Btn').addEventListener('click', function() {
        operator = '/';
        screen = screen.concat('/');
        document.getElementById('screen').value = screen;
    });
    document.getElementById('porBtn').addEventListener('click', function() {
        operator = '*';
        screen = screen.concat('*');
        document.getElementById('screen').value = screen;
    });
    document.getElementById('menosBtn').addEventListener('click', function() {
        operator = '-';
        screen = screen.concat('-');
        document.getElementById('screen').value = screen;
    });
    document.getElementById('plusBtn').addEventListener('click', function() {
        operator = '+';
        screen = screen.concat('+');
        document.getElementById('screen').value = screen;
    });
    document.getElementById('percentageBtn').addEventListener('click', function() {
        operator = '%';
        screen = screen.concat('%');
        document.getElementById('screen').value = screen;
    });
    
    //Equal Button
    document.getElementById('equalBtn').addEventListener('click', function() {
        //depending on the operator executes the function
        switch (operator) {
            case '+':
                screen = add().toString();
            break;
            case '-':
                screen = subtract().toString();
            break;
            case '*':
                screen = multiply().toString();
            break;
            case '/':
                screen = split().toString();
            break;
            default:
                console.log('Lo lamentamos, por el momento no poder hacer eso');
        }
        document.getElementById('screen').value = screen;
        operator = '';
    });
})//cuando hago el remove?
//que pasa con el ingreso de valores mediante el input?
