function Post(head, content, image, caption) {
	this.head = head;
	this.content = content;
	this.image = image;
	this.caption = caption;
}

var MODEL = [
	new Post("Cyklo",
	"Cyklo is a point-to-point, peer-to-peer cycle sharing service.",
	"http://cyklo.xyz/img/6.jpg", "DP"),
];
