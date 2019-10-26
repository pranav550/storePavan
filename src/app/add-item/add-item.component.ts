import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from '../models/item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddItem } from '../actions/item.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private store: Store<{ items: Item[] }>, private router: Router) { }
  form: FormGroup;
  /**
   * Initializing life cycle of component
   */
  ngOnInit() {
    this.form = new FormGroup({
      'id': new FormControl(null),
      'name': new FormControl(null),
      'forks': new FormControl(null),
      'watchers': new FormControl(null),
      'openIssues': new FormControl(null),
      'language': new FormControl(null),
      'owner': new FormControl(null)
    })
  }
  /**
   * Adding data to store
   */
  addItem() {
    if (this.form.valid) {
      let ob = {
        'id': this.form.get('id').value,
        'name': this.form.get('name').value,
        'forks': this.form.get('forks').value,
        'watchers': this.form.get('watchers').value,
        'openIssues': this.form.get('openIssues').value,
        'language': this.form.get('language').value,
        'owner': this.form.get('language').value
      }
      this.store.dispatch(new AddItem(ob));
      this.router.navigate(['/list'])
    }
  }

}
