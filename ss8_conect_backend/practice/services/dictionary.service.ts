import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaries: Array<Dictionary> = [
    {id: 1, word: 'hello', mean: 'xin chào'},
    {id: 2, word: 'black', mean: 'đen'},
    {id: 3, word: 'dictionary', mean: 'từ điển'},
    {id: 4, word: 'book', mean: 'sách'},
    {id: 5, word: 'intelligent', mean: 'thông minh'}
  ];

  constructor() { }

  findById(id:number) {
    for(let dictionary of this.dictionaries) {
      if (dictionary.id === id) {
        return dictionary;
      }
    }

    return null;
  }
}
