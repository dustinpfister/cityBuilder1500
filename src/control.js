Shell.addModule('Control',['Render','Mapper'], function(Render,Mapper){

    


    return {
		
        attach : function(){
			
			var canvas = Render.getCanvas();
	
	        canvas.addEventListener('mousedown', function(e){
		
		        var box = this.getBoundingClientRect(),
				x = e.clientX - box.left,
				y = e.clientY - box.top;
		
		        e.preventDefault();
				
				Mapper.click(x,y);
				
		
	        });
			
			
		}	
	
	};
	
});
