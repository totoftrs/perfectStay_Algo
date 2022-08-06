// export const cost = (shirts) => {
  
//     const price = 800
//     let result = 0
//     let map = {}
    
//     if(shirts.length === 0) {
//       return 0 
//     }
  
//     for (const number of shirts) {
//       if(map[number]) {
//         map[number] +=1
//       } else {
//         map[number] = 1
//       }
//     }
  
//     for (const key in map) {
//      result += map[key] * price
//     }
  
//     if(result === 6400) {
//       return result + (result * -20 / 100)
//     }

//   const CheckLengthObject = Object.keys(map).length

//   switch (CheckLengthObject) {
//     case 2:
//     return result + (result * -5 / 100);

//     case 3:
//     return result + (result * -10 / 100);

//     case 4:
//     return result + (result * -20 / 100);

//     case 5:
//     return result + (result * -25 / 100)
 
//     default:
//       break;
//   }

//   return result
//   }

//SOLUTION --------

const SHIRT_PRICE = 800;
const DISCOUNTS = [1, 0.95, 0.9, 0.8, 0.75];

// cost of the group of <size> distinct products
const groupCost = (size) => size * SHIRT_PRICE * DISCOUNTS[size - 1];

// return an object : key is the id of the shirt and value is the number of shirt of this type
// [1,1,2,3] => {'1':2, '2':1, '3':1}
const groupShirts = (shirts) => {
  const counter = {};
  shirts.forEach((shirt) => {
    if (!counter[shirt.toString()]) {
      counter[shirt.toString()] = 1;
    } else {
      counter[shirt.toString()]++;
    }
  });
  return counter;
};

// remove 1 shirt of the <size> most frequent shirt type
// ex : ({'1':5, '2':4, '3':2},2) => {'1':4, '2':3, '3':2}
const removeMostFrequent = (volumes, size) => {
  const res = {};
  for (let key in volumes) {
    res[key] = volumes[key];
  }
  Object.entries(volumes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, size)
    .forEach((k) => {
      res[k[0]] = volumes[k[0]] - 1;
      if (res[k[0]] <= 0) delete res[k[0]];
    });
  return res;
};

// inverse method of groupShirts
// {'1':2, '2':1, '3':1} => [1,1,2,3]
const collectionFromGroup = (volumes) => {
  const subGroup = [];
  Object.entries(volumes).forEach((entry) => {
    if (entry[1] > 0) {
      const sub = new Array(entry[1]);
      subGroup.push(...sub.fill(parseInt(entry[0])));
    }
  });
  return subGroup;
};

const calculate = (sortedShirts) => {
  if (sortedShirts.length === 0) return 0;
  const volumes = groupShirts(sortedShirts);
  let price = sortedShirts.length * SHIRT_PRICE;
  for (let size = Object.keys(volumes).length; size > 1; size--) {
    const subGroup = removeMostFrequent(volumes, size);
    const collection = collectionFromGroup(subGroup);
    price = Math.min(price, groupCost(size) + calculate(collection));
  }
  return price;
};

export const cost = (shirts) => {
  if (shirts.length === 0) {
    return 0;
  }

  return calculate(shirts.sort((a, b) => a - b));
};


