import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../services/dictionary.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  dictionaries: Array<Dictionary> = [];

  constructor(private dictionaryService: DictionaryService) {
    this.dictionaries = this.dictionaryService.dictionaries;
  }

  ngOnInit(): void {
  }

}
