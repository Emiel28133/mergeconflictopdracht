const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["after we thought all hope was lost","We saw a batman descending","under a night in winter."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

function student1Haiku()
{
    return ["Crunchy hazelnut","Creamy layers in delight","Kinder Bueno's treat."]
}

haikus = [
    basicHaiku()

]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}
function student2(){
    console.log("verkopen jullie hier ook watermeloen??", "meneer u mag hier niet fietsen")
    
}

console.log(student1Haiku, student2);
    

start()