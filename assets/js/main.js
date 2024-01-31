
//layer_popup

function openLayer(sGetName){
    var $layer = $("#"+ sGetName);
    $layer.addClass("on");
    document.body.style.overflow = "hidden";
}

function closeLayer(sGetName){
    $("#"+ sGetName).removeClass("on");
    document.body.style.overflow = "auto";
}


$(document).ready(function(){

	//예약선택 페이지 버튼 클릭시 색상 변경
	var border_blue = document.getElementsByClassName("border_blue");

	function handleClick(event) {

	  if (event.target.classList[1] === "active") {
		event.target.classList.remove("active");
	  } else {
		for (var i = 0; i < border_blue.length; i++) {
		  border_blue[i].classList.remove("active");
		}

		event.target.classList.add("active");
	  }
	}

	function init() {
	  for (var i = 0; i < border_blue.length; i++) {
		border_blue[i].addEventListener("click", handleClick);
	  }
	}

	init();

})
