//[2,3,4]=>[2,3,5]
//[4,5,6,8]=>[4,5,6,9]
//[9,8,9]=>[9,9,0]

const print = console.log;

// function customFunct(arr) {
//   //convert to string:[4,5,6]=>"234"=>"235"
//   let n = "";
//   for (let x of arr) {
//     n = n + x;
//   }
//   print(n);
//   n = n * 1 + 1;
//   print(n);
//   n = "" + n;

//   print(n);
//   print(n.split(""));
//   let emptyArr = [];
//   for (let y of n.split("")) {
//     emptyArr.push(y * 1);
//   }
//   print(emptyArr);
// }
const customFunct = (arr) =>
  (arr.map((item) => item + "").join("") * 1 + 1 + "")
    .split("")
    .map((item) => item * 1);

print(customFunct([2, 3, 4]));
print(customFunct([9, 9, 9]));
