$(function() {
  $(document).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".sr_scroll--top-wrapper").addClass("show");
    } else {
      $(".sr_scroll--top-wrapper").removeClass("show");
    }
  });

  $(".sr_scroll--top-wrapper").on("click", scrollToTop);
});

function scrollToTop() {
  verticalOffset = typeof verticalOffset != "undefined" ? verticalOffset : 0;
  element = $("body");
  offset = element.offset();
  offsetTop = offset.top;
  $("html, body").animate({ scrollTop: offsetTop }, 500, "linear");
}
