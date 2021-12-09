import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() mode: string;
  @Input() home: string;
  @Input() about: string;
  @Input() contact: string;

  constructor () { }

  ngOnInit(): void {
    console.log(location.pathname);
  }

}
