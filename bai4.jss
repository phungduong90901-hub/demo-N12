function chonKem() {
    let arr = document.getElementsByName("kem");
    let container = document.getElementById("kemDaChon");
    container.innerHTML = "Những loại kem bạn đã chọn là:<br>";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            let div = document.createElement("div");
            div.textContent = arr[i].value;

            if (arr[i].value === "Kem que") div.style.backgroundColor = "#b30000";
            else if (arr[i].value === "Kem dâu") div.style.backgroundColor = "#cc0066";
            else if (arr[i].value === "Kem bơ") div.style.backgroundColor = "#e68a00";
            else if (arr[i].value === "Kem vani") div.style.backgroundColor = "#6600cc";

            div.style.padding = "6px 10px";
            div.style.borderRadius = "5px";
            div.style.marginBottom = "4px";
            div.style.color = (arr[i].value === "Kem bơ") ? "black" : "white";
            div.style.fontWeight = "bold";

            container.appendChild(div);
        }
    }
}
