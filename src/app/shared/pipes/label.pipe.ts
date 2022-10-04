import { Pipe, PipeTransform } from '@angular/core';
import { LabelProvider } from 'src/app/label-provider';
import { SharedService } from '../shared.service';
@Pipe({
  name: 'labelPipe',
})
export class LabelPipePipe implements PipeTransform {
  constructor(private _labelProvider: LabelProvider) {}
  transform(label: string): any {
    let getLabel = this._labelProvider.getLabel();
    if (getLabel && Object.keys(getLabel).length && getLabel[label]) {
      return getLabel[label];
    }
    // incase not found label return as it is
    return label;
  }
}
