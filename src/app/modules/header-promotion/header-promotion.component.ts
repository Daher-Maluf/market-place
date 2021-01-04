import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import {Path} from '../../config';
@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {
  path:String = Path.url;
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getData()
                   .subscribe(resp => {
                     console.log(resp);
                   })
  }

}
