! function() {
    $.ajax({
        type: 'get',
        url: 'http://10.31.157.50/xm/php/piclist.php',
        dataType: 'json',
        success: function(d) {
            var html1 = '';
            $.each(d, function(index, value) {

                html1 += `
                    <li class="mst-ued-product-lc-item">
                    <a href="http://10.31.157.50/xm/src/details.html?sid=${index}" class="mst-ued-product-lc-img-wrap">
                        <img src="${value.url}">
                    </a>
                    <a href="http://localhost/xm/src/details.html" class="mst-ued-product-lc-desc">
                        <div class="mst-ued-product-lc-price-desc">
                            <div class="mst-ued-product-lc-promotion">
                                <span class="ued-text">价格</span>
                                <span class="ued-money-icon">￥</span>
                                <span class="ued-price">${value.newprice}</span>
                            </div>
                            <div class="mst-ued-product-lc-discount">
                                <span class="ued-vip-text">唯品价</span>
                                <span class="ued-vip-price">￥${value.oldprice}</span>
                            </div>
                            <div class="mst-ued-product-lc-name">${value.title1}</div>
                        </div>
                        <div class="mst-ued-product-lc-btn">
                            <div class="mst-ued-product-lc-btn-like">立即抢购</div>
                        </div>
                    </a>
                </li>
                    `;

            });

            $('.mst-ued-ul').append(html1);
        }
    });
}(jQuery);