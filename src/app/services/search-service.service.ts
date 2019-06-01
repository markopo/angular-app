import { SearchItem } from '../SearchItem';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  search(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp<SearchItem[]>(apiURL, 'callback');
  }
}
