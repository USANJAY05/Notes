var inp = document.getElementById("input");
var createbtn = document.getElementById("newBtn");



function newBtn(){
    if((document.getElementById("title").value).length>0|| (document.getElementById("content").value).length>0){
        document.getElementById("title").value=""
        document.getElementById("content").value=""
    }
    if(window.innerWidth>600){
        document.getElementById("input").style.display="block" 
        document.getElementById("right").style.display="block" 
        document.getElementById("right").style.width="100%" 
        document.getElementById("left").style.width="25%" 
        document.getElementById("newBtn").style.display="none" 
        document.getElementById("saveBtn").style.display="block"
    }
    else if(window.innerWidth<=600){
        document.getElementById("right").style.width="100%"
        document.getElementById("input").style.display="block" 
        document.getElementById("newBtn").style.display="none" 
        document.getElementById("saveBtn").style.display="block"
        document.getElementById("left").style.display="none"
    }

}
function saveBtn() {

    if((document.getElementById("title").value).length>0|| (document.getElementById("content").value).length>0){
        var section = document.createElement("section");
        var h2 = document.createElement("h2");
        var p = document.createElement("p");
    
        var title = document.getElementById("title").value;
        var content = document.getElementById("content").value;

        h2.textContent = title;
        p.textContent = content;
        var btn=document.createElement("button")
        btn.setAttribute("onclick","del(event)")
        btn.textContent="Complete"
        btn.setAttribute("class","del")
        
        section.appendChild(btn)
        section.appendChild(h2);
        section.appendChild(p);
    
        section.addEventListener("click", function(event) {
            leftClick(event, title);
        });
        if(window.innerWidth>600){
            document.getElementById("left").style.display="block"
        }
    
        document.querySelector(".left").append(section);
    
        inp.style.display = "none";
        document.getElementById("saveBtn").style.display="none";

        createbtn.style.display = "block";
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";

        if(window.innerWidth<600){
            document.getElementById("left").style.display="block"
            document.getElementById("left").style.width="100%"
            document.querySelector(".right").style.width="0px"


        }
        
    }
    else{
        alert("Enter any text")
    }

}

function leftClick(event, originalTitle) {
    
    createbtn.style.display = "block";
    inp.style.display = "block";
    document.getElementById("fullView").style.display="block"


    // Set the title to the original title

    document.getElementById("title").value = originalTitle;

    // Extract the content from the clicked section
    var content = event.currentTarget.querySelector("p").textContent;

    // Set the content to the extracted value
    document.getElementById("content").value = content;
    
    if(window.innerWidth<600){
        document.querySelector(".left").style.display="none"
        document.getElementById("back").style.display="block"
        document.getElementById("fullView").style.display="none"
        document.querySelector(".right").style.width="100%"

    }
    else{
        document.querySelector(".right").style.width="100%"
        document.querySelector(".left").style.width="25%"

    }

}
function fullView(){
    document.querySelector(".left").style.display="none"
    document.getElementById("right").style.width="100%" 
    document.getElementById("back").style.display="block"
    document.getElementById("fullView").style.display="none"

}
function back(){
    if(window.innerWidth<600){
        document.querySelector(".right").style.width="0px"
        document.querySelector(".left").style.width="100%" 

    }
    else{
        document.querySelector(".right").style.display="block"
        document.querySelector(".left").style.width="25%"

        document.getElementById("fullView").style.display="block"

    }
    document.querySelector(".left").style.display="block"

    document.querySelector(".right").style.display="block"
    document.getElementById("back").style.display="none"
}

function del(event){
    event.target.parentElement.remove()
}