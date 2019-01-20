 
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
console.log(fillEdge(colors.green))
cub = {
    first_blue: fillEdge(colors.blue),
    second_orange:  fillEdge(colors.orange),
    third_green:  fillEdge(colors.green),
    fourth_red:  fillEdge(colors.red),
    fifth_white:  fillEdge(colors.white),
    sixth_yellow:  fillEdge(colors.yellow)

}

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
        'first_blue',
         'second_orange',
          'third_green',
           'fourth_red',
            'fifth_white', 'sixth_yellow'];
    edgeNames.forEach(function(name, index){
        console.log(name);
        console.log(index);
      
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          
          var sideX = 5 + 100 * index, sideY = 5;
          var rectangle = new Path2D();
          for (var x = 0; x < 3; x++){
            
            for (var y = 0; y<3; y++){
                rectangle.rect(sideX + x * 30, sideY + y * 30, 20, 20);
           
            }
          }
          ctx.stroke(rectangle);
        }
    })
}
 
function pressed(e)
 
{
 
    key = e.keyCode || e.which;
    console.log(key)
    
 
 
 
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
 