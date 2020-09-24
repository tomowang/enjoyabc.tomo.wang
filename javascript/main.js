;(function($) {
  $(document).ready(function() {
    $("a[href='"+ window.location.pathname +"']").addClass("active");
    $('input, textarea').placeholder();
    $("img.lazy").lazyload();
  });
})(jQuery);
