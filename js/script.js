$( document ).ready(function() {
  var input = 0;
  var group_input = [];
  function ac(){
  };
  function c(){
  };
  function calculate(group){
    var result = 0;
    for (var i = 0; i < group.length(); i + 2){
      if (group[i] == 0){
        result = group[i];
      }
    }
  };
  $(button).click(function(){
    switch ($(this)){
      case 0:
        input.push(0);
        break;
      case 1:
        input.push(1);
        break;
      case 2:
        input.push(2);
        break;
      case 3:
        input.push(3);
        break;
      case 4:
        input.push(4);
        break;
      case 5:
        input.push(5);
        break;
      case 6:
        input.push(6);
        break;
      case 7:
        input.push(7);
        break;
      case 8:
        input.push(8);
        break;
      case 9:
        input.push(9);
        break;
      case ".":
        input.push(.);
        break;
      case *:
        input.push("*");
        break;
      case /:
        input.push("/");
        break;
      case -:
        input.push("-");
        break;
      case +:
        input.push("+");
        break;
      case =:
        input.push("=");
        break;
      case "AC":
        ac();
        break;
      case "C":
        c();
        break;
    }
  });
  return calculate(group_input);
});
