function checkCredintials(){

    let user = localStorage.getItem(username)
    let pass = localStorage.getItem(password)

    if(user!="" && pass!= ""){
        alert("You haven't logged in")
    }

    else{
        // Pata nhi
    }

}