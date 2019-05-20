import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { SearchAllService } from '../services/searchall.service'
import { City } from '../models/city.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  searchEverything: City[];

  constructor(private formBuilder: FormBuilder,
             public searchAllService: SearchAllService) { }

  ngOnInit() {
    this.buildSearchFrom();
  }

  buildSearchFrom(){
    this.searchForm = this.formBuilder.group({
      origin: ['', Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)],
      destination: ['', Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)],
      departure: [''],
      return: [''],
    });
  }

  searchAll() {
    this.searchAllService.loadAllStations().then(data => {
        this.searchEverything = data;      
    })
  }

}
