import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer-app';
  constructor(private _sharedService: SharedService) {}
  ngOnInit(): void {
    // this._sharedService.getLabel();
  }
}
