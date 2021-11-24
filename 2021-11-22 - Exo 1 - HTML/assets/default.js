window.onload = function(e){

    /* data-links */
    var allLinks=document.querySelectorAll("[data-href]");
    for(i=0;i<allLinks.length;i++){
        allLinks[i].addEventListener("click",function(e){
            window.open(this.getAttribute("data-href"),'_blank');
        });
    }

    /* darkmode btn  */
    document.querySelector("input[type=checkbox].darkMod").addEventListener("click", function(e){
        document.querySelector("body").classList.toggle("dark"); // toggle class
        // animation: sun on
        if(!this.checked){
            document.querySelector(".fa-sun").animate([
                { transform: 'rotate(360deg)' }

            ], {
                duration: 1000

            });
        }
        // animation: moon on
        if(this.checked){
            document.querySelector(".fa-moon").animate([
                { transform: 'translate(3px, 3px)'},
                { transform: 'rotate(90)' }


            ], {
                duration: 1000
            });
        }
    });
}

/* navbar position on scroll */
window.addEventListener("scroll", function(e){
    var rectHeader = document.querySelector("header").getBoundingClientRect(); // geometric coordinates o the header
    var nav = document.querySelector("nav");  // def ovject navbar
    // change navbar style about header position in the DOM
    if(rectHeader.top<0){ 
        nav.style.position="fixed";
        nav.style.top="0px";
    }else{
        console.log(rectHeader.top);
        nav.style.position="relative";
        nav.style.top="";   
    }
});
