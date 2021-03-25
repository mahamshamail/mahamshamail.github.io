/*function user(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullname = function(){
      return this.firstname + " " + this.lastname;
    };
};

function validateForm(){
  console.log("validating the inputs");
    var loginData = [];
    var userList = [];
  if ("userList" in localStorage){
        userList = JSON.parse(localStorage.getItem("userList"));
        console.log(userList);
      }

  var firstname = document.forms["userinfo"]["firstname"].value;
  let lastname = document.forms["userinfo"]["lastname"].value;
  let email = document.forms["userinfo"]["email"].value;
  let password = document.forms["userinfo"]["password"].value;
  let phone = document.forms["userinfo"]["phone"].value;

   const newUser = new user(firstname, lastname);

   console.log(newUser);
   console.log(loginData.length);

// loginData.push(({newUser.getFullname(), email}));
  userList.push(({firstname,lastname,email,password,phone}));
  // localStorage.setItem("userList", JSON.stringify(userList));
  //localStorage.setItem("loginData", JSON.stringify(loginData));
  return false;
}*/
$(document).ready(function() {
  var userList = [];
    var loginData = [];
  if ("userList" in localStorage){
      userList = JSON.parse(localStorage.getItem("userList"));
      console.log(userList);
    }
$("#register").click(function() {
var fname = $("#firstname").val();
var lname = $("#lastname").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
var phone = $("#phone").val();
var fullName = fname + " " + lname;

if (fname == '' || email == '' || password == '' || cpassword == ''|| phone == '') {
alert("Please fill all fields...!!!!!!");
}
else if (password.length < 4) {
  alert("Password should atleast 4 character in length...!!!!!!");
}
else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
  //userList.push(fname,lname,email,password,phone);
  //  userList.push({"fname" : fname, "lname" : lname,"email" : email, "password" : password, "phone" : phone});
  userList.push(({fname,lname,email,password,phone}));
  loginData.push(({fullName, email}));
  localStorage.setItem("userList", JSON.stringify(userList));
  localStorage.setItem("loginData", JSON.stringify(loginData));
    localStorage.isLogin = true;
  window.location.href = 'index.html';
   return false;
}
})});
