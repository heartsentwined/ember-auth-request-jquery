# jquery request adapter for ember-auth

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
