import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  styleUrl: './customer-list.css',
  templateUrl: './customer-list.html',
})
export class CustomerList implements OnInit {
  customerGroups: any[] = [];
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customerGroups = data;
    });
  }
}
