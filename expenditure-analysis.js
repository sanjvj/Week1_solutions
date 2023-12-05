function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];

      let categoryFound = false;
      for (let j = 0; j < result.length; j++) {
          if (result[j].category === transaction.category) {
              categoryFound = true;
              break;
          }
      }

      if (!categoryFound) {
          result.push({ category: transaction.category, totalSpent: 0 });
      }

      for (let j = 0; j < result.length; j++) {
          if (result[j].category === transaction.category) {
              result[j].totalSpent += transaction.price;
              break;
          }
      }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
