var mouse_event="empty";

document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour=document.getElementById("Colour").value;
radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
mouse_event="mouseDown"

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;

mouse_event="mousedown";
}



canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseup(e){
    mouse_event="mouseup";
    mouse_event="mouseleave";
}





canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_pos_x=e.clientX-canvas.offsetLeft;
    current_pos_y=e.clientY-canvas.offsetTop;
    mouse_event="mouseleave";


    if(mouse_event=="my_mousedown");
    console.log("Current position of x and y cordinates =");
    console.log("x = "+ Current_position_of_mouse_x, +" y = " current_position_of_mouse_y,);

    ctx.beginPath();
    ctx.stroke.Stye = color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}

    
}