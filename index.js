let i=1;
function changeImage(n){
    i+=n
    if(i>5){
        i=1
    }
    if(i<1){
        i=5
    }
    document.getElementById("image").src="src/photo"+i+".jpg"
}