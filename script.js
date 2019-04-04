let product = ["Apple","Orange","Banana"];

function listProduct() {
    let newTable = "";
    let header =
        "<tr>"+
            "<th style = 'text-align: left;'>Index</th>"+
            "<th style = 'text-align: left;'>Product Name (Click into name to edit)</th>"+
            "<td></td>"+
            "<td></td>"+
        "</tr>";
    for (let i=0; i<product.length; i++) {
        let newRow =
            "<tr>" +
                "<td>"+i+"</td>" +
                "<td><input id="+i+" name='pName' onmouseout='editProduct(this.id, this.value)' style='border: hidden' value="+product[i]+"></td>" +
                "<td><button onclick='deleteProduct(this.id)' id="+i+" name='delBut'>Delete</button></td>" +
            "</tr>"
        newTable += newRow;
    }
    document.getElementById("ListProduct").innerHTML = header+newTable;
}

function addProduct() {
    product.push(document.getElementById("AddProduct").value);
    listProduct();
    alert("Thêm sản phẩm thành công!");
}

function editProduct(id, value) {
    product[id] = value;
    listProduct();
}

function deleteProduct(agr) {
    product.splice(agr,1);
    listProduct();
}

