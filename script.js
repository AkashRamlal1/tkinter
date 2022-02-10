var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'klik op mij';
document.body.appendChild(btn);

// schijf hier tussen je code








btn.onclick = function(){
        
    if (document.body.style.backgroundColor == "black") {   
            
            btn.innerHTML = "light on";
            document.body.style.backgroundColor = "yellow";
            console.log("light is on");
            
          
            
            
        } 
    else {
        btn.innerHTML = "light off";
        document.body.style.backgroundColor = "black";
        console.log("light is off");
    }
         

};



// schijf hier tussen je code