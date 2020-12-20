var value = ["kita", "atik", "tika", "aku", "kia", "makan", "kua", "nakam"];

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

function main(arr) {
  var object = {}

  for(var i = 0; i < arr.length; i++){
    var sorted = sort(arr[i]) 
    if(object[sorted]){
      object[sorted].push(arr[i])
    }else {
      object[sorted] = [arr[i]]
    }
  }

  return Object.values(object);
}

function generate() {
  const value = document.getElementById("anagram-input").value;
  console.log("generate", value.split(" "));
  const result = main(value.split(" "));
  document.getElementById("result").textContent = JSON.stringify(result);
}

main(value);
