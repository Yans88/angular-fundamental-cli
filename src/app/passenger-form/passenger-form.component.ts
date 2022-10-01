import {Component, OnInit} from '@angular/core';
import {PassengerServiceService} from '../../app/passenger-service.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {


  constructor(private passengerService: PassengerServiceService) {
  }

  ngOnInit(): void {
  }


  onClickSubmit(dt: NgForm) {
    this.passengerService.add(dt);

  }

}
