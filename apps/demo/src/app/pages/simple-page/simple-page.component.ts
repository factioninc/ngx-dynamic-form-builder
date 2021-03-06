import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss']
})
export class SimplePageComponent {

  source = {
    html: require('!!raw-loader?lang=html!./../../panels/company-panel/company-panel.component.html'),
    ts: require('!!raw-loader?lang=typescript!./../../panels/company-panel/company-panel.component.ts')
  };

  otherFiles: { name: string, language: string, content: string }[] = [
    {
      name: 'company.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../shared/models/company.ts')
    },
    {
      name: 'custom-validators.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../shared/utils/custom-validators.ts')
    }
  ];
}
