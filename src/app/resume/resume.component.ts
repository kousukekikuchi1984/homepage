import { Component, OnInit } from '@angular/core';
import * as data from '../data/resume.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  summary: string;
  executive_summary: string;
  companies: Array;

  constructor() {
  }

  ngOnInit() {
    this.summary = (<any>data).summary;
    this.executive_summary = (<any>data).executive_summary;
    this.companies = (<any>data).companies;
  }
}
