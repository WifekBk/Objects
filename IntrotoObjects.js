//Basic Requirements
//1
var x = {
    firstName: 'Yan',
    lastName: 'Fan'
}
var y = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
var puppy = {
    animal: 'dog',
    noise: 'bark',
    age: 3,
    type: 'Golden Retriever',
    color: 'Yellow',
}

//2
var user = {
    firstName: 'Wifek',
    lastName: 'BenKhoud',
    age: 29,
    homeTown: 'h-life',
}

//3
user.favoriteFood = {
    bestOne: 'pizza',
    secOne: 'street food',
}

user.favoriteFood.secOne = 'tagliatelle'

//4
user = {
    singleName:{
        first:'wifek',
        middle: 'ettaieb',
        last: 'benkhoud',
    }
    
}

//5
function emptyObject(){  
    var x={
        
    }
      return x
  }  

  //6
  function addProperty(object, key) {   
 
    return object[key]= true
 }  

 //7
 function deleteProperty(object, key){
    delete object[key];
    return object;
}

//8
function addObjectProperty(object1, key, object2){
    object1[key]= object2;
    return object1
}

//9
function addFullNameProperty(object){
    
    object.fullName = object['firstName'].concat(' ', object['lastName'])

}

//10
function addArrayProp(object, key, array){
    object[key]= array;
}

  