//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const arraySort = (arr) => {
  let newArr = [];
  let testArr = [];
  let halfArr = [];
  let arraySortable = arr.map(arg => arg);
  arraySortable.sort((a, b) => a - b);
  arraySortable.forEach((entry, i) => {
    if (testArr.includes(entry)) {
        return;
    } else {
      halfArr = arr.filter(element => element === entry);
      if (halfArr.length === 1) {
      newArr = newArr.concat(halfArr);
      testArr.push(entry);
      } else {
        newArr = newArr.concat([halfArr]);
        testArr.push(entry);
      };
    }
    return newArr;
  });
  return newArr;
};

//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const numberArray = [2,3,4,5,6,7,10,20,50];

const sumArray = (arr, target) => {
let a;
let result;
  arr.forEach((value) => {
    a = arr.filter(element => (element + value) === target);
    if (a[0] === null) {
      return "There are no matches..."
    } else {
      if (a[0] != value && a[0] + value === target){
      result = [a[0], value];
      return result;
    } else {
      result = 'There are no matches!'
      return result;
    };
    }
    return result;
  });
  return result;
}

//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const colorSwitcher = (colorInput) => {
  let colorOut;
  let hexOutput = '';
  let rgbOutput;
  const rgbAlphabet = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  
  const rgbSwitcher = (colorCode) => {
    const rgbCode = colorCode.split(',');
    rgbCode.forEach((value) => {
      let a = value / 16;
      let b = a%1;
      a = Math.floor(a);
      a = rgbAlphabet[a];
      b = b * 16;
      b = rgbAlphabet[b];
      let c = a.concat(b);
      hexOutput = '#';
      hexOutput = hexOutput.concat(c);
      return hexOutput;
    });
    console.log(hexOutput)
    return hexOutput;
  };
  
  const hexSwitcher = (colorCode) => {
    let rgbProcess = [];
    let rgbVal =[];
    let pureColorCode = colorCode.slice(1);
    for (i = 0; i < pureColorCode.length; i++){
      if (i % 2 === 0 || i === 0){
        rgbProcess[i] = (rgbAlphabet.indexOf(pureColorCode[i])) * 16;
      } else {
        rgbProcess[i] = (rgbAlphabet.indexOf(pureColorCode[i]));
      }
      rgbVal[0] = rgbProcess[0] + rgbProcess[1];
      rgbVal[1] = rgbProcess[2] + rgbProcess[3];
      rgbVal[2] = rgbProcess[4] + rgbProcess[5];
    };
    
    rgbOutput = rgbVal.join();
    return rgbOutput;
  };
  
  if (colorInput.includes(',')) {
    rgbSwitcher(colorInput)
  } else if (colorInput.includes('#')){
    hexSwitcher(colorInput)
  } else { 
    console.log('Please enter colour codes including commas and/or hashes')
  }
  console.log(hexOutput[0], 'test');
  if (hexOutput[0] != '#') {
    colorOut = hexOutput;
  } else {
    colorOut = rgbOutput;
  }
  return colorOut;
};
colorSwitcher('254,55,66')
colorSwitcher('#123456');