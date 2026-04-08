console.log("click me")


 document.getElementById("login-btn").addEventListener("click", function(){
    const inputName = document.getElementById("input-name");
    const name = inputName.value;
    console.log(name)

    const inputPassword = document.getElementById("input-password");
    const password = inputPassword.value;
    console.log(password);

    if(name=== "admin" && password === "admin123"){
        alert("Login success")
          window.location.assign("./github.html");
    }else{
        alert("Login error")
    }
 })

 