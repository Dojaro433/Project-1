
//write a filter programe to show the highest value for the Device

// const Product = [
//   {
//     ProductName: "DeLta",
//     price: 54000,
//     brand: "Dell",

//   },

//   {
//     ProductName: "LenovoM",
//     price: 66000,
//     brand: "Lenovo",
//   },

//   {
//     ProductName: "Mackbook",
//     price: 15000,
//     brand: "Apple",
//   },

//   {
//     ProductName: "Samsung Galaxy",
//     price: 14000,
//     brand: "Samsung",
//   },

//   {
//     ProductName: "Redmitwel",
//     price: 11000,
//     brand: "Redmi",
//   },

//   {
//     ProductName: "iphone",
//     price: 12000,
//     brand: "Appple",
//   },
//   {
//     ProductName: "Techno6",
//     price: 23000,
//     brand: "Techno",
//   }



// ];


// let Userprice = Number(prompt("Enter the value"));

// const productfilter = Product.filter(value => {
//   if (Userprice >= value.price) {
//     console.log(value);
//   }
//   else {
//     console.log("Value not found");
//   }

// });


//Write a programe to show the price of the individual device


//  Product = [
//   {
//    ProductName:"DeLta",
//    price:54000,
//    brand:"Dell",

//  },

//  {
//    ProductName:"LenovoM",
//    price:66000,
//    brand:"Lenovo",
//  },

//  {
//    ProductName:"Mackbook",
//    price:15000,
//    brand:"Apple",
//  },

//  {
//    ProductName:"Samsung Galaxy",
//    price:14000,
//    brand:"Samsung",
//  },

//  {
//    ProductName:"Redmitwel",
//    price:11000,
//    brand:"Redmi",
//  },

//  {
//    ProductName:"iphone",
//    price:12000,
//    brand:"Appple",
//  },
//  {
//    ProductName:"Techno6",
//    price:23000,
//    brand:"Techno",
//  }



// ];


// let Userdata = prompt ("Enter the value");

// const productpurifier = Product.filter(row => {
//   if(Userdata == row.price){
//     console.log(row);
//   }


// });




const products = [
  {

    itemname: "friz",
    price: 18000,
    company: "dell",


  },

  {

    itemname: "Washing maschine",
    price: 22000,
    company: "samsung",


  },
  {

    itemname: "Led TV",
    price: 32000,
    company: "Onida",


  },

  {

    itemname: "Laptop",
    price: 30000,
    company: "dell",


  },

  {

    itemname: "Redmi note 3",
    price: 28000,
    company: "Redmi",


  },


]

let Uservalue = Number(prompt("Enter the value"))

const productway = products.filter(era =>{

  if(Uservalue <= era.price )

  console.log(era);

  else{

   console.log("value not found")
  }




})



