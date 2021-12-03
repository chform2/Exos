let maTbl = document.querySelector("#sampleTable");

document.querySelector(".insertRow").addEventListener("click", function(e){
    var ligne = maTbl.rows.length+1;
    maTbl.lastChild.innerHTML +=`<tr><td>Row ${ligne} cell1</td><td>Row ${ligne} cell2</td></tr>`;
});