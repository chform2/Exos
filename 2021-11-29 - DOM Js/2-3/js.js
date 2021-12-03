let fname = document.querySelector("[name=fname]").value;
let lname = document.querySelector("[name=lname]").value;

document.querySelector("#form1").addEventListener("click", function(e){
    e.preventDefault();
    alert(encodeURI(fname+" "+lname));
});



document.querySelector("#getAttributes").addEventListener("click", function(e){
    aLink = document.querySelector("#w3r");
    alert(aLink.getAttribute("href") + "\n" + aLink.getAttribute("hreflang") + "\n" + aLink.getAttribute("target") + "\n" + aLink.getAttribute("href"));
});