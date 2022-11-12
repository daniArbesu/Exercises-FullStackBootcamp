const replaceNonVegan = (foods, fruits) => {
    const newFood = [];
    let i = 0;

    for (let food of foods){
        if (food.isVegan) newFood.push(food)
        else {
            newFood.push({name: fruits[i], isVegan: true});
            i++;
        }
    }
    console.log(newFood);
};

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

replaceNonVegan(foodSchedule, fruits);