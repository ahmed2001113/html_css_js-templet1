$(".container ul li").click(function(){
    $(this).addClass('active2').siblings().removeClass('active2');
    var m = $(this).data('class')
if($(this).data('class')== ('all')){
    $('.all').show();
    }
    else if($(this).data('class')== m){
         $('.all').hide(500);
$('.'+ m).show(500);        
}})
