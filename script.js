let addForm = document.querySelector("form");
addForm.addEventListener("submit", addFormEvent);

let deleteNow = document.querySelector("#items");
deleteNow.addEventListener("click", removeItem);

let searchInput = document.getElementById("headerInput");
searchInput.addEventListener("keyup", search);




function addFormEvent(e) {
    e.preventDefault();
    let addInput = document.querySelector("#addInput").value;
    let createLi = document.createElement("li");
    let listItems = document.querySelector("#items");
    listItems.appendChild(createLi);
    createLi.className = "listItem";
    createLi.innerText = addInput;

    let createDeleteButton = document.createElement("button");
    createDeleteButton.className = "deleteButton";
    createLi.appendChild(createDeleteButton);
    createDeleteButton.innerText = "X";
    // console.log(e)

}


// delete event now

function removeItem(f) {

    if (f.target.classList.contains("deleteButton")) {
        if (confirm("Are you sure?")) {
            let li = f.target.parentElement;
            items.removeChild(li);
        }

    }


}

function search(e) {
    e.preventDefault();
    let text = e.target.value.toLowerCase();
    let newItem = items.getElementsByTagName("li");
    // console.log(newItem);

    Array.from(newItem).forEach(singleItem => {
        // console.log(singleItem);

        let itemName = singleItem.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            singleItem.style.display = 'block';
        } else {
            singleItem.style.display = 'none'
        }

    })

}