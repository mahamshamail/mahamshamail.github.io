// const e1=  document.getElementById('coverUp');
// const e =  document.getElementById('popUp');
// function popUp( n){
//      console.log(  " n "+n.title);
//     e.style.visibility = "visible";
//     e1.style.visibility = "visible";
//     e1.style.backgroundColor = "rgba(195, 44, 44)";
//     e1.style.width = "100%";
//     e1.style.height = "400%";
//     e1.style.position = "absolute";
//     e1.style.backgroundColor ="rgba(49, 45, 45, 0.63)";
//     e1.style.top = "0";
  
  
//    e.style.backgroundColor = "rgba(195, 44, 44)";
//    e.style.position = "absolute";
//    e.style.width = "900px";
//    e.style.height = "700px";
//    e.style.borderRadius = "50px";
//    e.style.margin="auto auto auto auto";
//    e.style.verticalAlign = "middle";
//    e.style.transform = "translate(50%, 80%)"  
// }

// function popUpClose() { 
//     e.style.visibility = "hidden";
//     e1.style.visibility = "hidden";
// }
// var menuItems = [];
//  const menuURL = "https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json";
//  var menuList = []
// $('load', function(){
//     callAPI()
// })

// function callAPI(){

//   let response = fetch(menuURL)
//     .then(response => response.json())
//     .then(data => {
//       menuList = data
//         appendData()
//     })
//     .catch( (err) => {
//       alert(err);
//     });
// }
// var dataTag = document.getElementById('menuItem');

// function appendData(){
//     for (i=0 ; i<menuList.length ; i++){
      
//       //   console.log(menuList[i]);
//        var item = '<div >'+menuList[i].Title+'</div>'
//           $('#menuItem').append(item)
        
      
//      }
//   }