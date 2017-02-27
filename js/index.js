$(function(){
    var before = document.querySelector("#before");   
    var after = document.querySelector("#after");   
    var book = document.querySelector(".book");   
    var page = document.getElementsByClassName("page");
    
    var middle = 0;       
    for(var z=0;z<book.children.length;z++){   
        page[z].style.zIndex = book.children.length-z;   
    }   
    after.onclick = function(){   
        if(middle != book.children.length){   
            page[middle].style.animation = "page 1.5s linear 1 forwards";   
            middle++;   
        }else{   
            middle = book.children.length;   
        }   
    };   
    before.onclick = function(){   
        if(middle != 0){   
            page[middle-1].style.animation = "page1 1.5s linear 1 forwards";   
            middle--;   
        }else{   
            middle = 0;   
        }   
    };   
})