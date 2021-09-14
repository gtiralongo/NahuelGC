 // $(document).ready(function(){
 //   $('up').hide();
 //
 //   $(window).scroll(function(){
 //     if($(this).scrollTop() > 100 ){
 //         $('up').fadeIn();
 //     }else {
 //       $('up').fadeOut();
 //     }
 //   });
 //   $('up').click(function(){
 //     $('body,html').animate({
 //       scrollTop: 0
 //     });   });
 // })

 <script>

 jQuery(document).ready(function() {

   var btn = $('up');

   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });

   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });

 });
 </script>
