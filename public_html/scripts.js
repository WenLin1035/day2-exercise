/* 
 * @Author: Wenjuan Lin
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Calculator() {
    this.num1 = 'a';
    this.num2 = 'a';
    this.read = function(){
        do{
            num1 = parseInt(prompt("Enter first number:", ""));
        } while (isNaN(num1));
        do{
            num2 = parseInt(prompt("Enter second number:", ""));
        } while (isNaN(num2));
    };
    this.sum = function() {
        let n1 = document.createElement('p');
        n1.innerHTML = num1 + " + " + num2 + " = " + (num1 + num2);
        document.getElementById('cal').appendChild(n1);
        return num1 + num2;
    };
    this.mul = function() {
        let n1 = document.createElement('p');
        n1.innerHTML = num1 + " * " + num2 + " = " + (num1 * num2);
        document.getElementById('cal').appendChild(n1);
        return num1 * num2;
    };
};

function Startcalc() {
    let calc = new Calculator();
    calc.read();
    calc.sum();
    calc.mul();
}

function Hero (name, occupation) {
    this.name = name;
    this.occupation = occupation;
};

Hero.prototype.whoAreYou = function() {
    return this.name + " " + this.occupation;
};

function addhero(name,job){
    let hero = new Hero(name,job);
    console.log(hero.whoAreYou());
}