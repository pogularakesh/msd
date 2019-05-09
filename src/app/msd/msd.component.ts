import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msd',
  templateUrl: './msd.component.html',
  styleUrls: ['./msd.component.css']
})
export class MsdComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit() {


    this.dropdownList = [
      { item_id: 1, item_text: 'hyderabad' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'chennai' },
      { item_id: 4, item_text: 'kerala' },
      { item_id: 5, item_text: 'kochi' }
    ];
    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }
}
  

