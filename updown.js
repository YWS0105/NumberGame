const random = Math.ceil((Math.random() * 100) / 1);

const input = document.getElementsByTagName("input")[0];

const button = document.getElementsByTagName("button")[0];

const numbers = document.getElementsByClassName("number")[0];

const error = document.getElementById("Error");

const updown = document.querySelector(".UpDown");

function buttonClickEvent() {
  if (input.value > 0 && input.value <= 100) {
    const num = document.createElement("p");
    num.innerText = input.value;
    numbers.appendChild(num);

    error.style.backgroundColor = "transparent";
    error.innerText = "";

    if (input.value < random) {
      updown.innerText = "up";
      console.log("up");
    } else if (input.value > random) {
      updown.innerText = "down";
      console.log("down");
    } else {
      alert("정답입니다!");
      location.reload();
    }
  } else {
    error.style.backgroundColor = "red";
    error.innerText = "1~100의 숫자만 입력 가능합니다.";
  }

  input.value = "";
}

function keypressEvent(e) {
  if (e.key === "Enter" && input.value !== "") {
    buttonClickEvent();
  }
}

button.addEventListener("click", buttonClickEvent);
window.addEventListener("keypress", keypressEvent);
