function genPass(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let pass = "";
    for(let i=0; i<10; i++){
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("pass").innerText = pass;
}

document.getElementById("btn").addEventListener("click", genPass);


genPass();
