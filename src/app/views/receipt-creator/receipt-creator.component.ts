import { Component } from '@angular/core';
import { Person } from '../../components/receipt/person';
import { Product } from '../../components/receipt/product';
import { CheckboxPersonProductModel } from '../../components/receipt/checkbox-person-product.model';
import { ReceiptCacheService } from 'src/app/services/receipt-cache.service';
import { PersonObserver } from '../../components/receipt/person-observer';
import { AddProductFormComponent } from "../../components/receipt/product-list/add-product-form/add-product-form.component";
import { PersonListComponent } from "../../components/receipt/person-list/person-list.component";
import { ProductListComponent } from "../../components/receipt/product-list/product-list.component";

@Component({
    templateUrl: './receipt-creator.component.html',
    styleUrls: ['./receipt-creator.component.scss'],
    standalone: true,
    imports: [AddProductFormComponent, PersonListComponent, ProductListComponent]
})
export class ReceiptCreatorComponent implements PersonObserver {
  persons: Person[] = [];
  products: Product[] = [];

  constructor(private receiptCacheService: ReceiptCacheService) {
    this.receiptCacheService.addObservator(this);
  }

  ngOnInit() {
    this.seedSample();
  }

  private seedSample() {
    this.products = [
      new Product('Milk', 1.07),
      new Product('Rice', 1.59),
      new Product('Eggs', 3.14),
      new Product('Cheese', 12.6),
      new Product('Chicken Breasts', 9.4),
      new Product('Apples', 2.31),
      new Product('Tomato', 2.58),
      new Product('Potato', 1.75),
      new Product('Onion', 1.1),
      new Product('Cucumber', 2.34),
      new Product('Chips', 3.67),
      new Product('Cookies', 4.85),
    ];

    this.persons = [
      new Person('Bob'),
      new Person('Alice'),
      new Person('Joe'),
      new Person('Ann'),
    ];

    this.receiptCacheService.setPersons(this.persons);
  }

  onProductAdded(product: Product) {
    this.products.push(product);
  }

  onProductRemoved(product: Product) {
    product.removeAllPersons();
    this.products = this.products.filter((p) => p !== product);
  }

  onPersonsChanged(persons: Person[]): void {
    this.persons = persons;
  }

  onCheckboxProductChanged(personProductModel: CheckboxPersonProductModel) {
    if (personProductModel.checked) {
      personProductModel.person.addProduct(personProductModel.product);
      personProductModel.product.addPerson(personProductModel.person);
    } 
    else {
      personProductModel.person.removeProduct(personProductModel.product);
      personProductModel.product.removePerson(personProductModel.person);
    }
  }
}
