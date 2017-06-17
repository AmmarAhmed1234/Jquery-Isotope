/**
 * Created by Ammar Ahmed on 6/17/2017.
 */
$(document).ready(function () {
    $('.main-iso').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.iso-nav ul li').click(function () {
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.main-iso').isotope({
            filter: selector
        });
        return false;
    });
    console.log('Isotope work correctly');
});
// filter .metal items
// $grid.isotope({ filter: '.metal' });
//
// // filter .alkali OR .alkaline-earth items
// $grid.isotope({ filter: '.alkali, .alkaline-earth' });
//
// // filter .metal AND .transition items
// $grid.isotope({ filter: '.metal.transition' });
//
// // show all items
// $grid.isotope({ filter: '*' });