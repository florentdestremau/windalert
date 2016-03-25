$.ajax({
        url: api_url,
    })
    .done(function (data) {
        data.results.shift();
        data.results.shift();
        $('.spinner').css('display', 'none');
        $('.prevs').css('display', 'block')
        return new Vue({
            el: '#prevs',
            data: {
                prevs: data.results
            }
        });
    });
