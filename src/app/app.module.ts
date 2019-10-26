import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ListComponent } from './list/list.component';
import { ItemReducer } from './reducers/item.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { from } from 'rxjs';
import { EditComponent } from './edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';

/**
 * Defining the ng-modules
 */
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddItemComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ items: ItemReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
