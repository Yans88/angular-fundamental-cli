import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

interface UserType {
  name: string,
  kota: string
}

@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {

  details: any[] = [];

  constructor() {
  }

  public get() {
    return this.details;
  }

  public add(data: any) {
    this.details.push(data);
  }

  public edit(index: number, data: UserType) {
    this.details[index] = data;
  }

  public detailData(index: number) {
    return this.details[index];
  }

  public delete(index: number) {
    this.details.splice(index, 1)
  }
}
