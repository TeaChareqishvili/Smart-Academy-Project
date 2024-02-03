
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

 // RENDER INFO ABOUT US 

 const aboutUsText = document.querySelector('.about-us-text')

 const aboutUs = [
    {
        text1:`საქართველოს 150 უმსხვილესი კერძო კომპანიის ჯამური შემოსავალი. წარმოგიდგენთ საქართველოს ყველაზე მაღალი შემოსავლის მქონე კერძო 
               კომპანიების რეიტინგს, რომელიც კომპანიების მიერ საჯაროდ
               გამოქვეყნებული ფინანსური ანგარიშგებების საფუძველზე შედგა`,
        text2: `უმსხვილესი კომპანიების რეიტინგისგან განსხვავებით, რომელშიც კომპანიები აქტივების ღირებულების, შემოსავლებისა და 
                წმინდა მოგების საფუძველზე შემდგარი ინდექსის მიხედვით არიან დალაგებული, ყველაზე 
                შემოსავლიანი კომპანიების სიაში რანჟირება მათი შემოსავლების მიხედვით არის გაკეთებული.`,
        text3: `უმსხვილესი კომპანიების რეიტინგისგან განსხვავებით, რომელშიც კომპანიები აქტივების ღირებულების, 
                შემოსავლებისა და წმინდა მოგების საფუძველზე შემდგარი ინდექსის მიხედვით არიან 
                დალაგებული, ყველაზე შემოსავლიანი კომპანიების სიაში რანჟირება მათი შემოსავლების მიხედვით არის გაკეთებული.`
    }
]

aboutUs.map((text)=>{
    if(aboutUsText){
        aboutUsText.innerHTML += `
        <p>${text.text1}</p>
        <br>
        <p>${text.text2}</p>
        <br>
        <p>${text.text3}</p>
    `
    }
  
})


// SERVICE SECTION

const serviceWrapper = document.querySelector('.service-wrapper')

// DATA FOR SERVICE SECTION
const services = [
    {
        image:"./images/services/service1.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service2.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service3.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service4.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service5.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service6.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service7.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service8.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
    {
        image:"./images/services/service9.png",
        serviceTitle:"სერვისის დასახელება",
        serviceInfo:"ერთი ან რამდენიმე ადამიანის მიერ შექმნილი საიტი, რეგულარული ჩანაწერები..",
        // button: {
        //     text: "გაეცანით",
        //     // link
        // }
    },
]


// RENDERING SERVICE DATA 

services.map((item)=>{
    if(serviceWrapper){
        serviceWrapper.innerHTML += `
    
        <div class="service-data">
             <div class="service-image">
                 <img src="${item.image}" alt="service"/>
             </div>
                <h5>${item.serviceTitle}</h5>
                <p>${item.serviceInfo}</p>
            <button class="learn-more">გაეცანით</button>
        </div>
    `
    }
   
})

// RENDERING SERVER DATA FOR MAIN PAGE 

 const serviceDataMain = document.querySelector('.service-data-main')

 services.slice(0,3).map((item)=>{
    if(serviceDataMain){
        serviceDataMain.innerHTML += `
        <div class="main-service-info">
           <div class="service-image">
              <img src="${item.image}" alt="service"/>
           </div>
              <h5>${item.serviceTitle}</h5>
              <p>${item.serviceTitle}</p>
           <button class="learn-more">გაეცანით</button>
        </div>   
  `
    }
 })
