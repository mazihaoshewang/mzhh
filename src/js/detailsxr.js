!(function($) {
    let $sid = location.search.substring(1).split("=")[1];
    $.ajax({
        url: "http://10.31.157.50/xm/php/getdata.php",
        data: {
            sid: $sid
        },
        dataType: "json"
    }).done(function(d) {
        //获取后端返回的数据。
        console.log(d);

        //  window.d = d;
        let $smallpic = d.urls.split(",");
        $(".spic img").attr("src", d.url);
        $(".bf img").attr("src", d.url);
        $(".pib-title-detail").html(d.title1);
        $(".sp-price").html(d.newprice);
        let $htmlstr = "";
        $.each($smallpic, function(index, value) {
            var str = `<li><img src="${value}"></li>`
            $(".imglist").find('ul').append(str)
                // $("#imageMenu li").eq(index).html(`<img src="${value}" width="68" height="68" alt="">`);
        });
        $(".imglist").find('ul').find('li').eq(0).attr('class', 'active')
        $('.pic').find('img').attr('src', $smallpic[0])
        $('.bigpic').find('img').attr('src', $smallpic[0])


        $('body').append('.i-button').find('.vipFont').on('click', function() {
            additem(res.id, res.price, $('#num').val());
            // console.log(1)
        });
    });



    function additem(id, price, num) {
        var shop = cookie.get('shop');
        var product = {
            "id": id,
            "price": price,
            "num": num
        };

        if (shop) {
            shop = JSON.parse(shop);

            if (shop.some(elm => elm.id == id)) {
                shop.forEach((elm, i) => {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }

    }
})(jQuery);