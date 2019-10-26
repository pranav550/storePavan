import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Item } from '../models/item';
import { Router } from '@angular/router';
import { EditItem } from '../actions/item.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private store: Store<{ items: Item[] }>, private router: Router) { }
  form: FormGroup;
  item: any;

  /* Initializing life cycle of component */
  ngOnInit() {
    this.item = JSON.parse(localStorage.getItem('item'));
    this.form = new FormGroup({
      'id': new FormControl(this.item.id),
      'name': new FormControl(this.item.name),
      'forks': new FormControl(this.item.forks),
      'watchers': new FormControl(this.item.watchers),
      'openIssues': new FormControl(this.item.openIssues),
      'language': new FormControl(this.item.language),
      'owner': new FormControl(this.item.owner)
    })
  }

  /* Updating the store */
  updateItem() {
    let ob = {
      "id": this.form.get('id').value,
      "name": this.form.get('name').value,
      "forks": this.form.get('forks').value,
      "watchers": this.form.get('watchers').value,
      "openIssues": this.form.get('openIssues').value,
      "language": this.form.get('language').value,
      "owner": this.form.get('owner').value
    }
    this.store.dispatch(new EditItem(ob));
    this.router.navigate(['/list'])
  }

}
