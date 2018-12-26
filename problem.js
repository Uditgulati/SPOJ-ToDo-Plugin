

function htmlToNode(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
}


var path = window.location.pathname.split('/');
var name = path.slice(-2)[0];
console.log(`${path}`);
console.log(`${name}`);

var prob_name = document.getElementsByClassName("text-center")[1];

console.log(`Name ${prob_name}`);

var modName = prob_name.cloneNode(true);
var hello = "YO"
modName.appendChild(htmlToNode(`<a href="http://uditgulati.github.io/${name}/" 
	class="btn btn-primary" style="font-size: medium;margin-left: 10px"> 
	<i class="fa fa-plus" aria-hidden="true"></i> ToDo!</button>`));

prob_name.parentNode.insertBefore(modName, prob_name);
prob_name.style.display = 'none';