const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const dateError = document.querySelector("#date-error");
const moonError = document.querySelector("#moon-error");
const dozenError = document.querySelector("#dozen-error");
const dayError = document.querySelector("#day-error");
const monthError = document.querySelector("#month-error");
const yearError = document.querySelector("#year-error");
const emptyError = document.querySelector("#empty-error");

//day/date validation//
function validateDay(params) {
    const date = day.value;
    const D = 31
    if (date > D) {
        dateError.style.display = "block";
        document.getElementById("day-error").style.color = "red";
        document.getElementById("day").style.borderColor = "red";

    } else {
        dateError.style.display  = "none";
        document.getElementById("day-error").style.color = "black";
        document.getElementById("day").style.borderColor = "black";
    }
    
};

validateDay();


//month validation//
function validateMonth(params) {
    const Month = month.value;
    const M = 12;
    if (Month > M) {
        moonError.style.display = "block";
        document.getElementById("month-error").style.color = "red";
        document.getElementById("month").style.borderColor = "red";
    } else {
        moonError.style.display = "none";
        document.getElementById("month-error").style.color = "black";
        document.getElementById("month").style.borderColor = "black";
    }
    const dayValidation = document.querySelector("#day-validation");
    const dayError = document.querySelector("#day-error");
    const day = document.querySelector("#day");
    const monthError = document.querySelector("#month-error");
    const year = document.querySelector("#year");
    const yearError = document.querySelector("#year-error");
    if (Month == 4) {
        dayValidation.style.display = "block";
        document.getElementById("day-validation").style.color = "red";
        document.getElementById("day-error").style.color = "red";
        document.getElementById("day").style.borderColor = "red";
        document.getElementById("month-error").style.color = "red";
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("year-error").style.color = "red";
        document.getElementById("year").style.borderColor = "red";

    } else {
        document.getElementById("month-error").style.color = "black";
        document.getElementById("month").style.borderColor = "black";
        document.getElementById("year-error").style.color = "black";
        document.getElementById("year").style.borderColor = "black";
    }

}

validateMonth();


//April validation//
function aprilValidation(){
    const dayError = document.querySelector("#day-error");
    const day = document.querySelector("#day");
    const dayValidation = document.querySelector("#day-validation");
    const month = document.querySelector("#month");
    if (day.value == 31 && month.value == 4) {
        dayValidation.style.display = "block";
        document.getElementById("day-error").style.color = "red";
        document.getElementById("day").style.borderColor = "red";
        document.getElementById("day-validation").style.color = "red";
    } else {
        dayValidation.style.display = "none";
        document.getElementById("day-error").style.color = "black";
        document.getElementById("day").style.borderColor = "black";
    }
   
};

aprilValidation();

//year validation//
function validateYear(params) {
    let thisYear = new Date();
    let Year = thisYear.getFullYear();
    
    if (year.value > Year) {
        dozenError.style.display = "block";
        document.getElementById("year-error").style.color = "red";
        document.getElementById("year").style.borderColor = "red";
    } else {
        dozenError.style.display = "none";
        document.getElementById("year-error").style.color = "black";
        document.getElementById("year").style.borderColor = "black";
    };
}

validateYear();

// validation on clicking when the input is empty (date)//
const empty = document.querySelector("#arrow");
const day1 = document.querySelector("#day");
const dayError1 = document.querySelector("#day-error");
const emptyError1 = document.querySelector("#empty-error");

empty.addEventListener('click', function() {
  if (day1.value == "") {
    emptyError1.style.display = "block";
    document.getElementById("empty-error").style.color = "red";
    document.getElementById("day").style.borderColor = "red";
    document.getElementById("day-error").style.color = "red";
  } else {
    document.getElementById("day").style.borderColor = "black";
    document.getElementById("day-error").style.color = "black";
  }
});
day1.addEventListener("click", function(){
    const dayValidation = document.querySelector("#day-validation");
    emptyError1.style.display = "none";
    document.getElementById("day-error").style.color = "black";
    dayValidation.style.display = "none";

});


// empty(month)//
const empty1 = document.querySelector("#arrow");
const month1 = document.querySelector("#month");
const monthError1 = document.querySelector("#month-error");
const emptyError2 = document.querySelector("#empty-error1");
empty1.addEventListener("click", () =>{
    if (month1.value == "") {
        emptyError2.style.display = "block";
        document.getElementById("month-error").style.color = "red";
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("empty-error1").style.color = "red";
    } else {
        document.getElementById("month").style.borderColor = "black";
        document.getElementById("empty-error1").style.color = "black";
    }
});
month1.addEventListener("click", function(){
    const dayValidation = document.querySelector("#day-validation");
    emptyError2.style.display = "none";
    document.getElementById("month-error").style.color = "black";
    dayValidation.style.display = "none";
});

//empty (year)//
const empty2 = document.querySelector("#arrow");
const year1 = document.querySelector("#year");
const yearError1 = document.querySelector("#year-error");
const emptyError3 = document.querySelector("#empty-error2");
empty2.addEventListener("click", () =>{
    if (year1.value == "") {
        emptyError3.style.display = "block";
        document.getElementById("year-error").style.color = "red";
        document.getElementById("year").style.borderColor = "red";
        document.getElementById("empty-error2").style.color = "red";
    } else {
        document.getElementById("year").style.borderColor = "black";
        document.getElementById("empty-error2").style.color = "black";
    }
});
year1.addEventListener("click", function (){
    document.getElementById("year-error").style.color = "black";
    emptyError3.style.display = "none";
});

//current year/dates/months - user's input value = user's age.
//getting User's input//

function displayDate() {
    const go = document.querySelector("#arrow");
    const input = document.querySelector("#day"); //getting the id("day") from the html element and naming it as "input";
    const input1 = document.getElementById("day-result"); //grabbing the id("day-result") of the input 
    go.addEventListener("click", function(){
        var input = document.querySelector("input").value ; // getting the value enterered on the id("day") which is input.
        var input1 = document.querySelector("input").value;// getting the value entered on the ("day-result") id input.
        const day = document.querySelector("#day");
        document.getElementById("day-result").value = input1 //changing the value of input1 textfield.
        const date = day.value;
        const D = 31
       var userAgeday = (D) - (date);
       document.getElementById("day-result").value = userAgeday; //changing the value of the input1 textfield to userAgeDay;
        return (userAgeday);
    }) 
};

displayDate();

function displayMonth() {
    const go = document.querySelector("#arrow");
    const input2 = document.querySelector("#month");
    const input3 = document.getElementById("month-result");
    go.addEventListener("click", function(){
        var input2 = document.querySelector("input").value; //getting the  value input of the ("month") id.
        var input3 = document.querySelector("input").value;//getting the value input of the ("month-result")id.
        const month = document.querySelector("#month");
        document.getElementById("month-result").value = input2;//changing the valuue of input2 textfield.
        const Month = month.value;
        const M = 12;
        var userMonth = (M) - (Month);
        document.getElementById("month-result").value = userMonth;
        return (userMonth);
    });
};

displayMonth();

function displayYear() {
    const go = document.querySelector("#arrow");
    const input4 = document.querySelector("#year");
    const input5 = document.getElementById("#year-result");
    go.addEventListener("click",  () => { 
       var input4 = document.getElementById("input");
       var input5 = document.getElementById("input");
       const year = document.querySelector("#year");
       document.getElementById("year-result").value = input4;
       let thisYear = new Date();
       let Year = thisYear.getFullYear();
       console.log(Year);
       userYear = (Year) - (document.getElementById("year").value);
       document.getElementById("year-result").value = userYear;
       go.style.backgroundColor = "hsl(259, 100%, 65%)";
       return (userYear);
    });
};

displayYear();

