var value = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function sort(val) {
  var str = val.split("");

  var lenStr = str.length;
  var flag;
  for (var i = 0; i < lenStr; i++) {
    for (var j = 0; j < lenStr - 1; j++) {
      if (str[j] > str[j + 1]) {
        flag = str[j + 1];
        str[j + 1] = str[j];
        str[j] = flag;
      }
    }
  }
  return str.join("");
}

function isAnagram(str1, str2) {
  if (str1 === null || str2 === null) {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  if (sort(str1) === sort(str2)) {
    return true;
  }
  return false;
}

function main(arr) {
  const newArray = [];
  let index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      newArray.push([arr[i]]);
      for (var j = i + 1; j < arr.length; j++) {
        if (isAnagram(newArray[index][0], arr[j])) {
          newArray[index].push(arr[j]);
          arr[j] = null;
        }
      }
      index = index + 1;
    }
  }
  console.log(newArray);
  return newArray;
}

function generate() {
  const value = document.getElementById("anagram-input").value;
  console.log("generate", value.split(" "));
  const result = main(value.split(" "));
  document.getElementById("result").textContent = JSON.stringify(result);
}

main(value);
