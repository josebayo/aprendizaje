/*
    Create an object (player), with property (strength) that initially has the value 1, 
    with a method (incrementStrength) that allows us to increase the player's strength by 1 
    and a method (queryStrength) that shows us a message with the strength of the player. player.
*/

var player = {
    strength: 1,
    incrementStrength: function() {
        this.strength += 1;
    },
    queryStrength: function() {
        console.log("You strength is: " + this.strength);
    }
}

player.queryStrength();
player.incrementStrength();
player.queryStrength();
