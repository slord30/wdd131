const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productList = document.getElementById("product_name");

document.addEventListener("DOMContentLoaded", function () {
    products.forEach(product => {
        //create an option for each product. "option" is an element name in our html
        const option = document.createElement("option"); 
        option.value = product.id; //id is assigned to the id in the products array. Value is from our html
        option.textContent = product.name; //make the tex show up in the form
        productList.appendChild(option); //
    });
});