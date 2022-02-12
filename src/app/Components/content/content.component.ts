import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  productData = new Product('','', 12000, 120,true)
  constructor() { }

  ngOnInit(): void {
  }

}
