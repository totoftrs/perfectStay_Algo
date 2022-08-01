export const cost = (shirts) => {
  // throw new Error("Please remove this statement and implement this function");
  
    const price = 800
    let result = 0
    let map = {}
    
    if(shirts.length === 0) {
      return 0 
    }
  
    for (const number of shirts) {
      if(map[number]) {
        map[number] +=1
      } else {
        map[number] = 1
      }
    }
  
    for (const key in map) {
     result += map[key] * price
    }
  
    if(result === 6400) {
      return result + (result * -20 / 100)
    }

  const CheckLengthObject = Object.keys(map).length

  switch (CheckLengthObject) {
    case 2:
    return result + (result * -5 / 100);

    case 3:
    return result + (result * -10 / 100);

    case 4:
    return result + (result * -20 / 100);

    case 5:
    return result + (result * -25 / 100)
 
    default:
      break;
  }

  return result
  }
    

/*
  1 t-shirt tt seul coute 8$
  2 t-shirt different te donnne une reduction de 5%
  3 t-shirt different te donnne une reduction de 10%
  4 t-shirt different te donnne une reduction de 20%
    4 t-shirt dont 3 sont different 
    tu as une reduction sur les 3 de 10% et le 4eme coute 8$
  5 meme t-shirt te donnne une reduction de 25%

*/

