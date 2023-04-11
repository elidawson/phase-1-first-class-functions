function receivesAFunction (eatfood) {
    eatfood()
}

function returnsANamedFunction () {
    return function yummyLog () {
        console.log(yummy)
    }
}
function returnsAnAnonymousFunction () {
    return function () {console.log(yummy)}
}