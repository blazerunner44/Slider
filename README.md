# Slider
A jQuery slider plugin

#What is slider?
Slider is another jQuery slider plugin. It allows you to put anything into a div and display it as a slider.

#Installation
To install the slider plugin, simply include the JavaScript file AFTER jQuery

`<script type="text/javascript" src="slider.jquery.js"></script>`

To initialize the slider plugin, simply call the function on the container div you want to transform into a slider

```
  <div class="slider-container">
		<div class="slide">
			<h3>This is slide ONE</h3>
		</div>

		<div class="slide">
			<h3>This is slide TWO</h3>
		</div>

		<div class="slide">
			<h3>This is slide THREE</h3>
		</div>
	</div>
```
		
`$('.slider-container').slider();`
