
var animal = {};
animal.species = "Canis lupus familiaris - Beagle";
animal["name"] = "Porthos";
animal.noises = [];
// console.log(animal);


var noises =[];
noises[0] = "arf-arf";
noises.push("woof", "bark", "nom", "whine", "growl", "bow-wow-wow yipee-yo, yipee-yee");
noises.unshift("grrr");

noises[noises.length] = "S-N-DoubleO-P-D-O-DoubleJaZEEE";
// console.log(noises.length);
// console.log(noises[noises.length-1]);
// console.log(noises);

animal.noises = noises;
animal.noises.push("fart");

// console.log(animal);

var animals = [];
animals.push(animal);

var duck = {
    species: 'Anas platyrhynchos', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

var shark = {
    species: "Carcharodon carcharias",
    name: 'Reggae Shark',
    noises: ["bloop, bloop", "chop, chop", "I want ganja", "420"]
};

var dolphin = {
    species: "Orcinus orca",
    name: "Willy",
    noises: ["shrek", "click click", "I want to be free", "Hold me like the river jordan"]
};

animals.push(shark, dolphin);

// console.log(animals.length);

var friends = [];
//chose an array because it doesn't seem as if we will need to set specific friends for each animal.

var ranFren = function(animalsArray){
    var i = Math.floor(animalsArray.length * Math.random());
    // console.log("i:" + i);
    return animalsArray[i];
};

friends.push(ranFren(animals).name);
// console.log("friends" + friends);
// console.log(friends[friends.length-1]);
duck.friends = friends;

// var search = function(takesArray, takesElement){
//     for(var key in takesArray){
//         if(takesArray.hasOwnProperty(key) && takesArray[key] === takesElement){
            
//         } else {
//             return null;
//         }
//     }
// }



var search = function(animalsArray, animalName){
    for (var i = 0; i < animalsArray.length; i++){
        if(animalsArray[i].name == animalName){
            return animalsArray[i];
        }
    }
    return null;
};

console.log(search(animals, "Willy"));