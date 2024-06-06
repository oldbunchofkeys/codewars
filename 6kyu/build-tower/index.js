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
  // should be able to refactor with map and without declaring a second array
  const newArr = [];
  arr.forEach((item) => {
    if (item.length < arr[arr.length - 1].length) {
      const appendAndPrependSpaces =
        (arr[arr.length - 1].length - item.length) / 2;
      item =
        " ".repeat(appendAndPrependSpaces) +
        item +
        " ".repeat(appendAndPrependSpaces);
      newArr.push(item);
    } else {
      newArr.push(item);
    }
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
