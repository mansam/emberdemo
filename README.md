Ember.js Lightning Talk Demo
============================

This is a small webapp I created to demonstrate the way that page routing works in the [Ember.js](http://emberjs.com) MVC framework during a lightning talk at one of the FOSS@RIT Hackathons in 2012.

Ember.js can be used to create 'one-page' webapps while helping a developer avoid having to write a lot of the typical boilerplate that might go into managing hash locations, updating the DOM, and dealing with browser history.  Ember.js apps typically consist of a state machine called a Router, and each of the leaf states ('routes') represent a navigable page.  Associated with each page is a view consisting of a Handlebars template and a controller object that serves as the context for the template variables in the view.  

Navigating to a route causes the related view to be rendered and populate an empty 'outlet', which could fill the entire page, or simply be a subsection of page that is comprised of multiple views. In this demonstration, the 'about' page is an example of how such a composite view might be put together.  All of the leaf views are essentially children of the 'application' view, which is a view that is always rendered regardless of the current leaf, and typically consists of an html index page with the head, required scripts, etc, filled in, and a body tag with an outlet that all other page views fill in.

You can see the demo in action [here.](http://mansam.github.com/emberdemo/)