(function ($) {
    $.fn.ui = function () {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/getbooks',
            data: {},
            success: function (res) {
                console.log(res);
                var rows = []
                $.each(res.data, function (i, item) {
                    $(item).each(function (index, element) {
                        rows.push('<tr><td> ' + element.id + '</td><td>' + element.bookname + '</td><td>' + element.author + '</td><td>' + element.publisher + '</td><td><a href="javascript:;" class="del" data-id="' + element.id + '">删除<a></td></tr>')
                    })
                })
                $('#tb').empty().append(rows.join(''))
            }
        })
    }
    $('tbody').on('click', '.del', function () {
        var id = $(this).attr('data-id')
        console.log(id);
        $.get('http://www.liulongbin.top:3006/api/delbook', { id: id }, function (res) {
            if (res.status !== 200) return alert('删除图书失败！')
            $(window).ui()
        })
    })
    $('.panel-body').on('submit', function () {
        var bookname = $('#iptBookname').val().trim()//trim()可以去除字符串两单的字符
        var author = $('#iptAuthor').val().trim()
        var publisher = $('#iptPublisher').val().trim()
        if (bookname.length <= 0 || author.length <= 0 || publisher.length <= 0) {
            return alert('请填写完整的图书信息！')
        }
        var data=$(this).serialize()
        console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addbook',
            data,
            function (res) {
                if (res.status !== 200) return alert('添加图书失败！')
                $(window).ui()
            }
        )
        $('.panel-body')[0].reset()//转化为form的dom对象并通过reset（）方法重置内容
        console.log(data);
        /*
        var bookname = $('#iptBookname').val('')
        var author = $('#iptAuthor').val('')
        var publisher = $('#iptPublisher').val('')
        */
    })
}(window.jQuery))