$(function(){
    if(window.animals){
        var animals = window.animals;
        for(var i =0, len = animals.length; i < len; i++){
            var mu = '<div class=animal>' +
                  '<h2>' + animals[i].name + '</h2>' +
                  '<h3><b>Species:</b> ' + animals[i].species + "</h3>" +
                  '<h3><b>Friends:</b></h3>' +
                  '<ul>';
            if(animals[i].friends){  
                for(var j = 0; j < animals[i].friends.length; j++){
                    mu += "<li>"+animals[i].friends[j]+"</li>"
                }
            }
            mu += "</ul></div>"
            $("body").append(mu)
        }
    }
})
