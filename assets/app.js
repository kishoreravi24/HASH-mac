const crypto = require('crypto-js');

function hash(){
    let hashText = document.getElementById('input-text').value;
    let md5 = crypto.MD5(hashText).toString();
    let sha1 = crypto.SHA1(hashText).toString();
    let sha256 = crypto.SHA256(hashText).toString();
    let sha512 = crypto.SHA512(hashText).toString();
    document.getElementById('md5-text').value = md5;
    document.getElementById('sha1-text').value = sha1;
    document.getElementById('sha256-text').value = sha256;
    document.getElementById('sha512-text').value = sha512;
}