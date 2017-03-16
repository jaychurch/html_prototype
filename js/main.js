  // Push menu appears on vp width <600px
  $(document).ready(function() {
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');
    
    $nav_list.click(function() {
      $(this).toggleClass('active');
      $('.pushmenu-push').toggleClass('pushmenu-push-toright');
      $menuLeft.toggleClass('pushmenu-open');
    });
  });

   // Push menu close
  $(document).ready(function() {
    $menuLeftClose = $('.pushmenu-left');
    $nav_listClose = $('#nav_listClose');
    
    $nav_listClose.click(function() {
      $(this).toggleClass('active');
      $('.pushmenu-push').removeClass('pushmenu-push-toright');
      $menuLeftClose.removeClass('pushmenu-open');
    });
  });

// Banner fade
$(window).scroll(function() {
    $(".banner").css({
    'opacity' : 1-(($(this).scrollTop())/550)
    });
});

