import { Component, OnInit } from '@angular/core';
import data from '../data/resume.json';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  summary: string;
  constructor() { }

  ngOnInit() {
    this.summary = (<any>data).summary;
  }

}
