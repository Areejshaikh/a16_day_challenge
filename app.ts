// Question 46:
const laptop = {
    make :"Dell",
    model : "XPS 15",
    year :"2021",
    describe : function () {
        console.log(`This laptop is ${this.year} ${this.make}
        and ${this.model}`);
    }
};
laptop.describe();

// Question 47:

let Advanced_laptop  = [
    {make:"Dell" ,model :"XPS 15" ,year : 2021},
    {make:"Apple" ,model :"MacBook Pro" ,year : 2020},
    {make:"HP" ,model :"Spectre x360" ,year : 2021},
] ;

let [laptop1 , laptop2] = Advanced_laptop;
console.log(laptop1);
console.log(laptop2);
// Question 48:


let laptop_prices1 = [12000, 15000, 99000];
let laptop_prices2 = [10000, 1300, 16000];
let TotalPrices = [...laptop_prices1, ...laptop_prices2]
.sort((a, b) => a - b);
console.log(TotalPrices);
