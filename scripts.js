// Fetching API data
fetch("https://openlibrary.org/search/authors.json?q=a")
	.then((response) => {
		return response.json(); //converted to object
	})
	.then((data) => {
		let tableData = "";
		let docs = [data.docs];
		console.log("docs", docs);
		docs[0].map((doc) => {
			const displayname = doc.name;
			const authorid = doc.key;
			const birth_date = doc.birth_date;
			tableData += `<tr>
            <td class="text-center">${authorid ? authorid : "-"}</td>
            <td class="text-center">${
				displayname ? displayname.split(" ").slice(0, -1).join(" ") : "-"
			}</td>
            <td class="text-center">${
				displayname ? displayname.split(" ").slice(-1).join(" ") : "-"
			}</td>
            <td class="text-center">${displayname ? displayname : "-"}</td>
            <td class="text-center">${birth_date ? birth_date : "-"}</td>
            <td class="text-center">${doc.top_subjects ? doc.top_subjects : "-"}</td>
            <td class="text-center">${doc.top_work ? doc.top_work : "-"}</td>
          </tr>`;
		});
		document.getElementById("table-body").innerHTML = tableData;
	});

$(function () {
	const ths = $("th");
	let sortOrder = 1;

	ths.on("click", function () {
		const rows = sortRows(this);
		rebuildTbody(rows);
		updateClassName(this);
		sortOrder *= -1;
	});

	function sortRows(th) {
		const rows = $.makeArray($("tbody > tr"));
		const col = th.cellIndex;
		const type = th.dataset.type;
		rows.sort(function (a, b) {
			return compare(a, b, col, type) * sortOrder;
		});
		return rows;
	}

	function compare(a, b, col, type) {
		let _a = a.children[col].textContent;
		let _b = b.children[col].textContent;
		if (type === "number") {
			_a *= 1;
			_b *= 1;
		} else if (type === "string") {
			_a = _a.toLowerCase();
			_b = _b.toLowerCase();
		}

		if (_a < _b) {
			return -1;
		}
		if (_a > _b) {
			return 1;
		}
		return 0;
	}

	function rebuildTbody(rows) {
		const tbody = $("tbody");
		while (tbody.firstChild) {
			tbody.remove(tbody.firstChild);
		}

		let j;
		for (j = 0; j < rows.length; j++) {
			tbody.append(rows[j]);
		}
	}

	function updateClassName(th) {
		let k;
		for (k = 0; k < ths.length; k++) {
			ths[k].className = "";
		}
		th.className = sortOrder === 1 ? "asc" : "desc";
	}
});
