import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFeatureBookssSuccess } from '../Store/Features/Books/feature-books.actions';
import { selectBooksList } from '../Store/Features/Books/feature-books.selectors';
import { selectUser } from '../Store/Features/Login/feature-login.selectors';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksListMock=[
    {
      title:'Crimen y Castigo',
      author: 'Dostoyevski'
    },
    {
      title:'Metamorfosis',
      author: 'Franz Kafka'
    },
    {
      title:'El Aleph',
      author: 'Jorge Luis Borges'
    }
  ]
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectBooksList).subscribe(
      (val)=>console.log(val)
    )
    this.store.select(selectUser).subscribe(
      val=>console.log(val)
    )
  }

  onSubmit(){
    this.store.dispatch(loadFeatureBookssSuccess({books:this.booksListMock}))
  }

}
