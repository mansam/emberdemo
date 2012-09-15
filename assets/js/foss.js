Foss = Ember.Application.create({
	version: "0.0.1"
});

Foss.ApplicationController = Ember.Controller.extend();
Foss.IndexController = Ember.Controller.extend();
Foss.AboutController = Ember.Controller.extend();
Foss.DetailsController = Ember.Controller.extend();

Foss.ApplicationView = Ember.View.extend({
	templateName: 'application'
});
Foss.IndexView = Ember.View.extend({
	templateName: 'index'
});
Foss.AboutView = Ember.View.extend({
	templateName: 'about'
});
Foss.DetailsView = Ember.View.extend({
	templateName: 'details'
});

Foss.Router = Ember.Router.extend({
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
