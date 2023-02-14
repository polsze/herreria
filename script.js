const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");


function openFulImg(ref){
	fulImgBox.style.display = "flex";

	fulImg.src = ref;

}

function closeImg(){
	fulImgBox.style.display = "none";
}