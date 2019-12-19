window.onload = function() {
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    var click = document.getElementById("enter-next");
    click.onclick = function() {
        if (name.value == "123" && password.value == "123") {
            alert("Welcome back!");
        } else {
            password.value = "";
            alert("Your password or name is wrong!");
        }
    }
}