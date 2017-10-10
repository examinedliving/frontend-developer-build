/**
 *  @external Handlebars
 *  @mixin dlist
 *  @mixes Handlebars.registerHelper
 *  @description Custom Rendering mixin for Handlebar Template
 */
Handlebars.registerHelper('dlist', function(items, options) {
  var out = "<dl class='dl-horizontal'>";
  var dd, dt, val, _item, __subitem, _subitem, _sublabel;
  Object.keys(items).forEach(function(key, i) {
    _item = items[key];
    dt = _item.item[0];
    dd = _item.item[1];
    // Is dd {the list value Item} an Object
    val = Object.prototype.toString.call(dd);
    if (val !== "[object Object]") {
      // its not an object, we just continue current list
      out = out + "<dt>" + _item.item[0] + "</dt><dd>" + _item.item[1] + "</dd>";
    } else {
      /**
       * 1. We complete current list;
       * 2. Render new list;
       * 3. Add a custom label to the new list
       * 4. Complete that list (close it with <DL> tag)
       * 5. Open a new list to continue with non-nested data
       */
      __subitem = _item.item[1].oneof;
      _sublabel = _item.item[0] + ' - must have one or more of';
      // must have empty dd in rendered label or everything goes to pot
      out = out + '</dl><dl class="dl-horizontal nested"><dt class="well dl-nested-label">' + _sublabel + '</dt><dd></dd>';
      Object.keys(__subitem).forEach(function(sublabel, index) {
        _subitem = __subitem[sublabel];
        out = out + "<dt>" + sublabel + "</dt><dd>" + _subitem + "</dd>";
      });
      out = out + "</dl><dl class='dl-horizontal'>";
    }
  });
  out = out + "</dl>";
  return out;
});