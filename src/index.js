(function(root, factory) {
  /* ======= Global Moon Bars ======= */
  (typeof module === "object" && module.exports) ? module.exports = factory() : root.MoonBars = factory();
}(this, function() {

	var pad = function(section) {
		if(section.length === 1) {
			return "0" + section;
		} else {
			return section;
		}
	}
    
	var MoonBars = {
		init: function(Moon) {
			Moon.component("bars", {
				functional: true,
				props: ["data", "fill", "height", "width"],
				render: function(h, ctx) {
					var data = ctx.data.data;
					var dataLength = data.length;

					var fill = ctx.data.fill || "#111111";
					var stops = null;

					if(Array.isArray(fill)) {
						var fillLength = fill.length;
						var colorStopSectionCount = (dataLength / (fillLength - 1)) | 0;
						stops = new Array(dataLength);

						for(var i = 0, j = 0; i < fillLength; i++) {
							var stop = fill[i];
							var secondStop = fill[i + 1];

							if(secondStop !== undefined) {
								var redStopValue = parseInt(stop.substring(1, 3), 16);
								var redSecondStopValue = parseInt(secondStop.substring(1, 3), 16);

								var greenStopValue = parseInt(stop.substring(3, 5), 16);
								var greenSecondStopValue = parseInt(secondStop.substring(3, 5), 16);

								var blueStopValue = parseInt(stop.substring(5, 7), 16);
								var blueSecondStopValue = parseInt(secondStop.substring(5, 7), 16);

								var totalStopSection = j + colorStopSectionCount;
								var redStopSpace = 0;
								var greenStopSpace = 0;
								var blueStopSpace = 0;
								var tmp = 0;

								redStopSpace = ((redSecondStopValue - redStopValue) / colorStopSectionCount) | 0;
								greenStopSpace = ((greenSecondStopValue - greenStopValue) / colorStopSectionCount) | 0;
								blueStopSpace = ((blueSecondStopValue - blueStopValue) / colorStopSectionCount) | 0;

								stops[j++] = stop;

								for(; j < totalStopSection - 1; j++) {
									redStopValue = redStopValue + redStopSpace;
									greenStopValue = greenStopValue + greenStopSpace;
									blueStopValue = blueStopValue + blueStopSpace;
									stops[j] = "#" + pad(redStopValue.toString(16)) + pad(greenStopValue.toString(16)) + pad(blueStopValue.toString(16));
								}

								stops[j++] = secondStop;
							}
						}
					}

					var gridWidth = ctx.data.width || 300;
					var gridHeight = ctx.data.height || 100;

					var rects = new Array(dataLength);
					var rectWidth = (gridWidth / ((dataLength * 2) - 1));
					var rectPadding = rectWidth * 2;

					var offset = 0;

					var i = 0;
					var max = 0;
					for(; i < dataLength; i++) {
						var number = data[i];
						if(number > max) {
							max = number;
						}
					}

					for(i = 0; i < dataLength; i++) {
						var number = data[i];

						var height = gridHeight * (number / max);

						fill = stops === undefined ? fill : stops[i];

						rects[i] = h("rect", {attrs: {
							x: offset,
							y: 0,
							height: height,
							width: rectWidth,
							fill: fill,
							rx: 5,
							ry: 5
						}}, {shouldRender: true, isSVG: true}, [
							h("title", {attrs: {}}, {shouldRender: true, isSVG: true}, [
								h("#text", {shouldRender: true}, number)
							]),
							h("animate", {
								attrs: {
									attributeType: "XML",
									attributeName: "height",
									from: 0,
									to: height,
									dur: ".3s",
									repeatCount: 1
								}
							}, {shouldRender: true, isSVG: true}, [])
						]);

						offset += rectPadding;
					};

					return h("svg", {
						attrs: {
							width: gridWidth,
							height: gridHeight,
							viewBox: "0 0 " + gridWidth + " " + gridHeight,
							xmlns: "http://www.w3.org/2000/svg"
						}
					}, {shouldRender: true, isSVG: true}, h("g", {
						attrs: {
							transform: "translate(0, " + gridHeight + ") scale(1, -1)"
						}
					}, {shouldRender: true}, rects));
				}
			});
		}
	};

    return MoonBars;
}));