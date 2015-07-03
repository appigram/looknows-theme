Package.describe({
  name: "alisin:theme-looknows",
  summary: "Meteor: Looknows theme package",
  version: "0.1.6",
  git: "https://github.com/alisin/Looknows.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.20.5',
      'telescope:theme-base@0.20.5',
      'telescope:theme-hubble@0.20.5'
    ]);

  api.addFiles([
      'lib/modules_looknows.js'
  ], ['client', 'server']);

  api.addFiles([

      // add-ons
      'lib/client/main.html',

      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_markdown.scss',

      // modules
      'lib/client/scss/modules/_avatars.scss',
      'lib/client/scss/modules/_comments.scss',
      'lib/client/scss/modules/_layout.scss',
      'lib/client/scss/modules/_menu.scss',
      'lib/client/scss/modules/_nav.scss',
      'lib/client/scss/modules/_mobile_nav.scss',
      'lib/client/scss/modules/_posts.scss',
      'lib/client/scss/modules/_search.scss',
      'lib/client/scss/modules/_errors.scss',

      // partials
      'lib/client/scss/partials/_typography.scss',
      'lib/client/scss/partials/_grid.scss',
      'lib/client/scss/partials/_colors.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/post_admin_looknows.html',
      'lib/client/templates/post_content_looknows.html',
      'lib/client/templates/post_info_looknows.html',
      'lib/client/templates/post_upvote_looknows.html',
      'lib/client/templates/post_page_looknows.html',
      'lib/client/templates/nav_looknows.html',
      'lib/client/templates/posts_list_looknows.html',
      'lib/client/templates/search_looknows.html',

      // customizations
      'lib/client/scripts/post_title_looknows.js',
      'lib/client/scripts/icons_looknows.js',
      'lib/client/scripts/templates_looknows.js',

      'img/logo.png',

      //plugins
      'lib/client/scripts/succinct.js',
      'lib/client/scripts/sdk.js'

    ], ['client']);

});
