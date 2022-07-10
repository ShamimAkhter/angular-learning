import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

// interface FavoriteChangeEventArgs {
//   newValue: boolean
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  // onFavoriteChange(isFavorite: boolean) {
  //   console.log('Favorite changed', isFavorite);
  // }  
  // onFavoriteChange(eventArgs: { newValue: boolean }) {
  //   console.log('Favorite changed', eventArgs);
  // }  
  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}
