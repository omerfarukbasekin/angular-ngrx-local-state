import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../person-list/store/models';
import * as fromStore from '../person-list/store';
import * as actions from '../person-list/store/actions';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.scss'],
})
export class Page1Component implements OnInit {
  persons$: Observable<Person[]>;
  loading$: Observable<boolean>;
  constructor(private _store$: Store) {}

  ngOnInit(): void {
    this.persons$ = this._store$.select(fromStore.selectAll);
    this.loading$ = this._store$.select(fromStore.selectLoading);
  }
  save(name: string, lastname: string): void {
    const person = {
      name,
      lastname,
    } as Person;
    this._store$.dispatch(actions.addPerson({ person: person }));
    console.log(this._store$.);
  }
  remove(person: Person): void {
    this._store$.dispatch(actions.removePerson({ person }));
  }
}
