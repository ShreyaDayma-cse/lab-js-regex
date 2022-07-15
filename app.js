const valid_name = /^.{8,15}$/;
const valid_address = /\w{1,}/;
const valid_email = /^.{1,}(?=.*[@|.|_]).{1,}$/;
const valid_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])/;
const valid_phone = /^\d{10}$/;


var formValidate = () =>{
    var user_name=document.querySelector("#name");
    var address=document.querySelector("#address");
    var email=document.querySelector("#email");
    var pwd=document.querySelector("#pwd");
    var cpwd=document.querySelector("#cpwd");
    var phone=document.querySelector("#phone");

    var inputs = document.querySelectorAll("input");

    let count = 0;

    if(inputs[0].value==''){
        user_name.innerHTML="Kindly fill this field";
        count++;
    }  
    else if(valid_name.test(inputs[0].value)==false){
        user_name.innerHTML="Atleast 8 to 15 characters required";
        count++;
    }
    else{
        user_name.innerHTML="";
    }

    if(inputs[1].value==''){
        address.innerHTML="Kindly fill address field";
        count++;
    }
    else if(valid_address.test(inputs[1].value)==false){
        address.innerHTML="Kindly fill address field";
        count++;
    }
    else{
        address.innerHTML="";
    }

    if(inputs[2].value==''){
        email.innerHTML="Kindly fill email field";
        count++;

    }
    else if(valid_email.test(inputs[2].value)==false){
        email.innerHTML="Enter a valid email";
        count++;
    }
    else{
        email.innerHTML="";
    }

    if(inputs[3].value==''){
        pwd.innerHTML="Kindly fill this field";
        count++;
    }
    else if(valid_password.test(inputs[3].value)==false){
        pwd.innerHTML="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any Symbols";
        count++;
    }
    else{
        pwd.innerHTML="";
    }

    if(inputs[4].value==''){
        cpwd.innerHTML="Kindly fill this field";
        count++;
    }
    else if(inputs[3].value!=inputs[4].value){
        cpwd.innerHTML="Password and confirm password must be the same";
        count++;
    }
    else{
        cpwd.innerHTML="";
    }

    if(inputs[5].value==''){
        phone.innerHTML="Kindly fill this field";
        count++;
    }
    else if(valid_phone.test(inputs[5].value)==false){
        phone.innerHTML="Enter a valid phone number";
        count++;
    }
    else{
        phone.innerHTML="";
    }
    if(count==0){
        document.querySelector(".success").style.display = "block";
    }
    else{
        document.querySelector(".success").style.display = "none";
    }
}