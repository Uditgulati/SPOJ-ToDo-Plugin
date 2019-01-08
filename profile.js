

function htmlToNode(html) {
	var template = document.createElement('template');
	template.innerHTML = html;
	return template.content.firstChild;
}


var path = window.location.pathname.split('/');
console.log(`${path}`);

var arr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

console.log(arr);

var hello = "Hello!!!"

var prob_lists = document.getElementsByClassName("col-md-12")[2];

var modLists = prob_lists.cloneNode(true);
modLists.appendChild(htmlToNode(`<h4>
	<span title="List of problems to which solutions were submitted but none of them got AC.">
	User maintained TODO list:</span>
	</h4>
	`));

var newTable = new String(`<table class="table"><tbody><tr>`);

var i = 0;

var arrLength = arr.length;

var rem = arrLength % 7;

if(rem > 0) {
	arrLength += (7 - rem);
}

console.log(`${arrLength}`);

for(; i < arrLength; i++) {

	if(i > 0 && i % 7 == 0) {
		newTable = newTable.concat(`</tr><tr>`);
	}

	newTable = newTable.concat(`<td width="14%" align="left">`);

	newTable = newTable.concat(`<a href="/status/${arr[i]},uditgulati0/">`);

	if(i < arr.length) {
		newTable = newTable.concat(`<a href="/problems/${arr[i]}/">`);
		newTable = newTable.concat(`${arr[i]}`);
	}
	else {
		newTable = newTable.concat(`<a href="/status/,uditgulati0/">`);
	}

	newTable = newTable.concat(`</a></td>`);
}

newTable = newTable.concat(`</tr></tbody></table>`);

console.log(`${newTable}`);


modLists.appendChild(htmlToNode(`${newTable}`));

//prob_lists.parentNode.insertBefore(modLists, prob_lists);
//prob_lists.style.display = 'none';

prob_lists.replaceWith(modLists);