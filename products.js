var sidenavbar=document.getElementById("sidenavbar")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){

    sidenavbar.style.right=0
})

closenav.addEventListener("click",function(){

    sidenavbar.style.right="-50%"
})
