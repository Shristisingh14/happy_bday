$('#btn_no').on('mouseover', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })
$('.btn_no').on('click', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })

function love(){
    headd.remove()
    new_div.remove()
    hrt.style.visibility ="visible";
    yes.style.visibility ="visible";
}