let userdata=JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit",signedin)

function signedin () {
    event.preventDefault();
    let firstname=document.querySelector("#Fname").value;
    let lastname=document.querySelector("#Lname").value;
    let emailID=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    let obj={
        firstname:firstname,
        lastname:lastname,
        emailID:emailID,
        password:password,
    };
    if(obj.emailID===""&& obj.password===""){
        alert("Enter value");
    }else{
        userdata.push(obj);
    alert("successfully signed up")
    window.location.href="SignIn.html"

    localStorage.setItem("userData",JSON.stringify(userdata));

    }
    
}