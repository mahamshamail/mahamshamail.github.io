$(document).ready(function() {
  var userList = [];
    var loginData = [];
    if ("loginData" in localStorage){
        loginData = JSON.parse(localStorage.getItem("loginData"));
        console.log(loginData);
      }
      $("#btnChangePassword").click(function() {
        var oldPwd = $("#oldpassword").val();
        var newPwd = $("#newpassword").val();
        var newConfiPwd = $("#newcpassword").val();

        if ("userList" in localStorage){
            userList = JSON.parse(localStorage.getItem("userList"));
            if (oldPwd == '' || newPwd == '' || newConfiPwd == '') {
            alert("Please fill all fields...!!!!!!");
          }else{
            for (var i = 0; i < userList.length; i++) {
              console.log(loginData[0].email);
              console.log(userList[i].email);
                if (loginData[0].email == userList[i].email) {

                  if (oldPwd != userList[i].password) {
                  alert("Please provide correct old password.");
                  }
                  else if (newPwd.length < 4) {
                    alert("Password should atleast 4 character in length...!!!!!!");
                  }

                  else if (!(newPwd).match(newConfiPwd)) {
                  alert("Your passwords don't match. Try again?");
                  }

                  else {
                    userList[i].password = newPwd;
                    console.log("new userdata" + userList[i].password);
                    alert ("Password changed successfully");
                    window.location.href = 'index.html';
                  }
                  break;
                }
              }
            }
              localStorage.setItem("userList", JSON.stringify(userList));
                        console.log(userList);

            }

      });

});
