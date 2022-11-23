const rollDice = (sides) => {
    return 1 + Math.floor(sides * Math.random());
}

console.log(rollDice(6));