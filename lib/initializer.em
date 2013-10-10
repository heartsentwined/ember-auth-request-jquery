Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.request.jquery'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authRequest:jquery', Em.Auth.JqueryAuthRequest
