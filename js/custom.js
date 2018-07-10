$(document).ready(function () {
    $('.hover-account-box').hover(function () {
            $('.account-buttons').addClass('act-hover');
        },
        function () {
            $('.account-buttons').removeClass('act-hover');
        });
});


$(document).ready(function () {
    $('.main-dropdown-child').hover(function () {
            $('.main-dropdown-parent').addClass('main-dropdown-effect');
        },
        function () {
            $('.main-dropdown-parent').removeClass('main-dropdown-effect');
        });
});





jQuery(document).ready(function () {
    // Hide the extra content initially, using JS so that if JS is disabled, no problemo.
    jQuery('.read-more-content').addClass('hide');

    // Set up the toggle.
    jQuery('.read-more-toggle').on('click', function () {
        jQuery('.read-more-content').toggleClass('hide');
    });

    // categories the toggle.
    jQuery('.view-more-categories').on('click', function () {
        jQuery('.view-more-content').toggleClass('hide');
    });

    // shoppingevents the toggle.
    jQuery('.view-more-shoppingevents').on('click', function () {
        jQuery('.view-more-shoppingevents-content').toggleClass('hide');
    });

    jQuery('#show-about').text('Show More').click(function (e) {
        e.preventDefault();
        jQuery(this).text(jQuery(this).text() == 'Show More' ? "Show Less" : "Show More");
    });

    jQuery('#read-more').text('Read More').click(function (e) {
        e.preventDefault();
        jQuery(this).text(jQuery(this).text() == 'Read More' ? "Read Less" : "Read More");
    });

    jQuery('#read-more1').text('Read More').click(function (e) {
        e.preventDefault();
        jQuery(this).text(jQuery(this).text() == 'Read More' ? "Read Less" : "Read More");
    });

    jQuery('.show-about').text('View More').click(function (e) {
        e.preventDefault();
        jQuery(this).text(jQuery(this).text() == 'View More' ? "View Less" : "View More");
    });

    jQuery('.more-categories').text('View More Categories').click(function (e) {
        e.preventDefault();
        jQuery(this).text(jQuery(this).text() == 'View More Categories' ? "View More Categories " : "View More Categories");
    });

    jQuery('#see-details').text('See Details').click(function (e) {
        e.preventDefault();
        jQuery(this).text(jQuery(this).text() == 'See Details' ? "See Less" : "See Details");
    });
});




$(function() {
    $( ".header-search" ).click(function() {
        $( ".cancel-button, .header-search, .header-search-box " ).toggle();
    });


    $( ".cancel-button" ).click(function() {
        $( ".cancel-button, .header-search, .header-search-box " ).toggle();
    });


});





function changeHeight() {


    $('.remodal').addClass("remodal-height");


}



$(function () {

    // (Optional) Active an item if it has the class "is-active"    
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

    $(".accordion > .accordion-item").click(function () {
        if ($(window).width() >= 767) {

            return false;
        }
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").children(
            ".accordion-panel").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });

    window.addEventListener('resize', function () {
        if ($(window).width() > 767) {

            $(".accordion > .accordion-item").each(function () {
                if (!$(this).hasClass("is-active")) {
                    $(this).addClass("is-active").children(".accordion-panel").slideToggle(
                        "ease-out");
                }
            });


        };

    });

});


$(function () {

    // (Optional) Active an item if it has the class "is-active"    
    $(".accordion2 > .accordion-item2 .is-active").children(".accordion-panel2").slideDown();

    $(".accordion2 > .accordion-item2").click(function () {
        
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").children(
            ".accordion-panel2").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".accordion-panel2").slideToggle("ease-out");
    });






});



// window.onload = function () {
//     resize();
// };




// function resize() {



//     $(window).resize(function () {
//         if ($(window).width() < 767) {

//             $('.sidebar').children().unwrap();
//             $('.main-content').children().unwrap();
//             $(".coupons-row-off-sales").wrapAll('<div class="coupons-list-details"></div>');            
         

//         } else {
//             $(".right-col, .bottom-column").wrapAll('<div class="sidebar"></div>');
//         }
//     });

//     if ($(window).width() < 767) {
//         $('.sidebar').children().unwrap();
//         $('.main-content').children().unwrap();
   
//         $(".coupons-row-off-sales").wrapAll('<div class="coupons-list-details"></div>');
//     } else {
//         $(".right-col, .bottom-column").wrapAll('<div class="sidebar"></div>');
//     }

// }








$(window).scroll(function(){
    if ($(window).scrollTop() >= 390) {
        // if (window.pageYOffset >= sticky) {
       $('.floating-header').addClass('sticky');
    }
    else {
       $('.floating-header').removeClass('sticky');
    }
});

/* scrollTop() >= 240
   Should be equal the the height of the header
 */






$('.click-to-copy').hide(); 
$('.code-copied').hide(); 


$(".modal-codes").click(function() {
    $('.click-to-copy').hide(); 
    $('.code-copied').show();

    setTimeout(function() {
        $(".code-copied").fadeOut(1500);
    },1000);


   

});

$('.modal-codes').mouseover(function () {
      $('.click-to-copy').show();      
});
$('.modal-codes').mouseout(function () {
      $('.click-to-copy').hide();      
});




$('.accordion-box-content   input[type="checkbox"]').click(function(e) {
    e.stopPropagation();
});






  

  $(".menu").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $(".sub").not(this).hide()
    //(... rest of your JS code)
console.log("this    ", $(".sub").not(this));
    $( this ).find( ".sub" ).toggle( "fast", function() {
        // Animation complete.
      });
});











// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};