function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

$("#prix1").css('display',"none");
$("#prix2").css('display',"none");
$("#prix3").css('display',"none");

$('.clickable').click(function() {
    console.log('gh')
    $('#prix1').slideToggle("display");
});
$('.clickablee').click(function() {
    console.log('ah')
    $('#prix2').slideToggle("display");
});
$('.clickableee').click(function() {
    console.log('fh')
    $('#prix3').slideToggle("display",);
});
function zid(){
    let x = document.getElementById("num").innerHTML;
    parseInt(x);
    x=parseInt(x)+1 ; 
    document.getElementById("num").innerHTML=x;
}
function zid1(){
    let x = document.getElementById("num").innerHTML;
    parseInt(x);
    x=parseInt(x)+1 ; 
    document.getElementById("num").innerHTML=x;
}
function zid2(){
    let x = document.getElementById("num").innerHTML;
    parseInt(x);
    x=parseInt(x)+1 ; 
    document.getElementById("num").innerHTML=x;
}