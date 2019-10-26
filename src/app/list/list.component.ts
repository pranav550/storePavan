import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Item } from '../models/item';
import { Store, select } from '@ngrx/store';
import { AddItem, RemoveItem } from '../actions/item.actions';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient, private store: Store<{ items: Item[] }>, private router: Router) { }
  items: Observable<Item[]>
  count: any = 10;
  p: any = 1;
  filter: any;

  /**
   * Initializing life cycle of component
   */
  ngOnInit() {
    this.items = this.store.pipe(select('items'))
    console.log(this.items)
  }

  /**
   * Changing table content based on page number
   */
  changePage(p) {
    // alert(p);
    console.log(p);
    // this.http.get(`url/${p}`).subscribe(data=>{

    // })
  }

  /**
   * Deleting Item from store
   */
  delete(i) {
    let confirm = window.confirm('Do you want to delete');
    if (confirm) {
      this.store.dispatch(new RemoveItem(i));
    }
  }

  /**
   * Editing Item
   */
  edit(item) {
    let confirm = window.confirm("Do you want to edit");
    if (confirm) {
      localStorage.setItem("item", JSON.stringify(item))
      this.router.navigate(['/edit']);
    }
  }
}
