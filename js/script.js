$(document).ready(function(){
  // declare var
  var inputStr = "";
  var currentInput = "";
  var lastResult = "";
  $(".button").click(function(){
    switch($(this).html()){
      case "1":
          currentInput += "1";
          $(".input").text(currentInput);
          break;
      case "2":
          currentInput += "2";
          $(".input").text(currentInput);
          break;
      case "3":
          currentInput += "3";
          $(".input").text(currentInput);
          break;
      case "4":
          currentInput += "4";
          $(".input").text(currentInput);
          break;
      case "5":
          currentInput += "5";
          $(".input").text(currentInput);
          break;
      case "6":
          currentInput += "6";
          $(".input").text(currentInput);
          break;
      case "7":
          currentInput += "7";
          $(".input").text(currentInput);
          break;
      case "8":
          currentInput += "8";
          $(".input").text(currentInput);
          break;
      case "9":
          currentInput += "9"
          $(".input").text(currentInput);
          break;
      case "0":
          currentInput += "0";
          $(".input").text(currentInput);
          break;
      case ".":
        if (currentInput.length == 0) {
          currentInput += "0.";
        }
        else {
          currentInput += ".";
        }
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
        inputStr =- currentInput;
        currentInput = "";
        $(".input").text("0");
        $(".group_input").text(inputStr);
        break;
      case "AC":
          inputStr = "";
          currentInput = "";
          $(".input").add($(".group_input")).text("0");
          break;
      case "=":
          inputStr += currentInput;
          lastResult = eval(inputStr);
          $(".group_input").text(inputStr);
          $(".input").text(lastResult);
          inputStr = "";
          currentInput = "";
          break;
      default:
          break;
      }
 });
  $(".remove").click(function() {
    inputStr = inputStr.substring(0, inputStr.length - 1);
    $(".group_input").text(inputStr);
    currentInput = currentInput.substring(0, currentInput.length - 1);
    $(".input").text(currentInput);
    if ($(".group_input").html() == "") {
      $(".group_input").text("0");
    }
    if ($(".input").html() == "") {
      $(".input").text("0");
    }
  });
  
  function operatorPressed(prop){
    inputStr += currentInput;
    if (inputStr.slice(-1) === "*" || inputStr.slice(-1) === "/" || inputStr.slice(-1) === "+" || inputStr.slice(-1) === "-") {
      inputStr = inputStr.replace(/.$/, prop);
    }
    else {
      inputStr += prop;
    }
    currentInput = "";
    $(".group_input").text(inputStr);
    if ($(".input").html() == lastResult) {
      $(".input").text("0");
      inputStr = lastResult + prop;
      $(".group_input").text(inputStr);
    }
    $(".input").text("0");
  }
  
});
