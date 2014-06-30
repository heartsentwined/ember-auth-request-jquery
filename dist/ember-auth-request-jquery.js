// Generated by EmberScript 0.0.7
var get$ = Ember.get;
Em.onLoad('Ember.Application', function (application) {
  application.initializer({
    name: 'ember-auth.request.jquery',
    before: 'ember-auth-load',
    initialize: function (container, app) {
      app.register('authRequest:jquery', get$(get$(Em, 'Auth'), 'JqueryAuthRequest'), { singleton: true });
      return app.inject('authRequest:jquery', 'auth', 'auth:main');
    }
  });
  return application.initializer({
    name: 'ember-auth.request.jquery-load',
    after: 'ember-auth-load',
    initialize: function (container, app) {
      return container.lookup('authRequest:jquery');
    }
  });
});// Generated by EmberScript 0.0.7
void function () {
  var $;
  var get$ = Ember.get;
  var set$ = Ember.set;
  $ = jQuery;
  set$(get$(Em, 'Auth'), 'JqueryAuthRequest', get$(get$(Em, 'Auth'), 'AuthRequest').extend({
    init: function () {
      return get$(this, 'auth').reopen({ jqxhr: get$(Em, 'computed').alias('_request.jqxhr') });
    },
    jqxhr: null,
    signIn: function (url, opts) {
      return this.send(url, $.extend(true, { type: 'POST' }, opts));
    },
    signOut: function (url, opts) {
      return this.send(url, $.extend(true, { type: 'DELETE' }, opts));
    },
    send: function (url, opts) {
      var def, settings, this$;
      def = {
        url: url,
        dataType: 'json'
      };
      if ((null != get$(opts, 'type') ? get$(opts, 'type').toUpperCase() : void 0) !== 'GET' && get$(get$(this, 'auth'), 'contentType') !== 'application/json; charset=utf-8')
        opts.contentType || (opts.contentType = get$(get$(this, 'auth'), 'contentType'));
      if (get$(opts, 'data') && !(null != get$(opts, 'contentType'))) {
        if (null != get$(opts, 'type') && get$(opts, 'type').toUpperCase() !== 'GET')
          set$(opts, 'data', JSON.stringify(get$(opts, 'data')));
        if ((null != get$(opts, 'type') ? get$(opts, 'type').toUpperCase() : void 0) !== 'GET')
          set$(def, 'contentType', get$(get$(this, 'auth'), 'contentType'));
      }
      settings = $.extend(true, def, opts);
      return new (get$(get$(Em, 'RSVP'), 'Promise'))((this$ = this, function (resolve, reject) {
        var this$1, this$2;
        return $.ajax(settings).done((this$1 = this$, function (json, status, jqxhr) {
          set$(this$1, 'jqxhr', jqxhr);
          return resolve(get$(jqxhr, 'responseText'));
        })).fail((this$2 = this$, function (jqxhr) {
          set$(this$2, 'jqxhr', jqxhr);
          return reject(get$(jqxhr, 'responseText'));
        }));
      }));
    }
  }));
}.call(this);
// Generated by EmberScript 0.0.14
var get$ = Ember.get;
var set$ = Ember.set;
get$(Em, 'Auth').reopen({ contentType: 'application/json; charset=utf-8' });