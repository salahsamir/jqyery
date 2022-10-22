$(document).ready(function(){
$('#loading .sk-folding-cube').fadeOut(100,function(){
    $('body').css({'overflow':"auto"})

    $('#loading').fadeOut(1000,function(){
        $('#loading').remove()

    })
})
let up=$('.sec2').offset().top
console.log(up);
console.log($(window).scrollTop() );
$(window).scroll(function(){
    if ($(window).scrollTop() >up-100){
        $('#up').css({'display':"block"})
    }
    else{
        $('#up').css({'display':"none"})

    }
})
$('#up button').click(function(){
    $(window).scrollTop(0)
})




let width=$("ul").innerWidth()
$("h3").click(function(){
    if($("aside").css('left')=="0px"){
    $("aside").animate({'left':`${-width}`})}
    else{
        $("aside").animate({left:`0px`})}
})
 $(".x").click(function(){
    $("aside").animate({'left':`${-width}`})
 })
 $(".sectionp").hide()
$("button").click(function(){
    let val= $(this).val()
    
    $(`.p${val}`).slideToggle(500)
    $(".sectionp").not(`.p${val}`).slideUp(500)
})
////for data
let days=document.getElementById('day')
let hours=document.getElementById('hour')
let mins=document.getElementById('min')
let secs=document.getElementById('sec')
function caldata(){
    const future=new Date('1-1-2023')
    const currentdate=new Date();
    const totalsecond=(future-currentdate)/1000;
    const sec=Math.floor((totalsecond))%60;
    const min=Math.floor((totalsecond/60))%60;
    const hour=Math.floor((totalsecond/3600))%24;
    const day=Math.floor((totalsecond /3600/24))
    days.innerHTML=day;
    hours.innerHTML=hour;
    mins.innerHTML=min;
    secs.innerHTML=sec
}
caldata()
setInterval(caldata,1000)

function count(){
    let countDown=Array.from( $('textarea').val())
    let c=countDown.length
    let finallyNummber=100-c
$('#countChar').html(finallyNummber)
}
count()
setInterval(count,10)
////////links scroll
$('ul li a ').click(function(){
    let getattrabut=$(this).attr('href');
    let scr=$(getattrabut).offset().top
    $('html,body').animate({'scrollTop':scr})
})

})
