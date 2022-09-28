import {Component} from '@angular/core';
import {PassengerServiceService} from '../app/passenger-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(public passengerService: PassengerServiceService) {
  }

  title = 'myApp';
  data = this.passengerService.get();
  dataMerk = [{
    merk: 'hanok',
    status: true
  },
    {
      merk: 'pilip',
      status: false
    }]
  dataSring = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
    '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
    '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
