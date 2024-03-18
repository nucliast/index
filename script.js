document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code'); // 'code'は認証コードが含まれるURLパラメータの名前です

    if (authCode) {
        document.getElementById('authCode').textContent = `認証コード: ${authCode}`;
    } else {
        document.getElementById('authCode').textContent = '認証コードがURLに含まれていません。';
    }
});
