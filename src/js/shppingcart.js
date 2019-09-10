var data = [{
    img: 'https://a.vpimg3.com/upload/merchandise/pdcvis/605332/2018/0607/157/753acc85-f3ae-4d3c-a7e4-869d984bc1f2_420x420_90.jpg',
    title: '稻香村',
    title_2: '月饼',
    price: 124,
    num: 1,
    allprice: 128
}, {
    img: 'https://a.vpimg3.com/upload/merchandise/pdcvis/605332/2018/0607/157/753acc85-f3ae-4d3c-a7e4-869d984bc1f2_420x420_90.jpg',
    title: '稻香村',
    title_2: '月饼',
    price: 100,
    num: 2,
    allprice: 200
}]

$(function() {
    write()
})


function write() {
    $('.Settlement-btn-box').find('tbody').empty();
    data.forEach((item, index) => {
        var str = `<tr><td class="tm"><div><div class="car-img"><img src="${item.img}" alt=""></div><h3><span>${item.title}</span></h3><p>${item.title_2}</p></div></td><td class="dj"><div>￥${item.price}</div></td><td class="sl"><button onclick="sub(${index})">-</button><input type="number" value="${item.num}" min="1"><button onclick="add(${index})">+</button></td><td class="xj">￥${item.allprice}</td><td class="cz"><input type="button" value="删除" onclick="delect(${index})"></td></tr>`
        $('.Settlement-btn-box').find('tbody').append(str);
    })
}

function sub(index) {
    if (data[index].num === 1) {
        alert('最少个数为1')
    } else {
        data[index].num = data[index].num - 1
        data[index].allprice = data[index].price * data[index].num
        write()
    }
}

function add(index) {
    data[index].num = data[index].num + 1
    data[index].allprice = data[index].price * data[index].num
    write()
}

function delect(index) {
    data.splice(index, 1);
    write()
}