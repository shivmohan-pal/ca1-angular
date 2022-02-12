import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
