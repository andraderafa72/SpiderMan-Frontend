$(".toggle-nav").click(function(){
  $(".nav-list").toggleClass('open');
  $(".logo").toggleClass('no-padding');
  $(".toggle-nav a").toggleClass('focused');
});