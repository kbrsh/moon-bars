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

	for(var i = 1; i < arr.length; i++) {
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
var current = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
data[0] = current;

for(var i = 1; i < 12; i++) {
	var flip = Math.random();

	if((flip < 0.5 || current === 1) && (current !== 10)) {
		data[i] = ++current;
	} else if((flip > 0.5 || current === 10) && (current !== 1)) {
		data[i] = --current;
	}
}

var fills = [["#3ac7ff", "#9a0ace"], ["#54ffe8", "#474aff"], ["#fc53e8", "#ff9e5e"]]

new Moon({
	el: "#app",
	data: {
		data: data,
		fill: fills[Math.floor(Math.random() * fills.length)]
	}
});