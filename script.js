document.getElementById("colorbtn").addEventListener ("click", function(){
    let randomColor="#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomColor;
    document.getElementById("colorCode").textContent="Current Color: " + randomColor


});