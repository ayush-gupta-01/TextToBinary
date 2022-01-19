document
  .querySelector(".to-binary")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const text = document.querySelector(".to-binary textarea"); // Selecting value in Textarea

    if (document.querySelector(".final-answer")) {
      document.querySelector(".show").removeChild(div);
    }

    const num = text.value; // Text(Value) in textarea
    let arr = [];

    let i = 0;

    while (i < num.length) {
      arr = [...arr, num.charCodeAt(i)]; // Converting Character into its ASCII value and storing in Array(arr)
      i++;
    }

    i = 0;

    let temp = "";
    let binary = "";

    // Converting ASCII value to Binary

    while (i < arr.length) {
      let quotient = arr[i];

      while (quotient >= 1) {
        remainder = quotient % 2;
        temp = remainder.toString() + temp;
        quotient = Math.floor(quotient / 2);
      }

      if (temp.length < 8) {
        // Since each character is represented in 8bit binary
        size = 8 - temp.length; // In case any character have binary value of less than 8 bit we add "0" in LSB side
        temp = "0" * size + temp;
      }
      binary = binary + " " + temp;
      temp = "";
      i++;
    }

    div = document.createElement("div");
    div.setAttribute("class", "final-answer");
    div.innerText = binary;
    document.querySelector(".show").appendChild(div);

    // document.querySelector(".copy-btn").disabled = false;
  });

// function Copy() {
//   var range = document.createRange();
//   range.selectNode(document.querySelector(".final-answer"));
//   window.getSelection().removeAllRanges(); // clear current selection
//   window.getSelection().addRange(range); // to select text
//   document.execCommand("copy");
//   window.getSelection().removeAllRanges(); // to deselect
//   // alert("Copied");
// }
