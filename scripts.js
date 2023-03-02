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
