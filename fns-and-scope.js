//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    if (name === "Tyler") {
      return true;
    } else {
      return false;
    }
  }

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
 var name = prompt("What's your name?");
  return name;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(){
    alert("Welcome, " + getName());
  }


//Next problem




//What is the difference between arguments and parameters?

//parameters are in the function (function hey(name){} name is parameter), arguments are the things like arays passed in to the function like hey(arr);



//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// undefined null NaN false 0 “” (empty string)
Boolean(undefined);



//Next Problem



//Create a function called myName that returns your name

  var myName = function(){
    return name;
  };



//Now save the function definition of myName into a new variable called newMyName

var newMyName = function(){
return myName;
};

//Now alert the result of invoking newMyName



alert(newMyName);



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    var f = function(){return "Brian";};
    return f;
  }

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
