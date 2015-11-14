Shell.addModule('Render',['Mapper'], function(Mapper){

	var canvas,context,
	
	state = {
		
		start : function(){},
		run : function(ctx){
			
			ctx.fillStyle = '#ee9f00';
			ctx.fillRect(0,0,320,320);
			
			ctx.fillStyle = '#00ff00';
			ctx.strokeStyle = '#dd8f00';
			var i=0, len = Mapper.getMap().length,
			config = Mapper.getConfig(),zone,x,y;
			while(i < len){
				
				x = i % config.tx,
				y = Math.floor(i / config.tx);
				
				zone = Mapper.getTile(x,y);
				
				ctx.strokeRect(x*config.size,y*config.size,config.size,config.size);
				
				if(zone.type === 'com'){
				    ctx.fillStyle = '#0000ff';    
					ctx.fillRect(x*config.size,y*config.size,config.size,config.size);
				
				}
				
				if(zone.type === 'res'){
				    ctx.fillStyle = '#ff0000';    
					ctx.fillRect(x*config.size,y*config.size,config.size,config.size);
				
				}
				
				i++;
			}
			
			
		}
		
	}
	
	return {
		
		appendTo : function(container){
			
			canvas =  document.createElement('canvas');
			context = canvas.getContext('2d');
			
			canvas.width = 320;
			canvas.height = 320;
			
			context.fillStyle='#00ffff';
			context.fillRect(0,0,320,320);
			
			document.getElementById(container).appendChild(canvas);
			
			
		},
		
		drawState : function(current){
			
			state[current](context);
			
		},
		
		getCanvas : function(){
			
			return canvas;
			
		}
		
		
	};
	
});
