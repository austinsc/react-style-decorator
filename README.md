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
 
 Lets say that you want to attach a reffable style to an object during the mounted portion of a React component's lifecycle:
 
 ```javascript
 const stylesheet = {
  ref() {
    // do something whenever the component mounts
  }
   
  unref() {
    // do something whenever the component unmounts
  }
};
```

Now, you can attatch this stylesheet to an object like this:

```javascript
import Style from 'react-style-decorator';

@Style(stylesheet)
class MyComponent extends Component {
  render() {
    return (
      <h1>Example<h1>
    );
  }
}
```

This decorator also supports multiple 'style' arguments:

```javascript
import Style from 'react-style-decorator';

@Style(stylesheet1, stylesheet2, stylesheet3)
class MyComponent extends Component {
  render() {
    return (
      <h1>Example<h1>
    );
  }
}
```