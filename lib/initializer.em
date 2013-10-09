Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth-request-jquery'
    after: 'ember-auth'

    initialize: (container, app) ->
      app.register 'authRequest:jquery', Em.Auth.JqueryAuthRequest
