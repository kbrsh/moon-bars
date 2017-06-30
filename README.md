# Moon Bars

Sleek bar graph component for Moon

### Installation

NPM

```sh
$ npm install moon-bars
```

CDN

```html
<script src="https://unpkg.com/moon-bars"></script>
```

### Usage

Initialize the plugin with:

```js
Moon.use(MoonBars);
```

Then, use the component within any element with a wrapping Moon instance.

```html
<bars
  m-literal:data="[5, 7, 4, 3, 5]"
  m-literal:fill="['#7bddd3', '#079af9']"
  height="100"
  width="300"
  ></bars>
```

##### Props

* `data` - an array of integers, the graph will scale automatically to match
* `fill` (optional, default `#111111`) - a single color or an array of 2 or more color stops **in 6 digit hex colors only**
* `height` (optional, default `100`) - height of graph
* `width` (optional, default `300`) - width of graph

### License

Licensed under the [MIT License](https://kingpixil.github.io/license) by [Kabir Shah](https://kabir.ml)