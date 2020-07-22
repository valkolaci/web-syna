/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  sliderHomepage()
  sliders()
})

/* slider homepage */
function sliderHomepage () {
  if ($('#slider').length) {
    $('#slider').owlCarousel({
      autoPlay: 10000,
      items: 5,
      itemsDesktopSmall: [900, 3],
      itemsTablet: [600, 3],
      itemsMobile: [500, 2]
    })
  }
}

/* sliders */
function sliders () {
  if ($('.owl-carousel').length) {
    $('.homepage').owlCarousel({
      navigation: true, // Show next and prev buttons
      navigationText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
      slideSpeed: 500,
      paginationSpeed: 500,
      autoPlay: true,
      stopOnHover: true,
      singleItem: true,
      lazyLoad: true,
      addClassActive: true,
      afterInit: function () {
        // animationsSlider()
      },
      afterMove: function () {
        // animationsSlider()
      }
    })
  }
}
