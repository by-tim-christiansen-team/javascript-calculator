$(document).ready(function(){
  // declare var
  var inputStr = "";
  var currentInput = "";
  $(".button").click(function(){
    switch($(this).html()){
      case "1":
          inputStr += "1";
          currentInput += "1";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "2":
          inputStr += "2";
          currentInput += "2";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "3":
          inputStr += "3";
          currentInput += "3";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "4":
          inputStr += "4";
          currentInput += "4";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "5":
          inputStr += "5";
          currentInput += "5";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "6":
          inputStr += "6";
          currentInput += "6";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "7":
          inputStr += "7";
          currentInput += "7";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "8":
          inputStr += "8";
          currentInput += "8";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "9":
          inputStr += "9";
          currentInput += "9"
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case "0":
          inputStr += "0";
          currentInput += "0";
          $(".group_input").text(inputStr);
          $(".input").text(currentInput);
          break;
      case ".":
        if (currentInput.length == 0) {
          currentInput += "0.";
          inputStr += "0.";
        }
        else {
          inputStr += ".";
          currentInput += ".";
        }
        $(".group_input").text(inputStr);
        $(".input").text(currentInput);
        break;
      case "x":
        operatorPressed("*");
        break;
      case "%":
        operatorPressed("/");   
        break;
      case "-":
        operatorPressed("-");
        break;
      case "+":
        operatorPressed("+");
        break;
      case "C":
        inputStr = "";
        currentInput = "";
        $(".input").add($(".group_input")).text("0");
        break;
      case "AC":
          inputStr = "";
          $(".input").add($(".group_input")).text("0");
          break;
      case "=":
          $(".input").text(eval(inputStr));
          inputStr = eval(inputStr);
          currentInput = "";
          break;
      default:
          break;
      }
 });
  $(".remove").click(function() {
    inputStr = inputStr.substring(0, inputStr.length - 1);
    $(".group_input").text(inputStr);
  });
  
  function operatorPressed(prop){
    if (inputStr.slice(-1) === "*" || inputStr.slice(-1) === "/" || inputStr.slice(-1) === "+" || inputStr.slice(-1) === "-") {
      inputStr = inputStr.replace(/.$/, prop);
    	$(".group_input").text(inputStr);
    }
    else {
      inputStr += prop;
      currentInput = "";
      $(".group_input").text(inputStr);
    }
  }
  
});
