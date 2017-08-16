Package.describe({
  name: 'jessyleite:meteor-trumbowy',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Trumbowyg WYSIWYG editor in Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jessyleite/meteor-trumbowy',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');

  /**
   * packages
   */
  api.use('ecmascript');
  api.use('jquery');

  /**
   * js
   */
  api.mainModule('meteor-trumbowy.js');
  api.mainModule('dist_trumbowy/trumbowyg.min.js', 'client');


  api.mainModule('dist_trumbowy/langs/fr.min.js', 'client');

  api.mainModule('config.js', 'client');
  
  /**
   * styles
   */
  api.addFiles('dist_trumbowy/ui/trumbowyg.min.css', 'client');
  api.addAssets('dist_trumbowy/ui/icons.svg', 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jessyleite:meteor-trumbowy');
  api.mainModule('meteor-trumbowy-tests.js');
});
