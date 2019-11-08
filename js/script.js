const   menuOpenBtn = document.querySelector(".header-burger"),
        menuCloseBtn = document.querySelector(".menu-active-btn"),
        menuActive = document.querySelector(".menu-active-wraper"),
        hireUs = document.querySelector(".hire-us-wraper"),
        hireCloseBtn = document.querySelector(".hire-close"),
        hireUsBtnHeader = document.querySelector("#hire"),
        hireUsBtnFooter = document.querySelector(".smal-form-btn"),
        menuItem = document.querySelectorAll(".menu-link");
        bodyHolder = document.body;
let setScroll = function(){
        menuActive.style.display = "none";
        bodyHolder.style.overflow =  "visible";
}

let triger  = function (element,body){
    if(element.style.display == "none"){
        element.style.display = "block";
        body.style.overflow =  "hidden"
    }else{
        element.style.display = "none";
        body.style.overflow =  "visible";
    }
}
let trigerTop  = function (element,body){
    if(element.style.display == "none"){
        element.style.display = "block";
        body.style.overflow =  "hidden"
    }else{
        element.style.display = "none";
        body.style.overflow =  "visible";
        element.style.bottom = "";
    }
}
let trigerBottom  = function (element,body){
    if(element.style.display == "none"){
        element.style.display = "block";
        element.style.bottom = "0";
        body.style.overflow =  "hidden"
    }else{
        element.style.display = "none";
        body.style.overflow =  "visible";
        element.style.bottom = "";
    }
}
menuOpenBtn.addEventListener('click', ()=>{
    triger(menuActive,bodyHolder);
});
menuCloseBtn.addEventListener('click', ()=>{
    triger(menuActive,bodyHolder);
});
hireCloseBtn.addEventListener('click', ()=>{
    triger(hireUs,bodyHolder);
});
hireUsBtnHeader.addEventListener('click', ()=>{
    trigerTop(hireUs,bodyHolder);
});
hireUsBtnFooter.addEventListener('click', ()=>{
    trigerBottom(hireUs,bodyHolder);
});
menuItem.forEach( function (element){
    element.addEventListener('click', setScroll);
})

