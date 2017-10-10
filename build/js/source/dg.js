var dg = {};
// @include ./dg/contentHeading.js
// @include ./dg/equipment.js
// @include ./dg/essentials.js
// @include ./dg/methodology.js
// @include ./dg/other.js
// @include ./dg/profile.js
// @include ./dg/specs.js
// @include ./dg/technologies.js
// @include ./dg/global.js
// @include ./handlebarHelpers.js
$(document).ready(function() {
  var dfr = $.Deferred();
  var src = '../img/' + $('.jumbotron').data('bg');
  var img = $('<img />', {
    src: src
  });
  img.on('load', function() {
    dfr.resolve();
  });
  $('[data-tpl]').each(function(e) {
    var _this = $(this);
    var tpl = $(this).data('tpl');
    var _compile = Handlebars.compile($('#' + tpl).html());
    var id = this.id;
    var html = $(this).html(_compile(dg[id])).promise();
    html.done(function() {
      // make sure background img is loaded before show
      if (id === "mainHeading") {
        dfr.done(function() {
          $('.jumbotron').css('background-image', 'url(' + src + ')')
            .removeClass('loading');
        });
      } else {
        _this.closest('.loading').removeClass('loading');
      }
    });
  });
});