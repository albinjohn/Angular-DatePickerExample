import { Component } from '@angular/core';

/** @title Basic date range picker */
@Component({
  selector: 'date-range-picker-overview-example',
  templateUrl: 'date-range-picker-overview-example.html',
})
export class DateRangePickerOverviewExample {
  minDate: Date;
  maxDate: Date;
  dateStart: Date;
  dateEnd: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    this.minDate = new Date();
  }

  setMaxDate() {
    this.maxDate = new Date(new Date().setDate(this.dateStart.getDate() + 30));
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
