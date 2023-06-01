const comboBox = document.getElementById("combo-box");
const comboItemsContainer = document.getElementById("combo-items-container");

comboBox.addEventListener("change", () => {
    const selectedItem = comboBox.value;
    const itemIndex = comboBox.selectedIndex;
    if (selectedItem !== "") {
        const comboItem = document.createElement("div");
        comboItem.classList.add("combo-item");

        const label = document.createElement("label");
        label.classList.add("combo-label");
        label.textContent = selectedItem;
        comboItem.appendChild(label);

        const input = document.createElement("input");
        input.classList.add("combo-input");
        input.setAttribute("type", "number");
        input.setAttribute("placeholder", "모집인원");
        comboItem.appendChild(input);

        const removeButton = document.createElement("button");
        removeButton.classList.add("combo-remove");
        removeButton.textContent = "삭제";
        removeButton.addEventListener("click", () => {
            comboBox.add(new Option(selectedItem, selectedItem), itemIndex);
            comboItem.remove();
        });
        comboItem.appendChild(removeButton);

        comboItemsContainer.appendChild(comboItem);
        comboBox.remove(itemIndex);
        }
    });