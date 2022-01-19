document.querySelector(".to-text").addEventListener("submit", function (event) {
  event.preventDefault();
  const text = document.querySelector(".to-text textarea"); // Selecting value in Textarea

  if (document.querySelector(".final-answer")) {
    document.querySelector(".show").removeChild(div);
  }

  const nums = text.value; // Text(Value) in textarea

  arr = nums.split(" "); // Splitting string into Array
  string = ""; // To store final result

  let num = 0;
  while (num < arr.length) {
    temp = arr[num];
    temp = temp.split("").reverse().join(""); // Reversing Each individual string in an array (arr)
    i = 0;
    sum = 0;
    while (i < temp.length) {
      sum = sum + temp[i] * 2 ** i; // Formula to convert each individual string to its corresponding ASCII value
      i++;
    }
    string = string + String.fromCharCode(sum); // Converting ASCII value to character and pushing it into "string"
    num++;
  }

  div = document.createElement("div");
  div.setAttribute("class", "final-answer");
  div.innerText = string;
  document.querySelector(".show").appendChild(div);
});
