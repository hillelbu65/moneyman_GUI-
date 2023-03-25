export const calculateTheSumOfTheCategory = (arrayOfCategoryObjects) => {
  let result = 0;
  arrayOfCategoryObjects.map((obj, index) => {
    if (obj.amount[0] === "-") {
      const amount = -+Math.ceil(parseFloat(obj.amount.slice(1)));
      result += amount;
    } else {
      result += Math.ceil(parseFloat(obj.amount));
    }
  });
  return result;
};

export const calculateTheSumOfTheMonth = (arrayOfCategoriesObjects) => {
  let result = 0;
  arrayOfCategoriesObjects.map((obj, index) => {
    result += parseInt(obj.sum);
  });
  return result.toString();
};
