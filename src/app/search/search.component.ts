import { SearchServiceService } from '../services/search-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SearchItem } from './SearchItem';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItems: SearchItem[];

  form: FormGroup = new FormGroup({
    search: new FormControl()
  });

  constructor(private searchService: SearchServiceService) {


  }

  ngOnInit() {

  }

  onSubmit() {
     const search = this.form.value.search;
     console.log("Search: ", search);

     const result = this.searchService.search(search);
     console.log(result);

      result.subscribe(x =>  this.searchItems = x["results"],
         err => console.error(err),
         () => console.log("completed"));
  }

}
