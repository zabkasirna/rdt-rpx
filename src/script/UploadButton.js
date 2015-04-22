var UploadButton = {
    init: init
};

function init() {
    var $btn = $('.upload-btn');

    $btn.each( function(i) {

        var $text = $(this)
            .closest('.input-group')
            .find('.upload-result');

        $(this).on('change', function(e) {
            $text
                .val( $(this).val() );
        });
    });
}

module.exports = UploadButton;