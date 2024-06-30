const form = document.getElementById("form");
const text = document.getElementById("text");
const list = document.getElementById("list");

form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  if (text.value) {
    list.innerHTML += `<li>
                <div>
                    ${text.value}
                </div>
                    <span class="material-symbols-outlined">
                        close
                    </span>
            </li>`;
    text.value = "";
    // const closeICON = document.createElement("span");
    // closeICON.classList.add("material-symbols-outlined");
    // closeICON.innerHTML = "close";

    // const liElement = document.createElement("li");
    // const textCont = document.createElement("div");
    // textCont.innerHTML = text.value;
    // liElement.appendChild(textCont);
    // liElement.appendChild(closeICON);

    // list.appendChild(liElement);
  } else {
    alert("ples field input");
  }
});

list.addEventListener("click", (eve) => {
  if (eve.target.tagName === "DIV") {
    eve.target.classList.toggle("crossOver");
  }
  if (eve.target.tagName === "SPAN") {
    eve.target.parentElement.remove();
  }
});
