var LOAD = {
    OPTIC: function(){
        
        selector = function(type,txt){
			select = type;
            
            if(select == 1){
                console.log(txt);
            }
            
            if(select == 2){
                document.write(txt);
            }
            
            if(select == 3){
                document.write('<p>'+txt+'</p>');
            }
            
            if(select == 'help'){
                document.write('selector 1(console logs your input) selector 2(writes your input in browser) selector 3(creates a paragraph tag with your input)');
            }
        }
        
        heading = function(size,txt){
            document.write('<h'+size+'>'+txt+'</h'+size+'>');
        }
        
        br = function(){
            document.write('<br/>');
        }
    },
    ADDON: {
        BASICBUTTON: function(){
          Button = function(id,txt){
            this.id = id;
            this.txt = txt;
            
            this.create = function(){
                document.write('<button id='+this.id+'>'+this.txt+'</button>');
            }
        } 
        },
        SIZEBOT: function(){
        SizeBot = function(id){
            this.id = id;
            
            this.width = function(w){
                document.getElementById(this.id).style.width = w;
            }
            
            this.height = function(h){
                document.getElementById(this.id).style.width = h;
            }
       	}
        },
        GAMEKIT: function(){
            var Class = {
    create: {
        gameLoop: function(){
            var gameLoop = setInterval(draw, 1000/30);
        }
    }
};

var canvas;
var ctx;

Window = function(){
    document.write('<canvas id=canvas></canvas>');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    size = function(w,h){
        canvas.width = w;
        canvas.height = h;
    };
    
    bgColor = function(color){
        ctx.fillStyle = color;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    };
       
    rect = {
        bgColor: function(color){
        ctx.fillStyle = color;
        },
       	properties: function(x,y,w,h){
        ctx.fillRect(x,y,w,h);
        }
    };
    
    text = {
        color: function(color){
            ctx.fillStyle = color;
        },
        size: function(size){
          ctx.font = ''+size+'px Comic Sans MS';  
        },
        properties: function(text,x,y){
            ctx.fillText(text,x,y);
        }
    };
    
}
        }
    }
};