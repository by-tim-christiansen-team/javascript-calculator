$(document).ready(function(){
  // declare var
  var inputStr = "";
  $(".button").click(function(){
    switch($(this).html()){
      case "1":
          inputStr += "1";
          $(".group_input").text(inputStr);
          break;
      case "2":
          inputStr += "2";
          $(".group_input").text(inputStr);
          break;
      case "3":
          inputStr += "3";
          $(".group_input").text(inputStr);
          break;
      case "4":
          inputStr += "4";
          $(".group_input").text(inputStr);
          break;
      case "5":
          inputStr += "5";
          $(".group_input").text(inputStr);
          break;
      case "6":
          inputStr += "6";
          $(".group_input").text(inputStr);
          break;
      case "7":
          inputStr += "7";
          $(".group_input").text(inputStr);
          break;
      case "8":
          inputStr += "8";
          $(".group_input").text(inputStr);
          break;
      case "9":
          inputStr += "9";
          $(".group_input").text(inputStr);
          break;
      case "0":
          inputStr += "0";
          $(".group_input").text(inputStr);
          break;
      case ".":
        inputStr += ".";
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
        $(".input").add($(".group_input")).text("0");
        break;
      case "AC":
          inputStr = "";
          $(".input").add($(".group_input")).text("0");
          break;
      case "=":
          $(".input").text(eval(inputStr));
          inputStr = eval(inputStr);
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
    if (inputStr[inputStr.length] === "*" || inputStr[inputStr.length] == "/" || inputStr[inputStr.length] == "+" || inputStr[inputStr.length] == "-") {
      inputStr = inputStr.substring(0, (inputStr.length - 1));
      inputStr += prop;
    	$(".group_input").text(inputStr);
    }
    else {
      inputStr += prop;
      $(".group_input").text(inputStr);
    }
  }
  
});
