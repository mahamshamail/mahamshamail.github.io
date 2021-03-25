// console.log("here")
var menuItems = [];
var filters = []
var loginData = [];
var quantityStart = 1; //quantity of an item to be added on add to cart button
if ("loginData" in localStorage){
    loginData = JSON.parse(localStorage.getItem("loginData"));
    console.log(loginData);
  }

function loginSessionUI(){
console.log(localStorage.isLogin);
if(localStorage.isLogin){
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
  window.location.href = 'index.html';
      }else{
        return false;
    }
}





var dataTag = document.querySelector('.data');


const menuURL = "https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json";
var menuList = []
$('load', function(){
    callFoodAPI();
    loginSessionUI();

})

function callFoodAPI(){

  let response = fetch(menuURL)
    .then(response => response.json())
    .then(data => {
    //   console.log(data);

      menuList = data
        appendData()
        appendFilterData()
    })
    .catch( (err) => {
      alert(err);
    });
}




function appendData(){
  for (i=0 ; i<menuList.length ; i++){
    // b.title = menuList[i].Title;
    //  console.log(b);
    //   console.log(menuList[i]);
     var item = '<div id="grid'+(i)+'" class="grid '+(i)+'" onclick="popUp('+i+')">'+
     '<img class="pic 1" src="'+menuList[i].Image+'">'+
      '<h5 id="title">'+menuList[i].Title+'</h5>'+
     '<br>'+
     '<div class="title-price">'+
       '<i class="star"></i>'+
       '<h5 id="ratings" style="margin-top: 8px; margin-left: 5px;">'+menuList[i].Ratings+'</h5>'+
       '<h5 id="category" >'+menuList[i].Category+'</h5>'+
       '<h4 id="price">$'+menuList[i].Price+'</h4>'+
     '</div>'+
  '</div>'
  
        $('.data').append(item)
        if(menuList[i].Available !== 1){
          document.getElementById("grid"+i).style.opacity = "0.3";
          // document.getElementById("grid"+i).style. = "Unavailble";
         
        }
      
    
   }
}


function appendFilterData(){
   
    dataTag = document.querySelector('.filter-div');
    for (i=0 ; i<menuList.length ; i++){
        if (!filters.includes(menuList[i].Category)){
        // console.log(menuList[i]);
      
       var item = '<div   class="filter-wrap" onclick="filterMenu('+i+')">'+
      ' <div  class="filter">'+
      '<img class="pic-filter" src="'+menuList[i].Image+'">'
      +'</div>'+
     '  <h6 style=" color: var(--greenTxt); font-size:17px;">'+menuList[i].Category+'</h6>'+
    ' </div>'
          $('.filter-div').append(item)
          filters.push(menuList[i].Category);
        }
     }
  }

function foodItemPopUp(){
    alert("here");
}

const e1=  document.getElementById('coverUp');
const e =  document.getElementById('popUp');
var im = document.getElementById('popImg');
var tt = document.getElementById('popUpTitle');
var star = document.getElementById('popStar');
var clos = document.getElementById('popUpClose');

var popRating = document.getElementById('popRatings');
var popCategory = document.getElementsByClassName('popCategory');
var popPrice = document.getElementsByClassName('popPrice');
//var popShadow = document.getElementById('popCategory');
var avail = document.getElementById('avail');
var availability = document.getElementById('availability');
var q = document.getElementById('quantity');
var desc = document.getElementById('desc');
var qP = document.getElementById('quantity-price');
var gridNumClicked = 0;
var shadow = document.getElementById("shadow");
var shadow2 = document.getElementById("shadow2");
var shadow3 = document.getElementById("shadow3");
function popUp( num){
  quantityStart = 1; 
  gridNumClicked =  num;
     console.log(num );
    e.style.visibility = "visible";
    e1.style.visibility = "visible";
    e1.style.backgroundColor = "rgba(195, 44, 44)";
    e1.style.width = "100%";
    e1.style.height = "400%";
    e1.style.position = "absolute";
    e1.style.backgroundColor ="rgba(49, 45, 45, 0.83)";
    e1.style.top = "0";
   e.style.backgroundColor = "rgb(120, 45, 35) ";
   e.style.position = "absolute";
   e.style.width = "900px";
   e.style.height = "800px";
   e.style.borderRadius = "50px";
   e.style.border= "20px tomato solid";
   e.style.margin="auto auto auto auto";
   e.style.verticalAlign = "middle";
   e.style.transform = "translate(50%, 80%)"  
   im.src = menuList[num].Image
   im.style.height = "300px"
   im.style.width = "300px";
   im.style.padding = "10px";
   im.style.margin = "15px";
   im.style.marginLeft = "35px";
   im.style.borderRadius = "20px";
   im.style.objectFit = "cover";
   im.style.backgroundColor = "var(--secondaryText)";
   tt.innerHTML = menuList[num].Title;
   desc.innerHTML = menuList[num].Description;
   tt.style.visibility = "visible";
   star.style.visibility = "visible";
   clos.style.visibility = "visible";
   if(menuList[gridNumClicked].Available == 1){
    avail.style.visibility = "visible";
    availability.style.visibility = "hidden";
   }else{
    avail.style.visibility = "hidden";
    availability.style.visibility = "visible";
    availability.innerHTML= "Out of Stock";
    availability.style.color = "var(--greenTxt)";
    availability.style.textAlign ="center";
    availability.style.fontSize = "30px";
    availability.style.padding = "50px"
   }
   
   shadow.style.visibility = "visible";
   shadow2.style.visibility = "visible";
   shadow3.style.visibility = "visible";
   
   q.innerHTML = 1;
   qP.innerHTML = 'Add '+1+ ' to order: '+menuList[num].Price;
   popRating.innerHTML = menuList[num].Ratings;
   shadow3.innerHTML = "$ "+menuList[num].Price;
   shadow2.innerHTML = menuList[num].Category;

}

function popUpClose() { 
    e.style.visibility = "hidden";
    e1.style.visibility = "hidden";
    tt.style.visibility = "hidden";
    star.style.visibility = "hidden";
    clos.style.visibility = "hidden";
    avail.style.visibility = "hidden";
    shadow.style.visibility = "hidden";
    shadow2.style.visibility = "hidden";
    shadow3.style.visibility = "hidden";
}

function filterMenu(num){
 // dataTag = document.querySelector('.filter-div');
 console.log(num);
 
   const myNode = document.getElementById("data-grid");
   while (myNode.firstChild) {
    console.log(num);
    myNode.removeChild(myNode.lastChild);
  }

  for (i=0 ; i<menuList.length ; i++){
      if (menuList[i].Category === menuList[num].Category){
        document.getElementById("menu-title").innerHTML = menuList[num].Category;
    
        var item = '<div class="grid '+(i)+'" onclick="popUp('+i+')">'+
        '<img class="pic 1" src="'+menuList[i].Image+'">'+
         '<h5 id="title">'+menuList[i].Title+'</h5>'+
        '<br>'+
        '<div class="title-price">'+
          '<i class="star"></i>'+
          '<h5 id="ratings" style="margin-top: 8px; margin-left: 5px;">'+menuList[i].Ratings+'</h5>'+
          '<h5 id="category" >'+menuList[i].Category+'</h5>'+
          '<h4 id="price">$'+menuList[i].Price+'</h4>'+
        '</div>'+
     '</div>'
    $('.data').append(item)
      
     }
   } 

}

function filterMenuByLowPrice(){
  // dataTag = document.querySelector('.filter-div');
  console.log("low price");
  
    const myNode = document.getElementById("data-grid");
    while (myNode.firstChild) {
    //  console.log(num);
     myNode.removeChild(myNode.lastChild);
   }
 
   for (i=0 ; i<menuList.length ; i++){
       if (menuList[i].Price <6 ){
         document.getElementById("menu-title").innerHTML = "$5 Menu";
     
         var item = '<div class="grid '+(i)+'" onclick="popUp('+i+')">'+
         '<img class="pic 1" src="'+menuList[i].Image+'">'+
          '<h5 id="title">'+menuList[i].Title+'</h5>'+
         '<br>'+
         '<div class="title-price">'+
           '<i class="star"></i>'+
           '<h5 id="ratings" style="margin-top: 8px; margin-left: 5px;">'+menuList[i].Ratings+'</h5>'+
           '<h5 id="category" >'+menuList[i].Category+'</h5>'+
           '<h4 id="price">$'+menuList[i].Price+'</h4>'+
         '</div>'+
      '</div>'
     $('.data').append(item)
       
      }
      
    } 
 
 }

 function filterMenuByMidPrice(){
  // dataTag = document.querySelector('.filter-div');
  console.log("low price");
  
    const myNode = document.getElementById("data-grid");
    while (myNode.firstChild) {
    //  console.log(num);
     myNode.removeChild(myNode.lastChild);
   }
 
   for (i=0 ; i<menuList.length ; i++){
       if (menuList[i].Price >5 &&  menuList[i].Price <11){
         document.getElementById("menu-title").innerHTML = "$10 Menu";
     
         var item = '<div class="grid '+(i)+'" onclick="popUp('+i+')">'+
         '<img class="pic 1" src="'+menuList[i].Image+'">'+
          '<h5 id="title">'+menuList[i].Title+'</h5>'+
         '<br>'+
         '<div class="title-price">'+
           '<i class="star"></i>'+
           '<h5 id="ratings" style="margin-top: 8px; margin-left: 5px;">'+menuList[i].Ratings+'</h5>'+
           '<h5 id="category" >'+menuList[i].Category+'</h5>'+
           '<h4 id="price">$'+menuList[i].Price+'</h4>'+
         '</div>'+
      '</div>'
     $('.data').append(item)
       
      }
      
    } 
 
 }

 function filterMenuByHighPrice(){
  // dataTag = document.querySelector('.filter-div');
  console.log("low price");
  
    const myNode = document.getElementById("data-grid");
    while (myNode.firstChild) {
    //  console.log(num);
     myNode.removeChild(myNode.lastChild);
   }
 
   for (i=0 ; i<menuList.length ; i++){
       if (menuList[i].Price >10){
         document.getElementById("menu-title").innerHTML = "$15 Menu";
     
         var item = '<div class="grid '+(i)+'" onclick="popUp('+i+')">'+
         '<img class="pic 1" src="'+menuList[i].Image+'">'+
          '<h5 id="title">'+menuList[i].Title+'</h5>'+
         '<br>'+
         '<div class="title-price">'+
           '<i class="star"></i>'+
           '<h5 id="ratings" style="margin-top: 8px; margin-left: 5px;">'+menuList[i].Ratings+'</h5>'+
           '<h5 id="category" >'+menuList[i].Category+'</h5>'+
           '<h4 id="price">$'+menuList[i].Price+'</h4>'+
         '</div>'+
      '</div>'
     $('.data').append(item)
       
      }
      
    } 
 
 }
const quantity = document.getElementById("quantity");
const quantityPrice = document.getElementById("quantity-price");

 function incrementAddToOrder(){
  quantityStart++;
  quantity.innerHTML = quantityStart;
  quantityPrice.innerHTML = 'Added '+quantityStart+' to order: $'+(menuList[gridNumClicked].Price * quantityStart);
 }

 function decrementSubFromOrder(){
  quantityStart--;
  quantity.innerHTML = quantityStart;
  quantityPrice.innerHTML = 'Added '+quantityStart+' to order: $'+(menuList[gridNumClicked].Price * quantityStart);

 }
 const checkOut = document.getElementById("check-out");
 const cartPopUp = document.getElementById("cart-popUp");
 const cartHead = document.getElementById("cartHead");
 cartHead.style.visibility = "hidden";
 checkOut.style.visibility = "hidden";
 const hrPop = document.getElementById("hr-pop");
 hrPop.style.visibility= "hidden";
 var clicked = false;
 function cartClicked(){
   clicked = !clicked;
   if(clicked == false){
     cartPopUp.style.visibility = "hidden";
     checkOut.style.visibility = "hidden";
     cartHead.style.visibility = "hidden";
     hrPop.style.visibility = "hidden";
   }else{
    cartPopUp.style.visibility = "visible";
    checkOut.style.visibility = "visible";
    cartHead.style.visibility = "visible";
    hrPop.style.visibility = "visible";

   }
   console.log("cartClicked");
   cartPopUp.style.height = '700px';
   cartPopUp.style.width = '400px';
   cartPopUp.style.backgroundColor = "tomato";
   cartPopUp.style.position = "absolute";
   cartPopUp.style.right = 160;
   cartPopUp.style.top = 120;
   cartPopUp.style.borderRadius = "20px 0px 20px 20px";
   cartPopUp.style.overflow = "scroll";
  //  cartPopUp.style.textAlign = "center"
   
   
  


 }

 var cartNum = document.getElementById("cart-num");
 var itemsAdded =0;
 function addToCart(){
  console.log("addToCart");
  itemsAdded++;
  cartNum.innerHTML = itemsAdded;
  //cartPopUp.innerHTML = cartPopUp.innerHTML+" "+menuList[gridNumClicked].Title+"\n";
  appendCartData();



 }
 
 var listOfOrders = "";
 var check0ut = document.getElementById("check0ut");
 var totalPrice = 0;
 function appendCartData(){
   totalPrice = totalPrice + (menuList[gridNumClicked].Price * quantityStart);
   dataTag = document.querySelector('.cart-data');
    listOfOrders = listOfOrders + "-" +menuList[gridNumClicked].Title + "-" + quantityStart  + "-" + menuList[gridNumClicked].Price * quantityStart;
     var item = '<div class="cartData" >'+
                  '<div id="cart-container">Qty: '+
                  // +' <div class=" in2 " >+</div>'+
                       quantityStart +': '+
                      //  ' <div class=" in2 dec2" >-</div>'+
                      menuList[gridNumClicked].Title
                      +':'+ '<div id="cart-price">$'+(menuList[gridNumClicked].Price * quantityStart) +'</div>'+
                   '</div>'+
                ' </div>'
        $('.cart-data').append(item)
       check0ut.innerHTML = "Next: Check Out: $"+totalPrice;
  localStorage.setItem('totalPrice', totalPrice);
  console.log(listOfOrders);
  localStorage.setItem('orderlist', listOfOrders);

}

function closeCart(){
  clicked = false;
  cartPopUp.style.visibility = "hidden";
  cartHead.style.visibility = "hidden";
  checkOut.style.visibility = "hidden";
  hrPop.style.visibility = "hidden";

}
