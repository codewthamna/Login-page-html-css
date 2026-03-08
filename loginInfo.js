const userCradentials ={
    username :"amnakhan",
    email:"amnasadozai09@gmail.com",
    password :"12345"
};

//func to chk login 
function checkLogin(){
    // geting input from user
    const inputusername = document.getElementById("username").value.trim();
    const inputpassword = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    
    // chk empty feilds if
    if(inputusername === "" || inputpassword ===""){
        message.textContent ="Please fill all feilds";
        message.style.color ="red";
        return;
    }
    
    // chk if valu matches 

    if (( inputusername === userCradentials.username || inputusername === userCradentials.email)
    && inputpassword === userCradentials.password){
    message.textContent =" Login Successful!  Welcome " + userCradentials.username;

    } else{
        message.textContent= " Login Failed ! Check username/email or password.";
        message.style.color ="red";
    }
}
// attaching func to button clicking thingyy :)
document.getElementById("loginBtn").addEventListener("click", checkLogin);




