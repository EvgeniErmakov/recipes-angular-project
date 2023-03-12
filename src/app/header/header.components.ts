import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html'
})
export class HeaderComponents {
 @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
   this.featureSelected.emit(feature);
  }
}
