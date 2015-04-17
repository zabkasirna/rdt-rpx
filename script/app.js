(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/***
 *           __    __       ___       __   __               
 *          |  |  |  |     /   \     |  | |  |              
 *          |  |__|  |    /  ^  \    |  | |  |              
 *          |   __   |   /  /_\  \   |  | |  |              
 *          |  |  |  |  /  _____  \  |  | |  `----.         
 *          |__|  |__| /__/     \__\ |__| |_______|         
 *         _______. __  .______     .__   __.      ___      
 *        /       ||  | |   _  \    |  \ |  |     /   \     
 *       |   (----`|  | |  |_)  |   |   \|  |    /  ^  \    
 *        \   \    |  | |      /    |  . `  |   /  /_\  \   
 *    .----)   |   |  | |  |\  \----|  |\   |  /  _____  \  
 *    |_______/    |__| | _| `._____|__| \__| /__/     \__\ 
 *                                                          
 */

var Navigation = require( './Navigation' )
,   Modal = require( './Modal' );

(function( $ ) {
    
    Navigation.init();
    Modal.init();

})(jQuery);
},{"./Modal":2,"./Navigation":3}],2:[function(require,module,exports){
var Modal = {
    init: init
};

function init() {
    var $toggler = $('.modal-toggler-pres');

    $toggler.on('click', function(e) {
        e.preventDefault();
        $('#presModal').modal();
    })
}

module.exports = Modal;
},{}],3:[function(require,module,exports){
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

    $('.sidebar, .navbar-rpx').css({
        'height': ( $('.content').height() + 100 ) + 'px'
    });
}

module.exports = Navigation;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0L2luZGV4LmpzIiwic3JjL3NjcmlwdC9Nb2RhbC5qcyIsInNyYy9zY3JpcHQvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqKlxuICogICAgICAgICAgIF9fICAgIF9fICAgICAgIF9fXyAgICAgICBfXyAgIF9fICAgICAgICAgICAgICAgXG4gKiAgICAgICAgICB8ICB8ICB8ICB8ICAgICAvICAgXFwgICAgIHwgIHwgfCAgfCAgICAgICAgICAgICAgXG4gKiAgICAgICAgICB8ICB8X198ICB8ICAgIC8gIF4gIFxcICAgIHwgIHwgfCAgfCAgICAgICAgICAgICAgXG4gKiAgICAgICAgICB8ICAgX18gICB8ICAgLyAgL19cXCAgXFwgICB8ICB8IHwgIHwgICAgICAgICAgICAgIFxuICogICAgICAgICAgfCAgfCAgfCAgfCAgLyAgX19fX18gIFxcICB8ICB8IHwgIGAtLS0tLiAgICAgICAgIFxuICogICAgICAgICAgfF9ffCAgfF9ffCAvX18vICAgICBcXF9fXFwgfF9ffCB8X19fX19fX3wgICAgICAgICBcbiAqICAgICAgICAgX19fX19fXy4gX18gIC5fX19fX18gICAgIC5fXyAgIF9fLiAgICAgIF9fXyAgICAgIFxuICogICAgICAgIC8gICAgICAgfHwgIHwgfCAgIF8gIFxcICAgIHwgIFxcIHwgIHwgICAgIC8gICBcXCAgICAgXG4gKiAgICAgICB8ICAgKC0tLS1gfCAgfCB8ICB8XykgIHwgICB8ICAgXFx8ICB8ICAgIC8gIF4gIFxcICAgIFxuICogICAgICAgIFxcICAgXFwgICAgfCAgfCB8ICAgICAgLyAgICB8ICAuIGAgIHwgICAvICAvX1xcICBcXCAgIFxuICogICAgLi0tLS0pICAgfCAgIHwgIHwgfCAgfFxcICBcXC0tLS18ICB8XFwgICB8ICAvICBfX19fXyAgXFwgIFxuICogICAgfF9fX19fX18vICAgIHxfX3wgfCBffCBgLl9fX19ffF9ffCBcXF9ffCAvX18vICAgICBcXF9fXFwgXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAqL1xuXG52YXIgTmF2aWdhdGlvbiA9IHJlcXVpcmUoICcuL05hdmlnYXRpb24nIClcbiwgICBNb2RhbCA9IHJlcXVpcmUoICcuL01vZGFsJyApO1xuXG4oZnVuY3Rpb24oICQgKSB7XG4gICAgXG4gICAgTmF2aWdhdGlvbi5pbml0KCk7XG4gICAgTW9kYWwuaW5pdCgpO1xuXG59KShqUXVlcnkpOyIsInZhciBNb2RhbCA9IHtcbiAgICBpbml0OiBpbml0XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciAkdG9nZ2xlciA9ICQoJy5tb2RhbC10b2dnbGVyLXByZXMnKTtcblxuICAgICR0b2dnbGVyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcjcHJlc01vZGFsJykubW9kYWwoKTtcbiAgICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsOyIsInZhciBOYXZpZ2F0aW9uID0ge1xuXG4gICAgaW5pdDogaW5pdFxuXG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciAkZ290b0J0biA9ICQoJy5idG4tZ290bycpO1xuXG4gICAgJGdvdG9CdG4uZWFjaCggZnVuY3Rpb24oIGkgKSB7XG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICB2YXIgZ290b1JlZiA9ICQodGhpcykuYXR0cignZGF0YS1nb3RvJylcbiAgICAgICAgICAgICwgICBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIGhyZWYgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBocmVmLnN1YnN0cihocmVmLmxhc3RJbmRleE9mKCcvJykgKyAwKSApO1xuXG4gICAgICAgICAgICBpZiAoIGdvdG9SZWYgPT09ICcnICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoIGhyZWYuc3Vic3RyKGhyZWYubGFzdEluZGV4T2YoJy8nKSArIDApICE9PSAnLycgKSB7XG4gICAgICAgICAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSggaHJlZi5zdWJzdHIoaHJlZi5sYXN0SW5kZXhPZignLycpICsgMSApLCBnb3RvUmVmICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhyZWYgKz0gZ290b1JlZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoIGhyZWYgKTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy5zaWRlYmFyLCAubmF2YmFyLXJweCcpLmNzcyh7XG4gICAgICAgICdoZWlnaHQnOiAoICQoJy5jb250ZW50JykuaGVpZ2h0KCkgKyAxMDAgKSArICdweCdcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYXZpZ2F0aW9uOyJdfQ==
