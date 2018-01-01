$(document).ready(function(){
  // declare var

    var input = [];
    var input_num = 0;
    var input_group = [];

  // declare functions
  function join(arg){
    if (arg === "cal"){
      input_num = input_group[0];
    } else {
      input_num = input.join('');
    }
  }

  function update(arg){
    if (arg === "cal"){
      join("cal");
      console.log("-input:" + input);
      console.log("num:" + input_num);
      console.log("input_group:" + input_group);
    } else {
      join();
      console.log("-----input:" + input);
      console.log("num:" + input_num);
      console.log("input_group:" + input_group);
    }
  }

  function clear(){
    input = [];
    input_num = 0;
    update();
  }

  function clear_all(){
    input = [];
    input_num = 0;
    input_group = [];
    update();
  }

  function calculate(){
      console.log(input_group);

      // declare var
      var result = input_group[0];
      var length = input_group.length;

      // remove first item
      input_group.splice(0, 1);

      // for loop to calculate

      input_group = [];
      input_group.push(result);
      update("cal");
  }

  function check(prop){
    if (input_group[input_group.length] == NaN) {
      console.log("error");
    } else {
      console.log("good");
      input_group.push(prop);
    }
  }

  // button.click

  $("button").click(function(){
    switch($(this).html()){
      case "1":
          input.push(1);
          update();
          break;
      case "2":
          input.push(2);
          update();
          break;
      case "3":
          input.push(3);
          update();
          break;
      case "4":
          input.push(4);
          update();
          break;
      case "5":
          input.push(5);
          update();
          break;
      case "6":
          input.push(6);
          update();
          break;
      case "7":
          input.push(7);
          update();
          break;
      case "8":
          input.push(8);
          update();
          break;
      case "9":
          input.push(9);
          update();
          break;
      case "0":
          input.push(9);
          update();
          break;
      case ".":
          if (input.length == 0){
            input.push(0);
            input.push(".");
            update();
          }
          else if (input.indexOf(".") == -1){
            input.push(".");
            update();
          } else {
            console.log("error");
          }
          break;
      case "X":
          join();
          input_group.push(input_num);
          check("*");
          clear();
          break;
      case "/":
          join();
          input_group.push(input_num);
          check("/");
          clear();
          break;
      case "-":
          join();
          input_group.push(input_num);
          check("-");
          clear();
          break;
      case "+":
          join();
          input_group.push(input_num);
          check("+");
          clear();
          break;
      case "C":
          clear();
          break;
      case "AC":
          clear_all();
          break;
      case "=":
          join();
          input_group.push(input_num);
          calculate();
          break;
      default:
          break;
      }
 });
});
