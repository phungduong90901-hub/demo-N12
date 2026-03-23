<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Form đăng nhập</title>
</head>
<body>

<h2>Đăng nhập</h2>

<label>Tên đăng nhập:</label><br>
<input type="text" id="username"><br><br>

<label>Mật khẩu:</label><br>
<input type="password" id="password"><br><br>

<button onclick="login()">Đăng nhập</button>

<p id="result">Nhập sai:</p>

<script>
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (user === "") {
        alert("tên đăng nhập không để trống!");
        return;
    }

    if (pass === "") {
        alert("mật khẩu không để trống!");
        return;
    }

    if (user === "anhttv" && pass === "123") {
        alert("nhập đúng");
        result.style.color = "green";
        result.innerText = "Xin chào anhttv!";
    } else {
        alert("nhập sai");
        result.style.color = "red";
        result.innerText = "Nhập sai:";
    }
}
</script>

</body>
</html>
