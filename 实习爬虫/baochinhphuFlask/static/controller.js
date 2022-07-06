function get_tableData() {
    $.ajax({
        url:'/table_data',
        type:'post',
        success:function(data){
            contentStart=0
            contentEnd=6
            dataLength=data.length
            page=1
            function init(data,dataLength) {
                for (var i = contentStart; i < contentEnd; i++) {
                    let $table_data = $('<tr class="singleInfo" id="' + i + '">' +
                        '<td >' + data['date'][i] + '</td>' +
                        '<td ><a href="https://cn.baochinhphu.vn' + data['href'][i] + '">' + data['title'][i] + '</a></td>' +
                        '</tr>')
                    $('tbody').append($table_data)
                }
                $('#page').html('第' + page + '/' + Math.ceil(dataLength / 15) + '页')
            }
            init(data,dataLength)
            $('#pagenumber').on('click', '#next', function () {
                    page += 1
                    if (page == Math.ceil(dataLength / 15)) {
                        $('#next').attr('disabled', true)
                    } else {
                        $('#next').attr('disabled', false)
                        $('#previous').attr('disabled', false)
                    }
                    contentStart += 15
                    contentEnd += 15
                    $('tbody').empty()
                    init(Ind,dataLength)
            })
            $('#pagenumber').on('click', '#previous', function () {
                page -= 1
                if (page == 1) {
                    $('#previous').attr('disabled', true)
                } else {
                    $('#previous').attr('disabled', false)
                    $('#next').attr('disabled', false)
                }
                contentStart -= 15
                contentEnd -= 15
                $('tbody').empty()
                init(Ind,dataLength)
            })
        },
        error:function(){

        }
    })
}

get_tableData()