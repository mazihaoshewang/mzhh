const username = document.querySelector('#username');
const oSpan = document.querySelector('span');

username.onblur = function() {
    ajax({
        url: 'http://10.31.157.50/xm/php/register.php',
        data: { //给后端
            checkname: username.value
        },
        success: function(d) {
            if (!d) {
                oSpan.innerHTML = '用户名可用';
                oSpan.style.color = 'green';
            } else {
                oSpan.innerHTML = '该用户名已存在';
                oSpan.style.color = 'red';
            }
        }
    })
}