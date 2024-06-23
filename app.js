let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let body = document.querySelector("body");

function err ()  {
    let heading = document.createElement("h1");
    body.prepend(heading);
    heading.innerText = "Text Field is Blank";
    body.style.backgroundColor = "red";
    heading.style.position = "absolute";
    heading.style.width = "99vw";
    heading.style.display = "flex";
    heading.style.justifyContent = "center";
    heading.style.alignItems = "center";
    body.style.overflow = "hidden";

    setInterval(function() {
        body.removeChild(heading);
        body.style.backgroundColor = "transparent";
    }, 1000);
}

btn.addEventListener("click", function() {
    if(input.value.trim() != "") {
        let item = document.createElement("li");
        // let delBtn = document.createElement("button");

        item.innerText = input.value;
        // delBtn.innerText = "delete";
        // delBtn.classList.add("delete");

        // delBtn.addEventListener("click", function() {
        //     item.remove();
        // });
        
        item.addEventListener("dblclick", () => {
            item.remove();
        });

        ul.appendChild(item);
        // item.append(delBtn);

        input.value = "";
    }
    else {
      err();
    }
});
