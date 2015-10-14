
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

  var my_ul = $("<ul id='avengers'>");
  
function assemble(arr){
    for(var i = 0; i < arr.length; i++){
      var new_li = $("<li>");
      new_li.text(arr[i]);
      my_ul.append(new_li);
      new_li.addClass(arr[i].replace(' ',"-").toLowerCase());
    }
    $("body").append(my_ul);
}



var captainAm = ["Captain America"];
// assemble(avengers);
// $(".ant-man, .wasp").remove();
avengers.push(captainAm);

$("#moveAvenger").on("click", function(){
  $("#avengers").append($("#avengers li")[0]);
});

for (var i = 0; i < avengers.length; i++){
    setTimeout((function(j){
      return function(){
      var avenger = [];
      avenger.push(avengers[j]);
      assemble(avenger);
    }
    })(i), 1000*i)
  }

// for (var ii = 0; ii < 10; ii++){
//   setTimeout((function(j){
//     return function(){
//     console.log(j);
//     }
//   })(ii), 500*ii)
// }

var temp_text = "";
$("#avengers li").hover(function(){
  temp_text = $(this).text();
  $(this).text("");
}, function(){
  $(this).text(temp_text);
});