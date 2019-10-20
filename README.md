# FryingEggs
A childrens game digitized and bereft of any fun

###Start game:  
npm run play [players]

example:  
   >$ npm run play mike, greg, john

this will start a game with the three players 'mike', 'gregers' , and 'john'.

###The rules:
Each player start with 10 eggs in their basket. The objective is to get rid off all the eggs in the basket - 
either by placing on a plate, or in the frying pan.

If a player rolls 1-5 an egg can be placed on the corresponding plate if it is empty. If the plate is not empty, the eggs is move from the plate to the players basket.

If a player rolls 6 an egg is taken from the players' basket og moved onto the pan. The egg does not come back from the pan.

The first player to get rid of all eggs have won.
