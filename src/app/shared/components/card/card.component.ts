import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('image') image: {[key:string]:any} = {};

  constructor() { }

  ngOnInit() {}

}
