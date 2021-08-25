/*--------------------
Seer To Mon Function
--------------------*/
function seerToMon(seer) {
    if (typeof seer != 'number') {
        return "Please enter a valid Seer number"
    } else if (seer < 0) {
        return "Please enter a Positive Number"
    } else {
        const mon = seer / 40;
        return mon
    }
}
console.log(seerToMon(80));


/*--------------------
Total Sales Function
--------------------*/
function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
    if (typeof shirtsQuantity != 'number' || shirtsQuantity < 0 || typeof pantsQuantity != 'number' || pantsQuantity < 0 || typeof shoesQuantity != 'number' || shoesQuantity < 0) {
        return "Please enter a valid quantity of Product"
    } else {
        const shirtsPrice = 100 * shirtsQuantity;
        const pantsPrice = 200 * pantsQuantity;
        const shoesPrice = 500 * shoesQuantity;
        const totalPrice = shirtsPrice + pantsPrice + shoesPrice;
        return totalPrice;
    }
}
console.log(totalSales(2,4,1));


/*----------------------
Delivery Cost Function
-----------------------*/
function deliveryCost(tShirtsQuantity) {
    const deliveryCostFirst100Piss = 100;
    const deliveryCostSecond100Piss = 80;
    const deliveryCostRestPiss = 50;
    if (typeof tShirtsQuantity != 'number') {
        return "Please enter a valid Number of tShirts Quantity"
    } else if (tShirtsQuantity < 0) {
        return "Please enter a Positive Number Of tShirts Quantity"
    } else if (tShirtsQuantity <= 100) {
        const cost = tShirtsQuantity * deliveryCostFirst100Piss;
        return cost;
    } else if (tShirtsQuantity <= 200) {
        const first100PissCost = 100 * deliveryCostFirst100Piss;
        const restPiss = tShirtsQuantity - 100;
        const second100PissCost = restPiss * deliveryCostSecond100Piss;
        const totalCost = first100PissCost + second100PissCost;
        return totalCost
    } else {
        const first100PissCost = 100 * deliveryCostFirst100Piss;
        const second100PissCost = 100 * deliveryCostSecond100Piss;
        const restPiss = tShirtsQuantity - 200;
        const restPissCost = restPiss * deliveryCostRestPiss;
        const totalCost = first100PissCost + second100PissCost + restPissCost;
        return totalCost;
    }
}
console.log(deliveryCost(201));


/*----------------------
Perfect Friend Function
-----------------------*/
function perfectFriend(friendsName) {
    for (const name of friendsName) {
        if (typeof name != 'string') {
            return "Please enter valid name in string";
        } else if (name.length == 5) {
            return name;
        }
    }
}
var friends = perfectFriend(["Mark", "Rifat", "Nahid", "Moshur", "Marufa", "Ratri"]);
console.log(friends);