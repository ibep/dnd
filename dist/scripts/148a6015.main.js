var x=0,y=0;interact("#dragme").draggable({onmove:function(a){x+=a.dx,y+=a.dy,a.target.style.webkitTransform=a.target.style.transform="translate("+x+"px, "+y+"px)"},onend:function(a){a.target.querySelector("p").textContent="moved a distance of "+(0|Math.sqrt(a.dx*a.dx+a.dy*a.dy))+"px"}}).inertia(!0).restrict({drag:"parent",endOnly:!0});