var MODEL = MODEL || [];

var container = document.getElementsByClassName("container")[0];
for (var i = 0; i < MODEL.length; i++) {
	// insert posts from MODEL
	container.appendChild(getPost(MODEL[i]));
}

/* Get the post element to be inserted */
function getPost(post) {
	var parent = document.createElement("div");
	parent.setAttribute("class", "post");

	var head = document.createElement("span");
	head.setAttribute("class", "head");
	head.appendChild(document.createTextNode(post.head));

	var body = document.createElement("div");

	var figure = document.createElement("figure");
	var img = document.createElement("img");
	img.setAttribute("src", post.image);
	img.setAttribute("alt", post.caption);
	img.setAttribute("width", "100%");
	var figcaption = document.createElement("figcaption");
	figcaption.appendChild(document.createTextNode(post.caption));
	figure.appendChild(img);
	figure.appendChild(figcaption);

	var content = document.createElement("div");
	content.setAttribute("class", "content");
	content.appendChild(document.createTextNode(post.content));

	body.appendChild(figure);
	body.appendChild(content);

	parent.appendChild(head);
	parent.appendChild(document.createElement("hr"));
	parent.appendChild(body);

	return parent;
}
