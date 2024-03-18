var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 46:
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: "2021",
    describe: function () {
        console.log("This laptop is ".concat(this.year, " ").concat(this.make, "\n        and ").concat(this.model));
    }
};
laptop.describe();
// Question 47:
var Advanced_laptop = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
var laptop1 = Advanced_laptop[0], laptop2 = Advanced_laptop[1];
console.log(laptop1);
console.log(laptop2);
// Question 48:
var laptop_prices1 = [12000, 15000, 99000];
var laptop_prices2 = [10000, 1300, 16000];
var TotalPrices = __spreadArray(__spreadArray([], laptop_prices1, true), laptop_prices2, true).sort(function (a, b) { return a - b; });
console.log(TotalPrices);
