import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {housingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
templateUrl: './home.component.html',
  
 
 styleUrl: './home.component.css',
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
//template: `
   // <section>
     // <form>
       // <input type="text" placeholder="Filter by city" />
        //<button class="primary" type="button">Search</button>
      //</form>
   // </section>
  //export class HomeComponent {
 