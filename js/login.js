
/*let userListData = [];
let loginData = [];
function getData(){
  if ("userList" in localStorage){
    userListData = JSON.parse(localStorage.getItem("userList"));
  }
}
function user(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullname = function(){
      return this.firstname + " " + this.lastname;
    };
};
function validlogin(){
      getData();
      console.log("Size", userListData.length);
      let email = document.forms["userCredential"]["email"].value;
      let password = document.forms["userCredential"]["password"].value;

      for (var i = 0; i < userListData.length; i++) {
        var entry = userListData[i];
        var storedPassWord = entry.password;
        var storedEmailAddress = entry.email;

        if (email == storedEmailAddress && password == storedPassWord) {
            const newUser = new user(entry.firstname, entry.lastname);
            //save it to local storage
          //  localStorage.setItem("userName", newUser.getFullname());
            localStorage.isLogin = true;

            loginData.push(({newUser.getFullname(), email}));
            localStorage.setItem("loginData", JSON.stringify(loginData));
            alert ("Login successfully");

            // window.location = "updateprofile.html"; // Redirecting to other page.
            // return false;
            return window.location.href='updateprofile.html';
    }
}
alert('Invalid Username or Password! Please try again.');
console.log("Invalid credentials")
return;
};

function logout(){
console.log("logout click");
 localStorage.removeItem("userName");
 localStorage.isLogin = false;
};*/

// $('load', function(){
//   console.log(localStorage.isLogin);
//    if(localStorage.getItem("isLogin") == true){
//        console.log("get true");
//      window.location.href = 'home.html';
//
//    }
//  });

$(document).ready(function() {
console.log(localStorage.isLogin);
  if(localStorage.isLogin){
     window.location = "index.html"
  }

  var userListData = [];
    var loginData = [];
    // $('input[name=email]').val('p@gmail.com');
    // $('input[name=password]').val('1234');

  if ("userList" in localStorage){
      userListData = JSON.parse(localStorage.getItem("userList"));
      console.log(userListData);
    }
$("#signin").click(function(e) {
console.log("signin click");
var email = $("#email").val();
var password = $("#password").val();

if (email == '' || password == '') {
alert("Please fill all fields...!!!!!!");
}
else if (password.length < 4) {
  alert("Password should atleast 4 character in length...!!!!!!");
}
 else {
   for (var i = 0; i < userListData.length; i++) {
     if (email == userListData[i].email && password == userListData[i].password) {
       var fullName = userListData[i].fname + " " + userListData[i].lname;
         //localStorage.isLogin = true;
         loginData.push(({fullName, email}));
         localStorage.setItem("loginData", JSON.stringify(loginData));

         if($("#remember").prop('checked') == true){
          // console.log("checked");
          localStorage.isLogin = true;
        }else{
          localStorage.isLogin = false;
        }
         alert ("Login successfully");
         // window.location.replace
         window.location.href = 'index.html';
          return false;
 }
}
alert('Invalid Username or Password! Please try again.');
    e.preventDefault();
    window.location="login.html";

}
})});
