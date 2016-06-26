$(function() {

  var SharkTankView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    template: _.template($('#hello-template').html()),
    render: function () {
      this.$el.html(this.template({
        names: ['dave', 'mikey', 'toast']
      }));
    }
  });

  new SharkTankView({
    el: $('app'),
  });
});



// Underscore template
// Returns a function
// call the function to get a string
// pass function and object together to get a string
// Render a template from a string
// Pull a template from the HTML



// $(function () {

//   _.templateSettings = {
//     interpolate: /\{\{(.+?)\}\}/g
//   };
//   var template = _.template("<p>Hello {{ name }}!</p>");

//   var SharkTankView = Backbone.View.extend({
//     initialize: function () {
//       this.render();
//     },
//     render: function () {
//       this.$el.html(template({name: "Middling Stanley"}));
//     }
//   });

//   new SharkTankView({
//     el: $('#tank'),
//   });
// });
