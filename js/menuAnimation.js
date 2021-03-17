function navSlide(){
    // const burger = document.querySelector('.burger');
    // const nav = document.querySelector('.nav-links');
    // const navLinks = document.querySelectorAll('.nav-links li');

    // burger.addEventListener('click', () => {
       
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => { 
    //         if(link.style.animation){
    //             link.style.animation = '';
    //             nav.style.visibility = 'visible';
                
    //         }
    //         else{
        // console.log("clicked");
          //const link = document.getElementById('closebtn');
         
              console.log("clicked")
                document.getElementById('hideSlide').style.visibility = "hidden";
                document.getElementById('n').style.visibility = "hidden";
        
              //  nav.style.visibility = 'visible';
            // }
            
    //     });
    //     burger.classList.toggle('toggle');
    // });

 
}

function burgerMenuCreation(){
    console.log("burgerMenuCreation clicked")
    document.getElementById('hideSlide').style.visibility = "visible";
    document.getElementById('n').style.visibility = "visible";
}

// const cartPopUp = document.getElementById("cart-popUp");
// var clicked = false;
// function cartClicked(){
//   clicked = !clicked;
//   if(clicked == false){
//     cartPopUp.style.visibility = "hidden";
//   }else{
//    cartPopUp.style.visibility = "visible";
//   }
//   console.log("cartClicked");
//   cartPopUp.style.height = '700px';
//   cartPopUp.style.width = '400px';
//   cartPopUp.style.backgroundColor = "tomato";
//   cartPopUp.style.position = "absolute";
//   cartPopUp.style.right = 160;
//   cartPopUp.style.top = 120;
//   cartPopUp.style.borderRadius = "20px 0px 20px 20px";
//   cartPopUp.style.overflow = "scroll";
//  //  cartPopUp.style.textAlign = "center"

// }
