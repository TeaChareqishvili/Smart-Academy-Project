

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
console.log("olaaa")

// RENDERING SERVICE DATA 

services.map((item)=>{
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
})