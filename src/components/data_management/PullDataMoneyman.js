import axios from "axios";
import {calculateTheSumOfTheCategory} from "./CalculationUtils";
import {companiesApi} from "./CompaniesAPI";

const pullFileData = async (file_id, sheet_name) => {
  const accessToken = sessionStorage.getItem("token");
  const options = {headers: {Authorization: "Bearer " + accessToken}};
  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${file_id}/values/${sheet_name}`,
    options
  );
  return response.data.values;
}; //This function returns array. each array is representing a line from the google Sheet file.

const findMyCompanyInfo = (nameOfCompany) => {
  const data = [];
  const n = nameOfCompany;
  companiesApi().forEach((company) => {
    company.names.forEach((name) => {
      if (n.replace(/\s/g, "").toLowerCase().includes(name)) {
        data.push(company);
      }
    });
  });

  if (data.length <= 0) {
    return {
      names: ["NotHere"],
      name: "NotHere",
      category: "לא זוהה",
      url: "NotHere",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    };
  } else {
    return data[0];
  }
};

const makeObjs = (array_Of_Arrays) => {
  const result = array_Of_Arrays.map((array) => {
    return {
      category: array[12],
      subCategory: array[13],
      companyName:
        findMyCompanyInfo(array[3]).name === "NotHere"
          ? array[3]
          : findMyCompanyInfo(array[3]).name,
      amount: array[2],
      date: array[0],
      originalDate: array[1],
      month: array[0][3] + array[0][4],
      year: array[0][6] + array[0][7] + array[0][8] + array[0][9],
      card: array[6].toString(),
      moreInfo: array[4],
      companyInfo: findMyCompanyInfo(array[3]),
    };
  });

  return result;
}; //this function returns array of objects, each object is represnting trnsxtion.

const generateArrayOfSubCompaniesSummationData = (array) => {
  let result = [];
  array.forEach((transaction, index) => {
    const temp = array.filter(
      (obj) => obj.companyName === transaction.companyName
    );
    if (
      result.find((el) => el.name === temp[0].companyName) === undefined ||
      result.length === 0
    ) {
      result.push({
        category: temp[0].category,
        subCategory: temp[0].subCategory,
        transactions: [...temp],
        name: temp[0].companyName,
        companyInfo: findMyCompanyInfo(temp[0].companyName),
        sum: calculateTheSumOfTheCategory(temp),
      });
    }
  });
  return result;
}; //This function returns an array. Each element in the array is an object,
//which contains the name of the sub-category, and the total amount of transactions of that sub-category.

const generateArrayOfSubCategorySummationData = (array) => {
  let result = [];
  array.forEach((transaction, index) => {
    const temp = array.filter(
      (obj) => obj.companyName === transaction.companyName
    );
    if (
      result.find((el) => el.name === temp[0].subCategory) === undefined ||
      result.length === 0
    ) {
      result.push({
        category: temp[0].category,
        subCategory: temp[0].subCategory,
        companies: [...temp],
        name: temp[0].companyName,
        companyInfo: findMyCompanyInfo(temp[0].companyName),
        sum: calculateTheSumOfTheCategory(temp),
      });
    }
  });
  return result;
};

const sortToCategories = (array) => {
  let sortedArray = [];
  array.forEach((transaction, index) => {
    const tempSorted = array.filter(
      (el) => el.category === transaction.category
    );
    if (
      sortedArray.find((obj) => obj.category === tempSorted[0].category) ===
        undefined ||
      sortedArray.length === 0
    ) {
      sortedArray.push({
        category: tempSorted[0].category,
        subCategoriesData: sortToSubCategories(tempSorted),
        transactions: [...tempSorted],
        companies: generateArrayOfSubCompaniesSummationData(tempSorted),
        sum: calculateTheSumOfTheCategory(tempSorted),
        month: tempSorted[0].date[3] + tempSorted[0].date[4],
        year:
          tempSorted[0].date[6] +
          tempSorted[0].date[7] +
          tempSorted[0].date[8] +
          tempSorted[0].date[9],
      });
    }
  });
  return sortedArray;
}; //This function returns an array. Each element in the array is an object,
//This function returns an array. Each member in the array is an object, which contains:
// - Category name,
// - An array of objects that each object contains all the transactions of the category,
// - An array of objects that each object contains the category name and all its sub-categories. That each sub-category is a supplier. And to each supplier the total amount of money spent on that supplier,
// - The total amount of transactions of the same category,
// - The month in which all the withdrawals made from the database were made
// - The year in which all withdrawals made from the database were made

const sortToSubCategories = (array) => {
  let sortedArray = [];
  array.forEach((transaction, index) => {
    const tempSorted = array.filter(
      (el) => el.subCategory === transaction.subCategory
    );
    if (
      sortedArray.find((obj) => obj.category === tempSorted[0].subCategory) ===
        undefined ||
      sortedArray.length === 0
    ) {
      sortedArray.push({
        category: tempSorted[0].subCategory,
        transactions: [...tempSorted],
        companies: generateArrayOfSubCompaniesSummationData(tempSorted),
        sum: calculateTheSumOfTheCategory(tempSorted),
        month: tempSorted[0].date[3] + tempSorted[0].date[4],
        year:
          tempSorted[0].date[6] +
          tempSorted[0].date[7] +
          tempSorted[0].date[8] +
          tempSorted[0].date[9],
      });
    }
  });
  return sortedArray;
};

const sortDuplicatesAndUnvalidDates = (arrayOfDates) => {
  const result = [];
  arrayOfDates.map((date) => {
    if (result.find((el) => el === date) === undefined && date.length === 4) {
      result.push(date);
    }
  });
  return result;
}; // This function returns an array of all the years which transactions took place. (used in the year dropdown.)

export const getMonth = async (file_id, sheet_name, month, year) => {
  const response = await pullFileData(file_id, sheet_name);
  const myRange = response.map(
    (line) => line[0][6] + line[0][7] + line[0][8] + line[0][9]
  );

  const Month = response.filter((row) => {
    if (
      row[0][3] +
        row[0][4] +
        row[0][5] +
        row[0][6] +
        row[0][7] +
        row[0][8] +
        row[0][9] ===
      month + "/" + year
    ) {
      return row;
    }
  });
  const rowDataAsArrayOfObjects = makeObjs(Month);
  const data = {
    range: sortDuplicatesAndUnvalidDates(myRange).sort(),
    data: sortToCategories(rowDataAsArrayOfObjects),
  };
  return data;
}; // This function returns an object.
// The object contains:
// - An array of objects that each object contains information about a particular category.
// - An array of years in which transactions were acquired.

const month = (transactions, month) => {
  const result = transactions.filter((transaction) => {
    if (transaction.month === month) {
      return transaction;
    }
  });
  return {
    month: month,
    transactions: result,
    sum: calculateTheSumOfTheCategory(result),
  };
}; //return object that contain:
// - month: The month that those transactions pulled from.
// - transactions: Array of transactions as objects.
// - sum: The sum of the the transactions.

export const getYearBillData = async (
  file_id,
  sheet_name,
  companyName,
  year
) => {
  const response = await pullFileData(file_id, sheet_name);

  const Year = response.filter((row) => {
    if (row[0][6] + row[0][7] + row[0][8] + row[0][9] === year) {
      return row;
    }
  });

  const transactions = makeObjs(Year); //Convert all the transactions to objects.

  const companyData = transactions.filter(
    (transaction) => transaction.companyName === companyName
  ); //find only the transactions of my company all.

  const sortMonths = () => {
    const result = [];
    companyData.forEach((transaction) => {
      if (result.find((obj) => obj.month === transaction.month) === undefined) {
        result.push(month(companyData, transaction.month));
      }
    });
    return result;
  };

  const months = sortMonths();
  const yearSum = () => {
    let sum = 0;
    months.forEach((value) => {
      sum += value.sum;
    });
    return sum;
  };

  const yearTransactionsSum = () => {
    let sum = 0;
    months.forEach((value) => {
      sum += value.transactions.length;
    });
    return sum.toString();
  };
  return {data: months, sum: yearSum(), transactionsSum: yearTransactionsSum()};
}; // Return object that contain:
// - data: Array of objects each object is a transaction.
// - arrayOfMonthsData: Array of arrays that each array contains transactions of a specific business in each month..
