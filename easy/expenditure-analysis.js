/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();
  transactions.forEach((transaction) => {
    const category = transaction.category;
    const price = transaction.price;
    if (map.get(category)) {
      map.set(category, map.get(category) + price);
    } else {
      map.set(category, price);
    }
  });
  let outputArray = Array.from(map, ([name, value]) => ({
    category: name,
    totalSpent: value,
  }));

  return outputArray;
}

module.exports = calculateTotalSpentByCategory;
