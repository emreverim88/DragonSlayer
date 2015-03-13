var slaying = true;
var totalDamage = 0;
var youHit = Math.floor((Math.random()*2));
//console.log(youHit);

var damageThisRound = Math.floor((Math.random()*5 + 1));
//console.log(damageThisRound);

while(slaying === true)

{
    if(youHit === 1){
        console.log("You hit the dragon");
        totalDamage += damageThisRound;
        slaying = false;
        if(totalDamage >= 4){
            console.log("You slew the dragon");
            slaying = false;
        }
        else if( totalDamage < 4){
            youHit = Math.floor((Math.random()*2));
            console.log("hitting again");
            slaying = true;
        }
    }
    else if (youHit === 0){
        console.log("Dragon defeated you");
        slaying = false;
    }
}