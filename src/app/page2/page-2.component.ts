import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../person-list/store/models';
import * as fromStore from '../person-list/store';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss'],
})
export class Page2Component implements OnInit {
  persons$: Observable<Person[]>;
  constructor(private _store$: Store) {}

  ngOnInit(): void {
    this.persons$ = this._store$.select(fromStore.selectAll);
    console.log(this.persons$.pipe.name);
  }
}
