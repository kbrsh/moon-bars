Moon.use(MoonBars);

var stringifyIntArray = function(arr) {
	var code = "[" + arr[0];

	for(var i = 1; i < arr.length; i++) {
		code += ", " + arr[i];
	}

	return code + "]";
}

var stringifyStringArray = function(arr) {
	var code = "['" + arr[0] + "'";

	for(var i = 0; i < arr.length; i++) {
		code += ", '" + arr[i] + "'";
	}

	return code + "]";
}

Moon.component("sample", {
	functional: true,
	props: ["data", "fill"],
	render: function(h, ctx) {
		return h("pre", {attrs: {}}, {"shouldRender": true}, [h("code", {attrs: {}}, {"shouldRender": true}, [h("span", {attrs: {class: "tag"}}, {shouldRender: true}, [h("#text", {shouldRender: true}, "<bars \n m-literal:data=")]), h("span", {attrs: {class: "string"}}, {shouldRender: true}, [h("#text", {shouldRender: true}, "\"" + stringifyIntArray(ctx.data.data) + "\"")]), h("span", {attrs: {class: "tag"}}, {shouldRender: true}, [h("#text", {shouldRender: true}, "\n m-literal:fill=")]), h("span", {attrs: {class: "string"}}, {shouldRender: true}, [h("#text", {shouldRender: true}, "\"" + stringifyStringArray(ctx.data.fill) + "\"")]), h("span", {attrs: {class: "tag"}}, {shouldRender: true}, [h("#text", {shouldRender: true}, ">\n</bars>")])])])
	}
});

var data = new Array(12);

for(var i = 0; i < 12; i++) {
	data[i] = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
}

new Moon({
	el: "#app",
	data: {
		data: data,
		fill: ["#7bddd3", "#079af9"]
	}
});