import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PassengerServiceService} from "../passenger-service.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {
  @Input('data') data: any;

  constructor(private route: ActivatedRoute,
              private passengerService: PassengerServiceService) {
  }

  ngOnInit(): void {
    const index: number = this.route.snapshot.params['id'];
    this.data = this.passengerService.detailData(index-1);
    this.data = {
      ...this.data,
      id: index
    }
  }


}
