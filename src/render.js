Shell.addModule('Render',['Game','Mapper'], function(Game,Mapper){

	var conf = Game.getConf(),
	canvas,context,
	
	state = {
		
		start : function(){},
		run : function(ctx){
			
			var i, len,
			mapConfig = Mapper.getConfig(),zone,x,y,cellX,cellY;
			
			
			// clear canvas
			ctx.fillStyle = '#000000';
			ctx.fillRect(0,0,conf.width,conf.height);
			
			// draw the map
			ctx.fillStyle = '#ee9f00';
			ctx.fillRect(conf.mapX,conf.mapY,conf.mapWidth,conf.mapHeight);
			ctx.fillStyle = '#00ff00';
			ctx.strokeStyle = '#dd8f00';
			
			i=0; len = Mapper.getMap().length;
			while(i < len){
				
				cellX = i % mapConfig.tx,
				cellY = Math.floor(i / mapConfig.tx);
				
				zone = Mapper.getTile(cellX,cellY);
				
				x = cellX * mapConfig.size + conf.mapX;
				y = cellY * mapConfig.size + conf.mapY;
				
				ctx.strokeRect(x,y,mapConfig.size,mapConfig.size);
				
				if(zone.type === 'com'){
				    ctx.fillStyle = '#0000ff';    
					ctx.fillRect(x,y,mapConfig.size,mapConfig.size);
				
				}
				
				if(zone.type === 'res'){
				    ctx.fillStyle = '#ff0000';    
					ctx.fillRect(x,y,mapConfig.size,mapConfig.size);
				
				}
				
				if(zone.type === 'ind'){
				    ctx.fillStyle = '#ffff00';    
					ctx.fillRect(x,y,mapConfig.size,mapConfig.size);
				
				}
				
				if(zone.type === 'road'){
				    ctx.fillStyle = '#404040';    
					ctx.fillRect(x,y,mapConfig.size,mapConfig.size);
				
				}
				
				if(zone.selected){
					
					ctx.fillStyle = 'rgba(0,0,0,0.5)';    
					ctx.fillRect(x,y,mapConfig.size,mapConfig.size);
				
					
				}
				
				i++;
			}
			
			
			// draw the interface
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(conf.faceX,conf.faceY,conf.faceWidth,conf.faceHeight);
			
		}
		
	}
	
	return {
		
		appendTo : function(container){
			
			canvas =  document.createElement('canvas');
			context = canvas.getContext('2d');
			
			canvas.width = conf.width;
			canvas.height = conf.height;
			
			document.getElementById(container).appendChild(canvas);
			
			
		},
		
		drawState : function(current){
			
			state[current](context);
			
		},
		
		getCanvas : function(){
			
			return canvas;
			
		},
		
		getConfig : function(){
			
			return conf;
			
		}
		
		
	};
	
});
