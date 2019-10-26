import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Item } from './models/item';
import { AddItem } from './actions/item.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
  constructor(private http: HttpClient, private store: Store<{ items: Item[] }>) { }
  /**
   * Initializing life cycle of component
   */
  ngOnInit() {
    // if (this.items == null) {
    this.http.get('https://api.github.com/search/repositories?q=topic:angular').subscribe((data: any) => {
      console.log(data);
      let ob = [], item: any;
      for (let i = 0; i < data.items.length; i++) {
        item = {
          "id": data.items[i].id,
          "name": data.items[i].name,
          "forks": data.items[i].forks,
          "watchers": data.items[i].watchers,
          "openIssues": data.items[i].open_issues,
          "language": data.items[i].language,
          "owner": data.items[i].owner.login
        }
        ob.push(item)
      }
      this.store.dispatch(new AddItem(ob));

    })
  }
}
