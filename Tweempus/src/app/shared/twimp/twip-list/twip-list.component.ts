import { Component, OnInit } from '@angular/core';

import { TwimpModel } from '../twimp.model';
import { Author } from '../../author/author';

@Component({
  selector: 'tweempus-twip-list',
  templateUrl: './twip-list.component.html',
  styleUrls: ['./twip-list.component.css'],
})
export class TwipListComponent implements OnInit {
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet posuere arcu consectetur ut. Nam volutpat ligula ac nunc consectetur vestibulum.';
  authors: Author[] = [];
  twimps: TwimpModel[] = [];

  ngOnInit() {
    this.authors.push(new Author('1'));
    this.twimps.push(new TwimpModel('1','',this.authors[0],this.text,'01/01/2023'))
    this.twimps.push(new TwimpModel('2','',this.authors[0],this.text,'01/01/2023'))
    this.twimps.push(new TwimpModel('3','',this.authors[0],this.text,'01/01/2023'))
    this.twimps.push(new TwimpModel('4','',this.authors[0],this.text,'01/01/2023'))

  }
}
