# FryingEggs
A childrens game digitized and bereft of any fun

### Start game:  
npm run play [players]

example:  
   >$ npm run play Mike, Greg, John

this will start a game with the three players 'Mike', 'Greg' , and 'John'.

### The rules:
Each player start with 10 eggs in their basket. The objective is to get rid off all the eggs in the basket - 
either by placing on a plate, or in the frying pan.

If a player rolls 1-5, an egg can be placed on the corresponding plate if it is empty. If the plate is not empty, the egg is moved from the plate to the players' basket.

If a player rolls a 6, an egg is taken from the players' basket og moved onto the pan. The egg does not come back from the pan.

The first player to get rid of all eggs have won.
