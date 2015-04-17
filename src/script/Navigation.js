var Navigation = {

    init: init

};

function init() {
    var $gotoBtn = $('.btn-goto');

    $gotoBtn.each( function( i ) {
        $(this).on('click', function(e) {

            var gotoRef = $(this).attr('data-goto')
            ,   href = window.location.href
            ;

            // console.log( href );
            // console.log( href.substr(href.lastIndexOf('/') + 0) );

            if ( gotoRef === '' ) return;

            if ( href.substr(href.lastIndexOf('/') + 0) !== '/' ) {
                href = href.replace( href.substr(href.lastIndexOf('/') + 1 ), gotoRef );
            } else {
                href += gotoRef;
            }

            window.location.replace( href );

        });
    });
}

module.exports = Navigation;