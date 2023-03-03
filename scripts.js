// Fetching API data
fetch("https://openlibrary.org/search/authors.json?q=a")
	.then((response) => {
		return response.json(); //converted to object
	})
	.then((data) => {
		let tableData = "";
		let docs = [data.docs];
		docs[0].map((doc) => {
			const displayname = doc.name;
			const authorid = doc.key;
			tableData += `<tr>
            <td class="text-center">${authorid ? authorid : "-"}</td>
            <td class="text-center">${
				displayname ? displayname.split(" ").slice(0, -1).join(" ") : "-"
			}</td>
            <td class="text-center">${
				displayname ? displayname.split(" ").slice(-1).join(" ") : "-"
			}</td>
            <td class="text-center">${displayname ? displayname : "-"}</td>
            <td class="text-center">${doc.top_subjects ? doc.top_subjects : "-"}</td>
            <td class="text-center">${doc.top_work ? doc.top_work : "-"}</td>
          </tr>`;
		});
		document.getElementById("table-body").innerHTML = tableData;
	});
