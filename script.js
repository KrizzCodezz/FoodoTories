// statement()

// function statement(){
//     console.log("I love Javascript because it's fun!")
// }

// statement()

// var statement = function(){
//     console.log("If you get homeschooled, do you become sherlock?")
// }

// var a = "Hello";
// // console.log(b)


// function first() {
//     var b = "Hey";

//     second();

//     function second() {
//         var c = "Hi";

//         third();
//     }
// }

// function third() {
//     var d = "Coding";
//     console.log(b)
// }

// first()

// var person = {
//     firstName : "Helen",
//     lastName : "Smith",
//     bestFood : "Potatoes",
//     yearOfBirth : "2008",
//     ageCalc : function(){
//         var currentYear = new Date().getFullYear();
//         this.age = currentYear - this.yearOfBirth
//     }
// };

// person.ageCalc()
// console.log(person)

// var animal = function(name, furColor, gender, age, breed){

//     this.name = name
//     this.furColor = furColor
//     this.gender = gender
//     this.age = age
//     this.breed = breed
//     this.sentance = function(){
//         console.log("Hello your dog's name is " + name + " and is " + furColor + " in color, they are " + gender + " and are " + age + " years old. And they are an " + breed + ".")
//     }

// }

// var dog1 = new animal("Bella", "black, orange and white", "female", 1, "australian shepherd")

// dog1.sentance()

// var yearsOfBirth = [2012, 2017, 2011, 1980, 1983, 2020, 2015]

// function ageOperator (year) {

//     var currentYear = new Date().getFullYear()
//     return currentYear - year

// }

// function ageCalculator (arr, fn){
//     var ageResult = [];
//     for(var i = 0; i < yearsOfBirth.length; i++){
//         ageResult.push(fn(arr[i]))
//     }

//     return ageResult
// }

// var ages = ageCalculator(yearsOfBirth, ageOperator)

// function adultChecker (el){
//     if(el > 18){
//         return "Adult"
//     }else{
//         return "Under Age"
//     }
// }

// adultChecker()

// var status = ageCalculator(ages, adultChecker)
// console.log(status)

var searchBox = document.querySelector(".search-box");
var searchBtn = document.querySelector(".search-btn");
var searchImg = document.querySelector(".search-img");
var foodClass = document.querySelector(".food-class");
var foodClassInfo = document.querySelector(".food-class-info");
var container = document.querySelector(".container");
var container2 = document.querySelector(".container2");
var goBackBtn = document.querySelector(".go-back-btn");

searchBtn.addEventListener("click", searchClick);

function searchClick (e){
    e.preventDefault();
    if((searchBox.value.trim()).toLowerCase()=="carbohydrate"){
        container.classList.add("hide");
        container2.classList.remove("hide");
        goBackBtn.classList.remove("hide");
        foodClass.innerHTML = "Carbohydrate"
        foodClassInfo.innerHTML = "What are carbohydrates? Carbohydrates, or carbs, are sugar molecules. Along with proteins and fats, carbohydrates are one of three main nutrients found in foods and drinks. Your body breaks down carbohydrates into glucose. Glucose, or blood sugar, is the main source of energy for your body's cells, tissues, and organs.";
        document.querySelector(".search-img").src = "carbon.jpg"
    } else if((searchBox.value.trim()).toLowerCase()=="protein"){
        container.classList.add("hide")
        container2.classList.remove("hide")
        goBackBtn.classList.remove("hide");
        foodClass.innerHTML = "Protein";
        foodClassInfo.innerHTML = "Proteins are made up of building blocks called amino acids. There are about 20 different amino acids that link together in different combinations. Your body uses them to make new proteins, such as muscle and bone, and other compounds such as enzymes and hormones. It can also use them as an energy source.";
        document.querySelector(".search-img").src = "protein.jpg"
    } else if((searchBox.value.trim()).toLowerCase()=="fat"){
        container.classList.add("hide")
        container2.classList.remove("hide")
        goBackBtn.classList.remove("hide");
        foodClass.innerHTML = "Fats";
        foodClassInfo.innerHTML = "Fats are nutrients in food that the body uses to build cell membranes, nerve tissue (including the brain), and hormones. The body also uses fat as fuel. If fats eaten aren't burned as energy or used as building blocks, they're stored by the body in fat cells.";
        document.querySelector(".search-img").src = "fats.jpg"
    } else if((searchBox.value.trim()).toLowerCase()=="vitamin"){
        container.classList.add("hide")
        container2.classList.remove("hide")
        goBackBtn.classList.remove("hide");
        foodClass.innerHTML = "Vitamins";
        foodClassInfo.innerHTML = "Vitamins are substances that our bodies need to develop and function normally. They include vitamins A, C, D, E, and K, choline, and the B vitamins (thiamin, riboflavin, niacin, pantothenic acid, biotin, vitamin B6, vitamin B12, and folate/folic acid).";
        document.querySelector(".search-img").src = "vitamins.jpg"
    } else if((searchBox.value.trim()).toLowerCase()=="mineral"){
        container.classList.add("hide")
        container2.classList.remove("hide")
        goBackBtn.classList.remove("hide");
        foodClass.innerHTML = "Mineral";
        foodClassInfo.innerHTML = "Minerals are those elements on the earth and in foods that our bodies need to develop and function normally. Those essential for health include calcium, phosphorus, potassium, sodium, chloride, magnesium, iron, zinc, iodine, chromium, copper, fluoride, molybdenum, manganese, and selenium.";
        document.querySelector(".search-img").src = "minerals.jpg"
    } else if((searchBox.value.trim()).toLowerCase()=="water"){
        container.classList.add("hide")
        container2.classList.remove("hide")
        goBackBtn.classList.remove("hide");
        foodClass.innerHTML = "Water";
        foodClassInfo.innerHTML = "Water is a clear liquid that has no color, taste, or smell, that falls from clouds as rain, that forms streams, lakes, and seas, and that is used for drinking, washing, etc.";
        document.querySelector(".search-img").src = "water.jpg"
    } else{
        var searchLabel = document.querySelector(".search-label")
        searchLabel.innerHTML = "Sorry, please choose the correct food class. You can check the list above and you can also check your spelling"
    };
};



goBackBtn.addEventListener("click", goBack);

function goBack (e){
    e.preventDefault();
    container.classList.remove("hide");
    container2.classList.add("hide");
    goBackBtn.classList.add("hide")
}

