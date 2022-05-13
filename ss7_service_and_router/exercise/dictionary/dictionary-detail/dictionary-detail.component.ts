import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../services/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Dictionary} from "../model/dictionary";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = parseInt(param.get('id'));
      if (this.id != null){
        this.dictionary = dictionaryService.findById(this.id);
      }
    });
  }

  ngOnInit(): void {
  }

}
