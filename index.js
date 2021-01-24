console.log('Im js and working');

//------------------------------------------------------------------
/*
변수 : let
상수 : const
*/

let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

//------------------------------------------------------------------
/*
boolian(yes or no) = true , false
string(문자열) = "내용물";
*/
/*
문자열 : c나 java와는 다르게 let 이나 const 이외에는 딱히 지정해줄것이 없으며, 다른 변수와 string으로 지정하는 변수와의 차이는 쌍따옴표를 다느냐 아니냐의 차이이다.
*/
const waht = "12323231";

const wat = true;


//------------------------------------------------------------------

/*
배열만드는 방법
방식 배열명 = [원소,원소,원소 ... ];

java 나 c 의 배열과 스펠링의 차이 말고는 없다.
*/
const dayOfWeek = ["월","화","수","목","금","토","일"];

//------------------------------------------------------------------

const ghdInfo = {
    name : "ghdwpaks",
    age : 18,
    sex : "male"
}

console.log(ghdInfo.name);
console.log(ghdInfo.age);
console.log(ghdInfo.sex);

ghdInfo.name = "홍제만";
console.log(ghdInfo.name);
console.log(ghdInfo.age);
console.log(ghdInfo.sex);

//------------------------------------------------------------------

const ghdInfo2 = {
    name : "ghdwpaks",
    age : 18,
    sex : "male",
    favgame : ["gta5","etf","l4d2"],
    favfood : [{name:"kimchi", tasty:true},{name:"pepsi", tasty:false}]
}
console.log("start info of ghd2");
console.log(ghdInfo2);
console.log(ghdInfo2.name);
console.log(ghdInfo2.age);
console.log(ghdInfo2.sex);
console.log(ghdInfo2.favgame[0]);
console.log(ghdInfo2.favgame[1]);
console.log(ghdInfo2.favgame[2]);

console.log(ghdInfo2.favfood[0]);
console.log(ghdInfo2.favfood[1]);

console.log(ghdInfo2.favfood[0].name);
console.log(ghdInfo2.favfood[0].tasty);
console.log(ghdInfo2.favfood[1].name);
console.log(ghdInfo2.favfood[1].tasty);

console.log("--------");
console.log(console);
console.log(console.log);


//------------------------------------------------------------------

function c(a) {
    console.log(a);
}
c("asdafsadfsd");

//------------------------------------------------------------------

function sayHello(name , age) {
    return `Hello ${name} you are ${age} years old`;
}
const greetghdwpaks = sayHello("홍제만", 18);

console.log(greetghdwpaks);

const calculator = {
    plus : function(a,b) {
        return (a + b);
    },
    substract : function (a,b) 
    {
        return a - b;
    }
}
console.log(calculator.plus(1 , 6));
console.log(calculator.substract(1 , 6));


