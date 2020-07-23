$(function(){sliderHomepage()
sliders()})
function sliderHomepage(){if($('#slider').length){$('#slider').owlCarousel({autoPlay:10000,items:5,itemsDesktopSmall:[900,3],itemsTablet:[600,3],itemsMobile:[500,2]})}}
function sliders(){if($('.owl-carousel').length){$('.homepage').owlCarousel({navigation:false,navigationText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],slideSpeed:500,paginationSpeed:500,autoPlay:true,stopOnHover:true,singleItem:true,lazyLoad:true,addClassActive:true,afterInit:function(){},afterMove:function(){}})}}