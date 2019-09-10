const username = document.querySelector('#username');
const password = document.querySelector('#password');

const login = document.querySelector('#login');

login.onclick = function() {
    ajax({
        type: 'post',
        url: 'http://10.31.157.50/xm/php/login.php',
        data: {
            user: username.value,
            pass: password.value
        },
        success: function(d) {
            if (!d) {
                alert('用户名或密码错误');
            } else {
                location.href = 'http://10.31.157.50/xm/src/';
                localStorage.setItem('customname', username.value);
            }
        }
    });
}