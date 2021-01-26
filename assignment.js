
//1. Kilometer to meter convert:
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(50);
console.log(result);


//2.Budget Calculator:
function budgetCalculator(howMuchWatch, howMuchMobile, howMuchLaptop) {
    var watch = howMuchWatch * 50;
    var mobile = howMuchMobile * 100;
    var laptop = howMuchLaptop * 1000;
    var totalPrice = watch + mobile + laptop;
    return totalPrice;
}
var price = budgetCalculator(5, 10, 2);
console.log(price);


// 3. Hotel Total Cost:
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDaysCost = remainingDays * 80;
        cost = firstTenDaysCost + secondTenDaysCost;
    }
    else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remainingDays = day - 20;
        var otherDaysCost = remainingDays * 50;
        cost = firstTenDaysCost + secondTenDaysCost + otherDaysCost;
    }
    return cost;

}
var totalCost = hotelCost(35);
console.log(totalCost);



//4. Mega Friend name search:

function megaFriend(name) {
    var nameLength = 0;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > nameLength) {
            var nameLength = name[i].length;
            var bigName = name[i];
        }
    }
    return bigName;
}
var count = megaFriend(['Kamal', 'Jamal', 'Hossain', 'zim', 'Jobayer', 'Rayhan', 'Iftekhar']);
console.log(count);


