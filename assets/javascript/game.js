$(document).ready(function () {
var characterArray = [];

var gameStart = true;
var enemySelect = false;
var attackPhase = false;

var characters = [

	{
		name: "Mario",
		health: 100,
		attack: 10,
		imageUrl: "assets/images/mario.png",
		counterAttack: 10

},

	{
		name: "Luigi",
		health: 110,
		attack: 7,
		imageUrl: "assets/images/luigi.png",
		counterAttack: 15

},

	{
		name: "Peach",
		health: 80,
		attack: 12,
		imageUrl: "assets/images/peach.png",
		counterAttack: 12

},

	{
		name: "Bowser",
		health: 150,
		attack: 20,
		imageUrl: "assets/images/bowser.png",
		counterAttack: 5

},



]

	




for (var i = 0; i < characters.length; i++) 
 	
  {
    // skip loop if the property is from prototype
    

    characterArray.push();
    


    var charSelectScreenItem = $("<button>")
      .addClass("space char-example")
      .html("<h4>" + characters[i].name + "</h4>")
      .prepend('<img src=' + characters[i].imageUrl +' width="auto" height="125">')
      .data("chosen",  false)
      .append("<h5>HP = " + characters[i].health + "</h5>")
      .appendTo("#bluebox");
      
      console.log(characterArray);


    
}

$('.char-example').click(function(){
     $('.char-example').not(this).each(function(){
         $(this).slideUp();
     });
     $(this).slideDown();
})











});
