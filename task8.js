let money = prompt()
let price = prompt()

let result = Math.floor((money / price))
let change = ((money / price) - result) * 500;
alert(result)
alert(change.toFixed(2))