fetch("https://openlibrary.org/search/authors.json?q=j%20k%20rowling")
	.then((response) => response.json())
	.then((data) => console.log(data));
