//declare variables
var sum,
	difference,
	product,
	quotient,
	rounded,
  num1,
  num2;


// when someone clicks on the compute, get number 1 input abd get number 2 input

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$("#mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
    num1 = parseFloat($("#number1").val()); //store the number of input into num1
    num2 = parseFloat($("#number2").val()); //store the number of input into num2
    console.log("The number 1 is :", num1, "The number 2 is:",  num2);

    //call runMath function
    runMath();

    //call the showIt function
    showIt();

    }); // closes mathIt
    });//closes document ready

//function that adds, subtracts, multiplies and divides

function runMath(){
  sum = num1 + num2; //get sum
  difference = num2 - num1; // get difference
  product = num1 * num2; // get product
  quotient = num1 / num2; //get division

  // console.log("The sum is", sum);
  //  console.log("The difference is", difference);
  // console.log("The product is", product);
  // console.log("The quotient is", quotient);
};

//function that will show the reults HTML

function showIt(){
  $(".first-number").text(num1); // plugs number 1 in text
  $(".second-number").text(num2) // plugs number 2 in text
  $("#show-sum").text(sum); // plugs sum into text
  $("#show-difference").text(difference); // plugs difference into text
  $("#show-product").text(product); // plugs product into text
	$("#show-quotient").text(quotient); // plugs quotient into text
  $('#final-results').addClass('results-show'); //shows the hidden class
};
