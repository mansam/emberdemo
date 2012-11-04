App = Ember.Application.create({
	version: "0.0.1"
});

App.ApplicationController = Ember.Controller.extend();
App.IndexController = Ember.Controller.extend();
App.AboutController = Ember.Controller.extend();
App.DetailsController = Ember.Controller.extend();

App.ApplicationView = Ember.View.extend({
	templateName: 'application'
});
App.IndexView = Ember.View.extend({
	templateName: 'index'
});
App.AboutView = Ember.View.extend({
	templateName: 'about'
});
App.DetailsView = Ember.View.extend({
	templateName: 'details'
});

App.Router = Ember.Router.extend({
	root: Ember.Route.extend({
		index: Ember.Route.extend({
			route: '/',
			connectOutlets: function (router, context) {
				router.get('applicationController').connectOutlet('top', 'index');
			},
			goAbout: function (router, context) {
				router.transitionTo('about');
			}
		}),
		about: Ember.Route.extend({
			route: '/about',
			connectOutlets: function (router, context) {
				router.get('applicationController').connectOutlet('top', 'about');
				router.get('aboutController').connectOutlet('sub', 'details')
			},
			goIndex: function (router, context) {
				router.transitionTo('index');
			}
		})
	})
});
