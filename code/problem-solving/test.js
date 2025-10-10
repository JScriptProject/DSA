// write a function which takes a string and returns count of each character in the string.

// const charCount = (str) => {
//   console.log(str);
//   const mod1 = str.split(" ");
//   console.log(mod1);
// for(let i=0; i< mod1.length ; i++)
// {
//     console.log(`${mod1[i]} = length -> ${mod1[i].length}`);
// }

// //   mod1.forEach((word) => {
// //     console.log(word);
// //     console.log(`Word at position ${i} = ${word} and length = ${word.length}`);
// //     i++;
// //   });
// };

// charCount("Hello I am the String");

const charCout = (str) =>{

  const countObj = {};
  const newStr = str.split(" ").join("");
  console.log("New str => ", newStr);
  const stringArr = newStr.split("");
  console.log(stringArr);
  stringArr.forEach((singleChar)=>{
     if(Object.keys(countObj).includes(singleChar))
     {
      const existingValue = countObj[singleChar];
      countObj[singleChar] = existingValue + 1;
     }
     else{
       countObj[singleChar] = 1;
     }
  })
  console.log("Count object",countObj);
  return countObj;
}

charCout("hellohh I am good person hahahahha");
