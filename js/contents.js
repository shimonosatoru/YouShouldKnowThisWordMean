
$('body').on('mouseup', function(e){
    $('#gtx-trans').on('click', function() {
        var selected = window.getSelection().toString();
        var now = new Date();
        
        $.ajax({
            type: 'POST',
            url: 'https://sheetapi.co/apis/9wNf7k8z8Zbj2ZeDTsQC4z',
            dataType: 'json',
            data: {
                text: selected,
                target: '',
                created_at: now
            },
            success: function(data) {
                console.log(data);
            }
        });
    });
});