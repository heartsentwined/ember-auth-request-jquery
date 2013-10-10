# jquery request adapter for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-request-jquery.png)](http://travis-ci.org/heartsentwined/ember-auth-request-jquery)

Send server requests via `jQuery.ajax`.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  request: 'jquery'
```

## Usage

```coffeescript
@auth.jqxhr # access the jqxhr object from last request
```
