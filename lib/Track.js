import _ from 'lodash';

export default class {
  constructor(callback) {
    this._callback = callback;

    this._bindFns();
    this._bindEvents();
  }

  _bindFns() {
    _.bindAll(this, [
      '_onwindowError'
    ]);
  }

  _bindEvents() {
    $(window).on('error', this._onwindowError);
  }

  cleanup() {

  }

  // Events
  _onwindowError(e) {
    this._callback(e);
  }
};