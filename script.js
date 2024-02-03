
 // DATA FOR SERVICE ON MAIN PAGE 

 const serviceDataMain = document.querySelector('.service-data-main')

 const serviceMain = [
     {
             img:"./images/services/service3.png",
             title:"სერვისის დასახელება",
             info:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
             // button: {
             //     text: "გაეცანით",
             //     // link
             // }
         
     },
     {  
         img:"./images/services/service10.png",
             title:"სერვისის დასახელება",
             info:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
         // button: {
         //     text: "გაეცანით",
         //     // link        // }
     
     },
     {  
         img:"./images/services/service11.png",
         title:"სერვისის დასახელება",
         info:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
         // button: {
         //     text: "გაეცანით",
         //     // link        // }
     
     },
 
 ]
 
 serviceMain.map((item)=>{
     serviceDataMain.innerHTML += `
           <div class="main-service-info">
              <div class="service-image">
                 <img src="${item.img}" alt="service"/>
              </div>
                 <h5>${item.title}</h5>
                 <p>${item.info}</p>
              <button class="learn-more">გაეცანით</button>
           </div>   
     `
 })


 // burger menu function 

 const burgerMenu = document.querySelector('.burger-menu')
 const mobileNavigationwrapper = document.querySelector('.mobile-navigation-wrapper')
 const topLine = document.querySelector('.top-line')
 const bottomLine = document.querySelector('.bottom-line')
 const middleLine = document.querySelector('.middle-line')

 // BURGER MENU OPEN WITHOUT ANIMATION

//  burgerMenu.addEventListener('click', function() {
//     mobileNavigationwrapper.classList.toggle('active');
// });


// BURGER MENU OPEN WITH ANIMATION

burgerMenu.addEventListener('click', function () {
    const isOpen = mobileNavigationwrapper.classList.toggle('active');

    topLine.classList.toggle('rotate-top-line', isOpen);
    middleLine.classList.toggle('rotate-middle-line', isOpen);
    bottomLine.classList.toggle('rotate-bottom-line', isOpen);

    topLine.classList.toggle('rotate-top-back', !isOpen);
    middleLine.classList.toggle('rotate-middle-back', !isOpen);
    bottomLine.classList.toggle('rotate-bottom-back', !isOpen);
});

