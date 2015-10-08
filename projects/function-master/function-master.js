function objectValues(obj){
    var keys = Object.keys(obj);
    var vals = [];
    for(var i = 0; i < keys.length; i++){
        vals.push(obj[keys[i]]);
    };
    return vals;
}

function keysToString(obj){
    var keys = Object.keys(obj);
    var str = keys.join(" ");
    return str;
}

function valuesToString(obj){
    var keys = Object.keys(obj), vals = [], str = "";
    for(var i = 0; i < keys.length; i++){
        var ty = obj[keys[i]];
        if (typeof ty === "string"){
            vals.push(obj[keys[i]]);
        }
    };
    return str = vals.join(" ");
}

function arrayOrObject(arg){
    if(typeof arg === "object" && Array.isArray(arg) === true){
        return 'array';
    } else if (typeof arg === "object"){
        return 'object';
    }
}

var capitalizeWord = function (str){
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if(i < 1){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

function capitalizeAllWords(str){
    var newStr = ""
    var arr = str.split(" ");
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr[i] = capitalizeWord(arr[i]);
    };
    newStr += newArr.join(" ");
    return newStr;
}

function welcomeMessage(obj){
    var name = capitalizeWord(obj.name);
    return "Welcome " + name + "!";
}

function profileInfo(obj){
    var name = capitalizeWord(obj.name);
    var species = capitalizeWord(obj.species);
    return name + " is a " + species;
}

function maybeNoises(obj){
    if(obj.noises !== undefined && obj.noises != 0){
        return obj.noises.join(" ");
    } else return "there are no noises";
}

function hasWord (strOfWords, word){
    if(strOfWords.search(word) <= -1){
        return false;
    } else {
        return true;
    }
}

function addFriend(name, obj){
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj){
    if(obj.friends){
        for(var i = 0; i < obj.friends.length; i++){
            if(name === obj.friends[i]){
            return true;
            }
        }
    }
    return false;
}

function nonFriends(name, people){
    var noNewFriends = [];
    for (var i = 0; i < people.length; i++){
        if(!isFriend(name, people[i]) && name !== people[i].name){
        noNewFriends.push(people[i].name);
        }   
    }
    return noNewFriends;
}


function updateObject(data, key, value){
    data[key] = value;
    return data;
}

// function removeProperties(obj, arr){
//     for(var i = 0; i < arr.length; i++){
//         if(obj.hasOwnProperty(arr[i])){
//             delete obj[arr[i]];
//         }
//     }
//     return obj;   
// }

function removeProperties(obj, bad_keys){
    var keys = Object.keys(obj);
    var new_obj = {};
    for (var i = 0; i < keys.length; i++){
        if(bad_keys.indexOf(keys[i]) === -1){
            new_obj[keys[i]] = obj[keys[i]];
        }
    }
    return new_obj;
}

// function dedup(arr){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i + 1]){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

function dedup(array){
   var new_array = [];
   for(var i =0; i < array.length; i++){
       if(new_array.indexOf(array[i]) === -1){
           new_array.push(array[i]);
       }
   }
   return new_array;
}