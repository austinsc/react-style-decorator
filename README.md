[![Build Status](http://img.shields.io/travis/RoviSys/react-style-decorator.svg?style=flat)](https://travis-ci.org/RoviSys/react-style-decorator)
[![Code Climate](https://codeclimate.com/github/RoviSys/react-style-decorator/badges/gpa.svg)](https://codeclimate.com/github/RoviSys/react-style-decorator)
[![Test Coverage](https://codeclimate.com/github/RoviSys/react-style-decorator/badges/coverage.svg)](https://codeclimate.com/github/RoviSys/react-style-decorator)
[![Dependency Status](https://david-dm.org/RoviSys/react-style-decorator.svg)](https://david-dm.org/RoviSys/react-style-decorator)
[![devDependency Status](https://david-dm.org/RoviSys/react-style-decorator/dev-status.svg)](https://david-dm.org/RoviSys/react-style-decorator#info=devDependencies)

# react-style-decorator

 > ES7 decorator for attaching a reffable style to the component lifecycle.

## Installation

Run `npm install --save react-style-decorator` and then use the default export of the module.

## Purpose

The purpose of the module is to provide an easy way to attach a reffable style to a component lifecyle.

## Example 
 
Using the style decorator, you can attatch a stylesheet to a component like this:

```javascript
import Style from 'react-style-decorator';

@Style(require('css/my-component.css'))
class MyComponent extends Component {
  render() {
    return (
      <h1>Example<h1>
    );
  }
}
```

The above example assumes that you are using webpack's [style-loader](https://github.com/webpack/style-loader) with the `/usable` option. This converts the stylesheet into a javascript module that has a reference counting feature. [Click here](https://github.com/webpack/style-loader#reference-counted-api) for more information about the reference counting feature.

This decorator also supports variadic style arguments, so you can pass as many stylesheets into the decorator that you want:

```javascript
import Style from 'react-style-decorator';

@Style(require('css/my-component1.css'), require('css/my-component2.css'), require('css/my-component3.css'))
class MyComponent extends Component {
  render() {
    return (
      <h1>Example<h1>
    );
  }
}
```