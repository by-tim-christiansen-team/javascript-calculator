$(document).ready(function(){
  // declare var
  var inputStr = "";
  var currentInput = "";
  var lastResult = "";
  $(".button").click(function(){
    switch($(this).html()){
      case "1":
          currentInput += "1";
          update(".input");
          break;
      case "2":
          currentInput += "2";
          update(".input");
          break;
      case "3":
          currentInput += "3";
          update(".input");
          break;
      case "4":
          currentInput += "4";
          update(".input");
          break;
      case "5":
          currentInput += "5";
          update(".input");
          break;
      case "6":
          currentInput += "6";
          update(".input");
          break;
      case "7":
          currentInput += "7";
          update(".input");
          break;
      case "8":
          currentInput += "8";
          update(".input");
          break;
      case "9":
          currentInput += "9"
          update(".input");
          break;
      case "0":
          currentInput += "0";
          update(".input");
          break;
      case ".":
        if (currentInput.length == 0) {
          currentInput += "0.";
        }
        else {
          currentInput += ".";
        }
        update(".input");
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
        currentInput = "";
        $(".input").text("0");
        update();
        if (inputStr.length == 0) {
          $(".group_input").text("0");
        }
        break;
      case "AC":
          inputStr = "";
          currentInput = "";
          $(".input").add($(".group_input")).text("0");
          break;
      case "=":
          inputStr += currentInput;
          lastResult = eval(inputStr);
          if (inputStr === "") {
            $(".group_input").add($(".input")).text("0");
          }
          else {
            $(".group_input").text(inputStr);
            $(".input").text(lastResult);
          }
          inputStr = "";
          currentInput = "";
          break;
      default:
          break;
      }
 });
  $(".remove").click(function() {
    if ($(".input").html() !== "0") {
      currentInput = currentInput.substring(0, currentInput.length - 1);
      update(".input");
    }
    else {
      inputStr = inputStr.substring(0, inputStr.length - 1);
      update(".group_input");
    }
    
    
    if ($(".group_input").html() == "") {
      $(".group_input").text("0");
    }
    if ($(".input").html() == "") {
      $(".input").text("0");
    }
  });
  
 
  function update(field) {
    if (field === ".input") {
      $(".input").text(currentInput);
    }
    else {
      $(".group_input").text(inputStr);
    }
  }
  
  
  
  function operatorPressed(prop){
    inputStr += currentInput;
    if (inputStr.slice(-1) === "*" || inputStr.slice(-1) === "/" || inputStr.slice(-1) === "+" || inputStr.slice(-1) === "-") {
      inputStr = inputStr.replace(/.$/, prop);
    }
    else if (inputStr === "") {
      inputStr += "0";
      update(".group_input");
    }
    else {
      inputStr += prop;
    }
    currentInput = "";
    update(".group_input");
    if ($(".input").html() == lastResult) {
      $(".input").text("0");
      inputStr = lastResult + prop;
      update(".group_input");
    }
    $(".input").text("0");
  }
  
});
