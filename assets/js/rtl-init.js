;(function($){
  $(function(){
    var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    if (!isRTL) return;

  var $skills = $('.owl-skills');
  if ($skills.data('owl.carousel')) { $skills.owlCarousel('destroy'); }
  $skills.owlCarousel({
    items:3,
    loop:true,
    dots:true,
    nav:true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    rtl:true,
    autoplay:true,
    margin:15,
    responsive:{ 0:{items:1}, 600:{items:2}, 1000:{items:3} }
  });

  $skills.find('.item').each(function(){
    var h4 = $(this).find('h4');
    var desc = h4.attr('title') || h4.text();
    $(this).find('p').text(desc);
  });

  var $cert = $('.owl-service-item');
  if ($cert.data('owl.carousel')) { $cert.owlCarousel('destroy'); }
  $cert.owlCarousel({
    items:2,
    loop:true,
    dots:true,
    nav:true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    rtl:true,
    autoplay:true,
    margin:15,
    responsive:{ 0:{items:1}, 600:{items:2} }
  });
  });
})(window.jQuery);
