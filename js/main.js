$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
    });


    return false;
});

function fixAspect(img) {
    var $img = $(img),
        width = $img.width(),
        height = $img.height(),
        tallAndNarrow = width / height < 1;
    if (tallAndNarrow) {
        $img.addClass('tallAndNarrow');
    }
    $img.addClass('loaded');
}


//single product view

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

$(document).ready(function() {
    $(".small_img").hover(function() {
        $(".big_image").attr('src', $(this).attr('src'))
    });
});
$(document).ready(function() {
    $(".big_image").imagezoomsl(function() {
        zoomrange: [1, 1]
    });
    $('#productmodal').on('shown.bs.modal', function() {
        $(".big_image").imagezoomsl(function() {
            zoomrange: [1, 1]
        });
    })
});