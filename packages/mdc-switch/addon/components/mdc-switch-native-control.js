import Checkbox from '@ember/component/checkbox';

export default Checkbox.extend({
  classNames: ['mdc-switch__native-control'],

  didInsertElement () {
    this._super (...arguments);

    this.element.setAttribute ('role', 'switch');
  }
});
