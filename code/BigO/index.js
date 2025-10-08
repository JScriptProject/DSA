// program to add the number from 1 to 100

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const addUptoNumber = (n) => {
  return (n * (n + 1)) / 2;
};

// const long_way = addUpTo(20);
// const short_way = addUptoNumber(20);
// console.log("Long Way = ",long_way);
// console.log("Short Way =", short_way);

// Count top to bottom and bottom to top

const countUpDown = (n) => {
  console.log("Count from top = >");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  console.log("Done, Now Reverse!!");
  console.log("Going Bottom to Up");
  for (let j = n; j >= 1; j--) {
    console.log(j);
  }
  console.log("All Done COOL!!");
};

// console.log(countUpDown(20));

const printAllPairs = (n) =>{
    console.log("Lets Go!!")
    for(let i=1; i<=n ;i++)
    {
        for(let j=1; j <= n; j++)
        {
         console.log("Pairs=> ",i," and ",j );
        }
    }
}
// console.log(printAllPairs(10));

function fibonacci(n)
{
    if(n <= 1) return n;
    console.log("Printing n= ",n);
    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(5));