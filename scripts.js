// Fetching API data
fetch("https://openlibrary.org/search/authors.json?q=j%20k%20rowling")
	.then((response) => {
		return response.json();
	}) //converted to object
	.then((data) => {
		let tableData = "";
		let docs = [data.docs];
		console.log(docs);
		docs[0].map((doc) => {
			tableData += `<tr>
            <td>${doc.key ? doc.key : "-"}</td>
            <td>${doc.name ? doc.name : "-"}</td>
            <td>${doc.name ? doc.name : "-"}</td>
            <td>${doc.name ? doc.name : "-"}</td>
            <td>${doc.top_subjects ? doc.top_subjects : "-"}</td>
            <td>${doc.top_work ? doc.top_work : "-"}</td>
          </tr>`;
		});
		document.getElementById("table-body").innerHTML = tableData;
	});

function filter() {
	var searchBox, filter, table, tr, td, i, txtValue;

	// declare elements
	searchBox = document.getElementById("searchBox");
	filter = searchBox.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
	// for prevent page reloads
	event.preventDefault();
	filter();
});
