function towerBuilder(nFloors) {
  arr = [];
  let starChar = "*";
  let starVar = "";
  for (i = 0; i < nFloors; i++) {
    if (i === 0) {
      starVar = starChar;
      arr.push(starVar);
    } else {
      starVar = starChar.repeat(starVar.length + 2);
      arr.push(starVar);
    }
  }
  const newArr = arr.map((item) => {
    if (item.length < arr[arr.length - 1].length) {
      const appendAndPrependSpaces =
        (arr[arr.length - 1].length - item.length) / 2;
      item =
        " ".repeat(appendAndPrependSpaces) +
        item +
        " ".repeat(appendAndPrependSpaces);
    }
    return item;
  });
  return newArr;
}

// function call - should log
/* 
[ 
  '  *  ', 
  ' *** ', 
  '*****'
 ]
*/
console.log(towerBuilder(3));
