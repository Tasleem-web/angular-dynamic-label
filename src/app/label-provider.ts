import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LabelProvider {
  private fetchedLabel: any;

  constructor(private _httpClient: HttpClient) {}

  public getLabel() {
    return this.fetchedLabel;
  }

  load() {
    console.log('loading random Chuck Norris joke');
    if (!this.fetchedLabel) {
      return this._httpClient
        .get('../../assets/label.json')
        .subscribe((response: {}) => {
          this.fetchedLabel = response;
          console.log('fetchedLabel loading complete');
        });
    }
    return this.fetchedLabel;
  }
}
