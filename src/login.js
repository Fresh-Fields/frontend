function storeData(){
    let username = document.getElementById('login_id').value
    let password = document.getElementById('password').value

    if(username!=="" && password!==""){
        window.localStorage.setItem("username",username)
        window.localStorage.setItem("password",password)

        // just to check ki store zhalaay ka 

        alert(localStorage.getItem("username"))
        alert(localStorage.getItem("password"))

    }

    else{

        // he work Kartay 

        alert("Enter Login Credentials !!")
    }

   
}

