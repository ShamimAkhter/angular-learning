import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected = false;

  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    this.isSelected = !this.isSelected;
    // this.change.emit();
    // this.change.emit(this.isSelected);
    this.click.emit({ newValue: this.isSelected });
  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
