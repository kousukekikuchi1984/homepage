// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we import all spec files directly.
import './app/app.component.spec';
import './app/contacts/contacts.component.spec';
import './app/footer/footer.component.spec';
import './app/header/header.component.spec';
import './app/home/home.component.spec';
import './app/resume/resume.component.spec';
import './app/works/works.component.spec';
