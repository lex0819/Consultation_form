jQuery(document).ready(function($){

  $('.contact-call').on('click', function(){
    console.log('Click on selector contact-call');
    $('.wrap').css({'display': 'flex'});
    
  })

  $('.round-btn').on('click', function(){
    console.log('Click on selector round-btn');
    $('.wrap').css({'display':'none'});
    
  })

})