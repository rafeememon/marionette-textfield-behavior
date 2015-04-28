marionette-textfield-behavior
=============================

[![Build Status](https://travis-ci.org/rafeememon/marionette-textfield-behavior.svg)](https://travis-ci.org/rafeememon/marionette-textfield-behavior)

## Description

This behavior synchronizes the text of a DOM element of a [Backbone.Marionette](http://marionettejs.com/) view with the value of a [Backbone](http://backbonejs.org/) model's attribute. When the value of the attribute changes, the element is updated with the new value.

## Usage

This library is compatible with CommonJS and AMD loaders. If included in a `<script>` tag, the behavior is exported as `TextFieldBehavior`.

See Marionette's [documentation](http://marionettejs.com/docs/marionette.behaviors.html) for including behaviors into views. The options for this behavior are:

- **selector**: (required) A jQuery selector to an element within the view which will contain the model text
- **modelField**: (required) The model attribute name to be displayed in the element
- **getText**: (optional) A callback to be used to transform the model's value to the text to be displayed

## Compatibility

- [Backbone.Marionette](http://marionettejs.com/) v2.0.0 and higher

## License

The MIT License (MIT)

Copyright (c) 2015 Rafee Memon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
