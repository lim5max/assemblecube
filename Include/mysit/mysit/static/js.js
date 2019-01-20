 
window.onkeypress = pressed;

function fillEdge(color) {
    res = [];
    for(let i = 0; i < 3; ++i) {
        let toAdd = [];
        for(let j = 0; j < 3; ++j) {
            toAdd.push(color);
        }    
        res.push(toAdd);
    }
    return res;
}

colors= {blue: 1, orange: 2, green: 3, red: 4, white: 5, yellow: 6}

colorToStyle = {1 : '#2C6E96' , 2: '#ff7f1d', 3:  '#7ce544',4:  '#ff0808' , 5: '#fffbfb' ,6:  '#fff339'}

console.log(fillEdge(colors.green))
cub = {
    first_blue: fillEdge(colors.blue),
    second_orange:  fillEdge(colors.orange),
    third_green:  fillEdge(colors.green),
    fourth_red:  fillEdge(colors.red),
    fifth_white:  fillEdge(colors.white),
    sixth_yellow:  fillEdge(colors.yellow)

}
first   =       1
second  =       2
tird    =       3
fourth  =       4 
fifth   =       5
sixth   =       6
function draw(){

    const canvas = document.querySelector('canvas');
    const main_div = document.querySelector('.objects2d');
    // main_div.style.width = 500 + 'px';
    // main_div.style.width = 500 + 'px';
    // canvas.width = main_div.style.width;
    // canvas.height = main_div.style.height;
    canvas.width = 700;
    canvas.height = 700;
    console.log(main_div)
    var edgeNames = [
        ['first_blue', [5, 105], ['first']],
         ['second_orange', [105, 105],['second']],
          ['third_green', [205, 105],['tird']],
          ['fourth_red', [305, 105],['fourth']],
            ['fifth_white', [205, 5],['fifth']], 
            ['sixth_yellow' , [205, 205],['sixth']]
        ];
    edgeNames.forEach(function(edge ){
        name = edge[0];
        var sideX = edge[1][0];
        var sideY = edge[1][1];
        namepath  = edge[1][2] 
        console.log(name);
         
        
      
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          
           
          for (var x = 0; x < 3; x++){

            
            for (var y = 0; y<3; y++){
                
                console.log("mbbn")
                let color = cub[name][x][y];
                console.log("mccn" + color)
                let fillStylec = colorToStyle[color];  
                ctx.fillStyle = fillStylec;
                ctx.fillRect(sideX + x * 30, sideY + y * 30, 20, 20);
           
            }
          }
          
        }
    })
}
 
function pressed(e)
 
{
 
    key = e.keyCode || e.which;
    if (key == 1066)  {  //shift + ]
        switch(key){
            case 49:  
            case 50: 
            case 51: 
            case 52: 
            case 53: 
            case 54: 
        }
        if (key == 70){// shift+front

        }
        else if (key == 98){ //shift+back
    
        }
       
        else if  (key == 76) {//shift + LEFT 
    
        }
        else if (key == 82){// shift +right
            
        }
        else if (key == 85){// shift + up
            
        }
        else if (key == 68){ //shift + down
            
        }
        else if (key == 102){ //front
            
        }  
        else break;
    }
   
    
    
   
}
window.onload = function()

{

    draw()
    var only_forfirst = [
        { 'first': [ colors.blue, colors.blue, colors.blue]
        },
        { 'second': [colors.blue, colors.blue, colors.blue] },
        { 'third': [colors.blue, colors.blue, colors.blue] }
    ]
 
        
       
      
      
  
 
      
     
 
}
 