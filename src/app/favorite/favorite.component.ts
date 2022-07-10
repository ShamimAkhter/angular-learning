import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'] // Approach 2, bad
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected = false; // Approach 1, good

  constructor() { }
  
  onClick() {
    this.isSelected = !this.isSelected;
  }

  ngOnInit(): void {
  }

}
