import {Component, Input, OnInit} from '@angular/core';
import {PassengerServiceService} from '../../app/passenger-service.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  @Input('data') data: any;

  constructor(private passengerService: PassengerServiceService) {
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  edit(index:number, dataEdit:any) {
    dataEdit.id=index;
    console.log("dataEdit", dataEdit);
    this.passengerService.edit(index, dataEdit);
  }

  delete(index:number){
    this.passengerService.delete(index);
  }

}
