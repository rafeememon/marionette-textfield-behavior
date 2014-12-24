(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['backbone.marionette'], factory);
  } else {
    root.TextFieldBehavior = factory(root.Marionette);
  }
})(this, function (Marionette) {

  return Marionette.Behavior.extend({

    defaults: {
      selector: null,
      modelField: null,
      getText: null
    },

    modelEvents: function() {
      var modelEvents = {};
      modelEvents['change:' + this.getOption('modelField')] = '_updateView';
      return modelEvents;
    },

    ui: function() {
      return {el: this.getOption('selector')};
    },

    initialize: function() {
      if (!this.getOption('selector')) {
        throw new Error('Must specify selector in TextFieldBehavior');
      }
      if (!this.getOption('modelField')) {
        throw new Error('Must specify modelField in TextFieldBehavior');
      }
    },

    onRender: function() {
      this._updateView();
    },

    _updateView: function() {
      this.ui.el.text(this._getText());
    },

    _getText: function() {
      var modelField = this.getOption('modelField');
      var value = this.view.model.get(modelField);
      var getText = this.getOption('getText');
      if (typeof getText === 'function') {
        return getText.call(this.view, value);
      } else {
        return value || '';
      }
    }

  });

});
