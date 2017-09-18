$(document).ready(function(){
    $('.open').click(function(e){
        e.preventDefault();
        $('.detail').slideToggle();
    });

    $('.outer').on('click',function(){
        $(this).addClass('active');
        $(this).children().addClass('active');
        $(this).siblings().removeClass('active');
        $(this).siblings().children().removeClass('active');
    });

    $('button').on('click',function(){
        if($('#number').val().toString().trim().length !== 16){
            $('.alert').show();
            $('#number').css('border','1px solid red');
        }else{
            $('.alert').hide();
            $('#number').css('border','1px solid #dfe7ec');
        };
    })

    $('#info').hover(function(){
        $('.hint').fadeIn();
        setTimeout(function(){$('.hint').hide();},1000);
    })


    function updateYear(){
        var msg='';
        var date = new Date();
        var year = date.getFullYear();
        console.log(year);
        for(i=0; i<=20;i++){
          msg+= '<option value="'+ (year+i) + '">'+ (year+i) + '</option>';
        }
        document.querySelector('#year').innerHTML= '<option value="選擇" disabled selected>Year</option>' + msg;
      }
    updateYear();

})