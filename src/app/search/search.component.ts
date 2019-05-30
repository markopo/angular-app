import { SearchServiceService } from './../search-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {

      const result = this.searchService.search('no doubt');

      console.log(result);

      result.subscribe(x => console.log(x));

  }

}
