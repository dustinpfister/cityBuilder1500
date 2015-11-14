Shell.addModule('Main',['Render','Control','Mapper', 'Zone'], function(Render, Control, Mapper, Zone){
	
	var currentState = 'start',
	
	state = {
		
		start : function(){
			
			Mapper.setMap(
			    10,10,
				32, 
				function(){
				
				    return new Zone('unzoned');
				
				}
			);
			
			Mapper.setTile(1,1, new Zone('com'));
			Mapper.setTile(4,8, new Zone('res'));
			
			Render.appendTo('game_container');
			
			Control.attach();
			
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
		
		
	};
	
	
});