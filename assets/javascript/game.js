
var characterArray = [];

var gameStart = true;
var enemySelect = false;
var attackPhase = false;
var winCondition = false;
var gameOver = false;

var counter = 1;

var fightersReady = false;


var myHealth = 0;
var myMaxHealth = 0;
var myBaseAttack = 0;
var myAttack = 0;
var myCounterAttack = 0;
var myImageUrl = "";
var myName = "";

var nextHealth = 100000;
var prevEnemyHealth = 100000;
var nextEnemyHealth = 100000;



var enemyMaxHealth = 100000;
var enemyHealth = 100000;

 var number = 0;
 var running = false;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);


var characters = [

	{
		name: "Mario",
		health: 100,
		attack: 10,
		imageUrl: "assets/images/mario.png",
		counterAttack: 10,
		chosen: false

},

	{
		name: "Luigi",
		health: 110,
		attack: 7,
		imageUrl: "assets/images/luigi.png",
		counterAttack: 12,
		chosen: false
},

	{
		name: "Peach",
		health: 80,
		attack: 12,
		imageUrl: "assets/images/peach.png",
		counterAttack: 15,
		chosen: false
},

	{
		name: "Bowser",
		health: 150,
		attack: 20,
		imageUrl: "assets/images/bowser.png",
		counterAttack: 5,
		chosen: false
},
		{
		name: "Toad",
		health: 50,
		attack: 10,
		imageUrl: "assets/images/toad.png",
		counterAttack: 50,
		chosen: false
},

{
		name: "King Boo",
		health: 150,
		attack: 6,
		imageUrl: "assets/images/kingboo.png",
		counterAttack: 20,
		chosen: false
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
      .data("name", characters[i].name)
      .append("<h5>HP = " + characters[i].health + "</h5>")
      .append("<h6>Base Attack = " + characters[i].attack + "</h6>")
      .appendTo("#bluebox");
      
      

   
}	




	//CHARACTER SELECT

	$('.char-example').on("click", function(){
				if (gameStart) {



	


    			run();

				chosenChar = $(this).data('name');
				gameStart = false;
				enemySelect = true;
				$(this).removeClass('space').addClass('selection');
				
				for (var i = 0; i < characters.length; i++) 
 	
  					{

						if (characters[i].name != chosenChar) {

									
									
									var enemySelectScreenItem = $("<button>")
									.addClass("enemy1")
									.addClass("space")
									.addClass("test")
      								.html("<h4>" + characters[i].name + "</h4>")
      								.prepend('<img src=' + characters[i].imageUrl +' width="auto" height="125">')
      								.data("chosen",  false)
      								.data("name", characters[i].name)
      								.append("<h5>HP = " + characters[i].health + "</h5>")
      								.append("<h6>Counter = " + characters[i].counterAttack + "</h6>")
      								.appendTo("#redbox");

      								

							
												
						}
							if (characters[i].name === chosenChar) {

								myName = characters[i].name;
								myImageUrl = characters[i].imageUrl;
								myHealth = characters[i].health;
      							myAttack = characters[i].attack;
      							myBaseAttack = characters[i].attack;
      							myCounterAttack = characters[i].counterAttack;

      							myMaxHealth = characters[i].health;
									

							}




					}
						//ENEMY SELECT

						$(".enemy1").on("click", function() {
							if (enemySelect) {
									chosenEnemy = $(this).data('name');
									
									

									for (var i = 0; i < characters.length; i++) {
													

									if (characters[i].name === chosenEnemy) {

										enemyMaxHealth = characters[i].health;
										
									
									if (!fightersReady)	{

									if (!gameOver)	{

									
								}	


									yourCharacter = $("<div id='clickable'>")
									.html("<h4>" + myName + "</h4>")
      								.prepend('<img src=' + myImageUrl +' width="auto" height="125">')
      								.data("chosen",  true)
      								.removeClass("space")
      								.addClass("selection")
      								.data("name", myName)
      								.append("<h5 id ='myHealthHolder'>HP = " + myHealth + "</h5>")
      								.append('  <progress id="health" value="  '+   myHealth   +'    " max="   '+ myMaxHealth + '    "></progress>')
      								.append("<h6 id = 'myAttackHolder'>Attack Power = " + myAttack + "</h6>")
      								.append("<h3>Player</h3>")
      								.appendTo("#blackbox");

      								health.value = myMaxHealth;

      								var vsHolder = $("<div>")
      								.html("<h2>" + "VERSUS" + "</h2>")
      								.addClass("vsIcon")
      								.appendTo("#blackbox");

      							}

      								
									

									var selectedEnemy = $("<div>")
									.html("<h4>" + characters[i].name + "</h4>")
      								.prepend('<img src=' + characters[i].imageUrl +' width="auto" height="125">')
      								.data("chosen",  false)
      								.removeClass("space")
      								.addClass("yourOpponent")
      								.data("name", characters[i].name)
      								.append("<h5 class = 'no"+ i +" '  id ='enemyHealthHolder'  >HP = " + characters[i].health + "</h5>")
      								.append('  <progress class="EHB" id="enemyHealthBar'+ i +'"  value="  '+   characters[i].health  +'    " max="   '+ enemyMaxHealth + '    "></progress>')
      								.append("<h6>Counter = " + characters[i].counterAttack + "</h6>")
      								.append("<button type='button' class='btn btn-success number" + i + " ' id='attackButton'>Attack</button>")
      								.appendTo("#blackbox");

      								var enemyHealthBar = document.getElementById("enemyHealthBar" + i);
														enemyHealthBar.max = enemyMaxHealth;
														enemyHealthBar.value = characters[i].health;
      								

      								$("#fightHold").html("FIGHT!!");

      									$("#blackbox").css("display", "block");	
												$(this).slideUp();
												enemySelect = false;
												attackPhase = true;
												fightersReady = true;

												enemyHealth = characters[i].health;
												nextHealth = myHealth - characters[i].counterAttack;
														console.log("Enemy health is " + characters[i].health);
														console.log("My health is " + myHealth);
														console.log("My next health will be " + nextHealth);
												
												// ATTACK PHASE 1
												// you might be able to reference things outside of functions with their 
												// global variable tags...
												

												$('.number' + i).on("click", function(){
													

												if (nextHealth < 1 && enemyHealth > 0 ){
													
													gameOver = true; };

												
												
											

			
												if (attackPhase)	{
												for (var i = 0; i < characters.length; i++) {

												if (characters[i].name === chosenEnemy){

														nextEnemyHealth = characters[i].health - myAttack;
														characters[i].health = characters[i].health - myAttack;
														
														prevEnemyHealth = nextEnemyHealth + myAttack + myAttack;

														myHealth = myHealth - characters[i].counterAttack;
														nextHealth = myHealth - characters[i].counterAttack;
														

														myAttack = myAttack + myBaseAttack;

														console.log("Enemy health is " + characters[i].health);
														console.log("My health is " + myHealth);
														console.log("My next health will be " + nextHealth);




														if (counter === characters.length - 1 && nextEnemyHealth < 1) {

													winCondition = true;
												}
														

														if (nextEnemyHealth < 1){

														$(selectedEnemy).slideUp();
														attackPhase = false;
														enemySelect = true;
														$("#fightHold").html("You defeated " + chosenEnemy+ "! Select your next opponent!");
														counter ++;
																			

															}	

														

														

														if (gameOver) {myHealth = 0;
														}

															
														//jQuery to update values visually

														
														$(".no" + i).html("<h5 class = 'no"+ i +" '  id ='enemyHealthHolder'  >HP = " + characters[i].health + "</h5>");

														$("#myHealthHolder").html("<h5 id ='myHealthHolder'>HP = " 
															+ myHealth + "</h5>");

														$("#myAttackHolder").html("<h6 id = 'myAttackHolder'>Attack Power = " 
															+ myAttack + "</h6>");

														

														var health = document.getElementById("health");
														health.max = myMaxHealth;
														health.value = myHealth; 
														
														var enemyHealthBar = document.getElementById("enemyHealthBar" + i);
														enemyHealthBar.max = enemyMaxHealth;
														enemyHealthBar.value = characters[i].health;

														


														$("#enemyHealthBar" + i).html('  <progress class="EHB" id="enemyHealthBar'+ i +'"  value="  '+   characters[i].health  +'    " max="   '+ enemyMaxHealth + '    "></progress>')
														


										if (gameOver) {attackPhase = false; enemySelect = false;
												yourCharacter.addClass("imageWrapper");
												yourCharacter.append('<img class="overlayImage" src="assets/images/x.png" width="auto" height="125">')
												$("#fightHold").html('<h1 id="gameOver" >Game Over!</h1>')

												

												setTimeout(function () {
    												window.location.reload(1);
														}, 3000);
												

														stop();
														return;

														}

										if (winCondition) {attackPhase = false;
											enemySelect = false;
											
											$("#fightHold").html('<h1 id="gameOverGood" >You Won! All Opponents Defeated!</h1>');

														stop();
														$("#stopwatch").html("<h1>Time: " + (number / 100) + "</h2>")
														.addClass("winTime");
													}

															
															return;

												}
												}
												}
												});
												
												
												}

												}
												}

												});
							



     			
     			$('.char-example').not(this).each(function(){


     				 $(this).slideUp();
     				 	
     				 	
     						});
     				
     				
     				
     	}


     	
				

					
					
				
			


	});

function run() {
      if (!running ){
      intervalId = setInterval(increment, 10); }
      running = true;
    }

    //  The decrement function.
    function increment() {

      //  Decrease number by one.
      number = number + 1;

      //  Show the number in the #show-number tag.
      $("#stopwatch").html("<h2>Time: " + (number / 100) + "</h2>");


      //  Once number hits zero...
      
    }

    function stop() {

      if (running) {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
      running = false;

    }





