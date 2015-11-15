Shell.addModule('Main',['Render','Control','Game', 'Zone'], function(Render, Control, Game, Zone){
	
	var currentState = 'start',
	
	state = {
		
		start : function(){
			
			/*
			Mapper.setMap(
			    10,10,
				32, 
				function(){
				
				    return new Zone('unzoned');
				
				}
			);
			*/
			Game.newCity();
			
			//Mapper.setTile(1,1, new Zone('com'));
			//Mapper.setTile(4,8, new Zone('res'));
			
			Render.appendTo('game_container');
			
			Control.attach();
			
			Control.setMode('game');
			currentState = 'run';
		},
		
		run : function(){
			
			
		}
		
		
	},
	
	loop = function(){
		
		requestAnimationFrame(loop);
		
		state[currentState]();
		Render.drawState(currentState);
	};
	
	loop();
	
	return {
		
		getState : function(){
			
			return currentState;
			
		}
		
	};
	
	
});