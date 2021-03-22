var loginData = [];
if ("loginData" in localStorage){
    loginData = JSON.parse(localStorage.getItem("loginData"));
    console.log(loginData);
  }

//   var contain = document.getElementById("contain");
function loginSessionUI(){
//console.log(localStorage.isLogin);
if(localStorage.isLogin){
    // contain.style.visibility = "hidden";
  var sessionData = '<ul id="n" class="nav-links">'+
  '<li id="closebtn" onclick="navSlide()"><a onclick="navSlide()" id="res-button" class="button" target="_blank">X</a></li>'+
  '<li class="xbtn"><a class="button" href="updateprofile.html">Update Profile</a></li>'+
  '<li><a class="button" onclick="logout()">Logout</a></li>'+
  '  </ul>'
    $('.slider').append(sessionData)
     $('#username').text(loginData[0].fullName);
  }
else{
var sessionData = '<ul id="n" class="nav-links">'+
'<li id="closebtn" onclick="navSlide()"><a onclick="navSlide()" id="res-button" class="button" target="_blank">X</a></li>'+
'<li class="xbtn"><a class="button" href="registration.html">Register</a></li>'+
'<li><a class="button" href="login.html">Login</a></li>'+
'  </ul>'
  $('.slider').append(sessionData)
}
}
function logout(){
console.log("logout click");
if(confirm('Are you sure you want to logout?')) {
  localStorage.removeItem("loginData");
  localStorage.removeItem("isLogin");
  window.location.href = 'home.html';
      }else{
        return false;
    }
}

$('load', function(){
   
    loginSessionUI();

})
const totalPrice = localStorage.getItem('totalPrice');
const orderInfo = document.getElementById("order-items-total");
const dataTag = document.querySelector('.order-items');
const orderItems = document.getElementsByClassName('.order-items');
const list = localStorage.getItem('orderlist');
const listArr = list.split("-");
if(localStorage.isLogin){

  const confirm = document.getElementById("confirmed");
  confirm.style.visibility ="visible";
  const cancel = document.getElementById("cancel");
  cancel.style.visibility ="visibles";
orderInfo.innerHTML = "Total Price: $"+totalPrice;

var discountPercent=5;
if(totalPrice > 100 ){
  discountPercent= 30;
  const disPer = document.getElementById("dis-percent");
  disPer.innerHTML = "You get "+discountPercent+"% discount."
  const priceAfter = document.getElementById("total-after-discount");
  priceAfter.innerHTML = "Total After discount: $ "+(totalPrice- ((discountPercent/100)*totalPrice))+"."
}else if(totalPrice > 80 && totalPrice<100 ){
  discountPercent= 20;
  const disPer = document.getElementById("dis-percent");
  disPer.innerHTML = "You get "+discountPercent+"% discount."
  const priceAfter = document.getElementById("total-after-discount");
  priceAfter.innerHTML = "Total After discount: $ "+(totalPrice- ((discountPercent/100)*totalPrice))+"."
}else{
  const disPer = document.getElementById("dis-percent");
  disPer.innerHTML = "You get "+discountPercent+"% discount."
  const priceAfter = document.getElementById("total-after-discount");
  priceAfter.innerHTML = "Total After discount: $ "+(totalPrice- ((discountPercent/100)*totalPrice))+"."

}
}else{
  const confirm = document.getElementById("confirmed");
  confirm.style.visibility ="hidden";
  const cancel = document.getElementById("cancel");
  cancel.style.visibility ="hidden";
  const info = document.getElementById("order-info")
  info.innerText="Please Login or Register First."
  info.style.textAlign ="center";
  const loginbtn = document.createElement("a");
  loginbtn.classList = "button";
  loginbtn.innerHTML = "Login";
  loginbtn.href = "login.html";
  //loginbtn.style.width = "300px";
  info.appendChild(loginbtn);
  const registerbtn = document.createElement("a");
  registerbtn.classList = "button";
  registerbtn.innerHTML = "Register";
  registerbtn.href = "registration.html";
  //loginbtn.style.width = "300px";
  info.appendChild(registerbtn);
}

console.log(listArr);
var i = 1;
function onloadFun(){
  if(localStorage.isLogin){
    while(i<listArr.length){
      console.log(listArr[i+1]+": "+listArr[i]+" $"+listArr[i+2]);
      var item = '<div >Qty: '+listArr[i+1]+' - Name: '+listArr[i]+' - Item Total: $'+listArr[i+2]+ ' </div>';
      orderItems.innerHTML = orderItems.innerHTML+ item;
      $('.order-items').append(item);
      i = i+3;
    }
  }
}
