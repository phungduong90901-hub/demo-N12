function ct() {
    const select = document.getElementById("tinh");
    const giaTri = select.value;
    const tenTinh = select.options[select.selectedIndex].text;

    document.getElementById("ketqua").innerHTML = 
        `Tỉnh được chọn: <b>${tenTinh}</b> (value = ${giaTri})`;
}


function gantinh(maTinh) {
    const select = document.getElementById("tinh");
    select.value = maTinh;   

  
    ct();
}
