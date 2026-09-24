import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {

  categories: any;

  constructor(private catalogService: CatalogService) {
    this.categories = catalogService.getCategories();
  }

}