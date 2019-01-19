window.onload = function(){
    var width = 500;
    var height = 500;
    var canvas = document.querySelector('.canvas3d');


    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var render = new THREE.WebGLRender({canvas: canvas});
    render.setClearColor(0x000000);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    var light = new.TREE.AmbientLight();
    camera.position.set(0,0, 1000);
    renderer.render(scene, camera)
}
window.onkeypress = pressed;
 
function pressed(e)
 
{
 
    key = e.keyCode || e.which;
    console.log(key)
    
 
 
 
}
 