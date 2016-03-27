$.ajax({
        url: api_url,
    })
    .done(function (data) {
        data.results.shift();
        data.results.shift();
        $('.spinner').css('display', 'none');
        $('.marees').css('display', 'block')
        return new Vue({
            el: '#marees',
            data: {
                prevs: data.results
            }
        });
    });
