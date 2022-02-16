function addCar() {
	let name = document.getElementById('name').value;
	let price = document.getElementById('price').value;
	let colour = document.getElementById('colour').value;
	let image = document.getElementById('image').value;
	//alert(`${name} ${price} ${colour} ${image}`)
	let car = {
		"name": name,
		"price": price,
		"colour": colour,
		"image": image
	}
	var tableRef = document.getElementById("myTable").getElementsByTagName("tbody")[0];
	var newRow = tableRef.insertRow(tableRef.rows.length);
	newRow.innerHTML = createRow(tableRef.rows.length, car);
}

function createRow(index,item){
    let mRow =  
    `
    <tr>
		<td>${index}</td>
		<td>${item.name}</td>
		<td>${item.price}</td>
		<td>${item.colour}</td>
		<td><img src="${item.image}" width="150px" height="100px"></td>
    </tr>
    `;
  return mRow;
}

function clearRows(){
	var tableRef = document.getElementById("myTable").getElementsByTagName("tbody")[0];
	tableRef.innerHTML = ""
}