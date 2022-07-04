(function ($) {
    $.fn.resolveData = function (data) {
        var arr = []
        for (let k in data) {
            arr.push(k + '=' + data[k])
        }
        return arr.join('&')
    }

    $.fn.heimaAjax = function (options) {
        var xhr = new XMLHttpRequest()
        var qs = $(window).resolveData(options.data)
        if (options.method.toUpperCase() === 'GET') {
            xhr.open(options.method, options.url + '?' + qs)
            xhr.send()
        } else if (options.method.toUpperCase() === 'POST') {
            xhr.open(options.method, options.url)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(qs)
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var result = JSON.parse(xhr.responseText)
                options.success(result)
            }
        }
    }
}(window.jQuery))