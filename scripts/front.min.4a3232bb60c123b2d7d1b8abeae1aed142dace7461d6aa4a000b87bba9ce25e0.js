$(function(){sliderHomepage()
sliders()})
function sliderHomepage(){if($('#slider').length){$('#slider').owlCarousel({autoPlay:3000,items:4,itemsDesktopSmall:[900,3],itemsTablet:[600,3],itemsMobile:[500,2]})}}
function sliders(){if($('.owl-carousel').length){$('.customers').owlCarousel({items:6,itemsDesktopSmall:[990,4],itemsTablet:[768,2],itemsMobile:[480,1]})
$('.testimonials').owlCarousel({items:4,itemsDesktopSmall:[990,3],itemsTablet:[768,2],itemsMobile:[480,1]})
$('.project').owlCarousel({navigation:true,navigationText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],slideSpeed:300,paginationSpeed:400,autoPlay:true,stopOnHover:true,singleItem:true,afterInit:'',lazyLoad:true})
$('.homepage').owlCarousel({navigation:false,navigationText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],slideSpeed:2000,paginationSpeed:1000,autoPlay:true,stopOnHover:true,singleItem:true,lazyLoad:false,addClassActive:true,afterInit:function(){},afterMove:function(){}})}}