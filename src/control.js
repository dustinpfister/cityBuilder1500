Shell.addModule('Control',['api','Render','Game'], function(api,Render,Game){

    var conf = Game.getConf(),
	
	controlMode = 'menu',
	
	modes = {
		
		// Alert! menu control mode is not yet used.
		menu : {
			
			actionDown : function(e,x,y){
			
			
			    console.log('control mode: ' + controlMode);
			
			},
			
			actionMove : function(e,x,y){
			
			
			    console.log('control mode: ' + controlMode);
			
			},
			
			actionUp : function(e,x,y){
			
			
			    console.log('control mode: ' + controlMode);
			
			}
			
			
		},
		
		
		game : {
			
			actionDown : function(e,x,y){
		
		        var cellX, cellY, index;
		
		        // clicking the map?
		        if(api.boundingBox(x,y,1,1,conf.mapX,conf.mapY,conf.mapCellWidth * conf.mapCellSize, conf.mapCellHeight * conf.mapCellSize)){
                    
					Game.actionDown(x-conf.mapX,y-conf.mapY);		
				
				}
				
				// clicking the interface?
				if(api.boundingBox(x,y,1,1,conf.faceX,conf.faceY,conf.faceWidth, conf.faceHeight)){
                    
					cellX = Math.floor((x - conf.faceX) / 32);
					cellY = Math.floor((y - conf.faceY) / 32);
					index = cellY * 3 + cellX;
					
					console.log( index );
					
					conf.buildIndex = index;
					
					
				}
				
			},
			
			actionMove : function(e,x,y){
			    
                Game.actionMove(x-conf.mapX,y-conf.mapY);
				
			},
			
			actionUp : function(e,x,y){
			
                Game.actionUp(x-conf.mapX,y-conf.mapY);
				
			}
			
			
		}
		
	},
	
	getMousePos = function(e){
		
		var obj = {};
		
		e.preventDefault();
		
		obj.box = e.target.getBoundingClientRect();
		obj.x = e.clientX - obj.box.left;
		obj.y = e.clientY - obj.box.top;
		
		return obj;
	},
	
	onMouseDown = function(e){
		
		var pos = getMousePos(e);
		
		
		modes[controlMode].actionDown(e,pos.x,pos.y);
		
	},
	
	onMouseMove = function(e){
		
		var pos = getMousePos(e);
		
		modes[controlMode].actionMove(e,pos.x,pos.y);
		
		
	},
	
	onMouseUp = function(e){
		
		var pos = getMousePos(e);
		
		modes[controlMode].actionUp(e,pos.x,pos.y);
	};


    return {
		
        attach : function(){
			
			var canvas = Render.getCanvas();
	
	        canvas.addEventListener('mousedown', onMouseDown);
			canvas.addEventListener('mousemove', onMouseMove);
			canvas.addEventListener('mouseup', onMouseUp);
	
			
		},
		
		setMode : function(mode){
			
			controlMode = mode;
			
		}
	
	};
	
});
