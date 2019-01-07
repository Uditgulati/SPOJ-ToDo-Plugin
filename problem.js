

function htmlToNode(html) {
	var template = document.createElement('template');
	template.innerHTML = html;
	return template.content.firstChild;
}


var path = window.location.pathname.split('/');
var name = path.slice(-2)[0];
console.log(`${name}`);

var firstChar = name.charAt(0);

if(firstChar == firstChar.toUpperCase()) {
	var prob_name = document.getElementsByClassName("text-center")[1];

	console.log(`Name ${prob_name}`);

	var modName = prob_name.cloneNode(true);

	var arr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
	console.log(arr);
	var set = new Set(arr);
	console.log(set.size);

	if(set.has(name)) {
		modName.appendChild(htmlToNode(`<button onclick="localStorage.setItem('test', '0');
			var arr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
			console.log(arr);
			var set = new Set(arr);
			console.log(set.size);
			console.log('${name}');
			set.delete('${name}');
			var newArr = [...set];
			localStorage.setItem('items', JSON.stringify(newArr));
			location.reload();"
		class="btn btn-primary" style="font-size: medium;margin-left: 10px;background-color: red;"> 
		<i class="fa fa-minus" aria-hidden="true"></i> ToDo!</button>`));
	}
	else {
		modName.appendChild(htmlToNode(`<button onclick="localStorage.setItem('test', '0');
			var arr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
			console.log(arr);
			var set = new Set(arr);
			console.log(set.size);
			console.log('${name}');
			set.add('${name}');
			var newArr = [...set];
			localStorage.setItem('items', JSON.stringify(newArr));
			location.reload();"
		class="btn btn-primary" style="font-size: medium;margin-left: 10px"> 
		<i class="fa fa-plus" aria-hidden="true"></i> ToDo!</button>`));
	}

	prob_name.parentNode.insertBefore(modName, prob_name);
	prob_name.style.display = 'none';

	localStorage.getItem('test');


}
