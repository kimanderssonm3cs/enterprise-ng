import { Component } from '@angular/core';

/**
 * This example shows basic field filter functionality on input elements
 */
@Component({
  selector:    'soho-field-filter-demo',
  templateUrl: './field-filter.demo.html'
})
export class FieldFilterDemoComponent {

  public model = {
    text: {
      value: 'text',
      filterType: 'equals'
    },
    dropdown: {
      value: '',
      filterType: 'equals'
    },
    multiselect: {
      value: '',
      filterType: 'equals'
    },
    lookup: {
      value: '',
      filterType: 'equals'
    },
    date: {
      value: '',
      filterType: 'equals'
    },
    dateRange: {
      value: '',
      filterType: 'equals'
    }
  };

  public filterSettings: SohoFieldFilterSettings = {
    dataset: [
    { value: 'equals', text: 'Equals', icon: 'filter-equals' },
    { value: 'does-not-equal', text: 'Does Not Equal', icon: 'filter-does-not-equal' },
    { value: 'before', text: 'Before', icon: 'filter-less-than' },
    { value: 'on-or-before', text: 'On Or Before', icon: 'filter-less-equals' },
    { value: 'after', text: 'After', icon: 'filter-greater-than' },
    { value: 'on-or-after', text: 'On Or After', icon: 'filter-greater-equals' }]
  };

  public filterSettingsWithRange: SohoFieldFilterSettings = {
    dataset: [
    { value: 'equals', text: 'Equals', icon: 'filter-equals' },
    { value: 'in-range', text: 'In Range', icon: 'filter-in-range' },
    { value: 'does-not-equal', text: 'Does Not Equal', icon: 'filter-does-not-equal' },
    { value: 'before', text: 'Before', icon: 'filter-less-than' },
    { value: 'on-or-before', text: 'On Or Before', icon: 'filter-less-equals' },
    { value: 'after', text: 'After', icon: 'filter-greater-than' },
    { value: 'on-or-after', text: 'On Or After', icon: 'filter-greater-equals' }]
  };

  public dateMode = 'standard';

  constructor() { }

  onFiltered(event: SohoFieldFilteredEvent) {
    const targetElement = event.target as Element;
    const id = targetElement.id;
    if (id.includes('date-with-range')) {
      this.model.dateRange.filterType = event.filterOption.value;
      if (event.filterOption.value === 'in-range') {
        this.dateMode = 'range';
      } else {
        this.dateMode = 'standard';
      }

    } else if (id.includes('filter-text')) {
      this.model.text.filterType = event.filterOption.value;

    } else if (id.includes('example-dropdown')) {
      this.model.dropdown.filterType = event.filterOption.value;

    } else if (id.includes('product-lookup')) {
      this.model.lookup.filterType = event.filterOption.value;

    } else if (id.includes('date-without-range')) {
      this.model.date.filterType = event.filterOption.value;

    } else if (id.includes('example-multiselect')) {
      this.model.multiselect.filterType = event.filterOption.value;

    }
  }

}
