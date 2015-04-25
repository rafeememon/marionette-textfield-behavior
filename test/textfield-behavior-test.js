describe('marionette-textfield-behavior', function() {

  var getTextFieldView = function (getText) {
    return Marionette.ItemView.extend({
      template: function() {
        return '<span></span>';
      },
      ui: {
        textfield: '> span'
      },
      behaviors: [
        {
          behaviorClass: TextFieldBehavior,
          selector: '> span',
          modelField: 'text',
          getText: getText
        }
      ]
    });
  };

  before(function() {
    this.region = new Marionette.Region({el: '#fixture'});
    this.setupView = function (model, getText) {
      var viewClass = getTextFieldView(getText);
      var view = new viewClass({model: model});
      this.region.show(view);
      return view;
    }
  });

  after(function() {
    this.region.reset();
  });

  var TEST_TEXT = 'wow';
  var TEST_TEXT_2 = 'amaze';
  var TEST_GET_TEXT = function (text) { return text + text; };

  describe('initial state', function() {
    it('should show the text when the value is set', function() {
      var model = new Backbone.Model({text: TEST_TEXT});
      var view = this.setupView(model);
      expect(view.ui.textfield.text()).to.equal(TEST_TEXT);
    });
    it('should be empty when the value is not set', function() {
      var model = new Backbone.Model({text: null});
      var view = this.setupView(model);
      expect(view.ui.textfield.text()).to.be.empty;
    });
    it('should use the callback to get text if it is set', function() {
      var model = new Backbone.Model({text: TEST_TEXT});
      var view = this.setupView(model, TEST_GET_TEXT);
      expect(view.ui.textfield.text()).to.equal(TEST_GET_TEXT(TEST_TEXT));
    });
  });

  describe('changing state', function() {
    it('should update when the value changes', function() {
      var model = new Backbone.Model({text: TEST_TEXT});
      var view = this.setupView(model);
      model.set('text', TEST_TEXT_2);
      expect(view.ui.textfield.text()).to.equal(TEST_TEXT_2);
    });
    it('should update when the value changes from unset to set', function() {
      var model = new Backbone.Model({text: null});
      var view = this.setupView(model);
      model.set('text', TEST_TEXT);
      expect(view.ui.textfield.text()).to.equal(TEST_TEXT);
    });
    it('should update when the value changes from set to unset', function() {
      var model = new Backbone.Model({text: TEST_TEXT});
      var view = this.setupView(model);
      model.set('text', null);
      expect(view.ui.textfield.text()).to.be.empty;
    });
    it('should update using the callback if it is set', function() {
      var model = new Backbone.Model({text: TEST_TEXT});
      var view = this.setupView(model, TEST_GET_TEXT);
      model.set('text', TEST_TEXT_2);
      expect(view.ui.textfield.text()).to.equal(TEST_GET_TEXT(TEST_TEXT_2));
    });
  });

});
