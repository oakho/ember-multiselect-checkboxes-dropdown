import Component from '@ember/component';
import layout from '../templates/components/multiselect-checkboxes-dropdown';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  selected: [],

  options: null,
  pendingOptions: computed('selected', function() {
    return (this.get('selected') || []).toArray();
  }),

  isAllSelected: computed('selected.@each', function() {
    return this.get('options.length') === this.get('selected.length');
  }),

  actions: {
    toggleAll(event) {
      let checked = event.target.checked;
      this.set('pendingOptions', checked ? this.get('options').toArray() : []);
    }
  }
});
