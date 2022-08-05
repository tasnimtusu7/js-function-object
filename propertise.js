var shoppingCard = {
    iceCream : 40,
    chocolate : 20,
    earring : 50,
    churi : 30
}
var churicount = shoppingCard.churi;
var churicount2 = shoppingCard['churi'];
var propertise = Object.keys (shoppingCard);
console.log(propertise);
var propertyValue = Object.values(shoppingCard);
console.log(propertyValue);
shoppingCard. iceCream = 100;
console.log(shoppingCard);