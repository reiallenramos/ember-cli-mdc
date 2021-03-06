/* global mdc */

import Component from '@ember/component';
import layout from '../templates/components/mdc-tab-scroller';

import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import { isEmpty } from '@ember/utils';

const ALIGN_VALUES = [
  'start',
  'center',
  'end'
];

const { MDCTabScroller } = mdc.tabScroller;

export default Component.extend({
  layout,

  classNames: ['mdc-tab-scroller'],
  classNameBindings: ['alignClassName'],

  _tabScroller: null,

  align: null,

  alignClassName: computed ('align', function () {
    const align = this.get ('align');

    if (isEmpty (align)) {
      return;
    }

    assert (`The align attribute must be one of the following values: ${ALIGN_VALUES}`, ALIGN_VALUES.includes (align));

    return `mdc-tab-scroller--align-${align}`;
  }),

  didInsertElement () {
    this._super (...arguments);

    this._tabScroller = new MDCTabScroller (this.element);
  },

  willDestroyElement () {
    this._super (...arguments);

    this._tabScroller.destroy ();
  }
});
