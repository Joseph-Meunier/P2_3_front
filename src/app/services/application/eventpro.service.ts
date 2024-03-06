import { Injectable } from '@angular/core';
import {HttpRequestService} from "../../../utils/http-request.service";
import {IEventPro} from "../../interfaces/ieventpro";

@Injectable({
  providedIn: 'root'
})
export class EventProService {

  constructor(private _httpRequest: HttpRequestService) { }

  public getProEvents() {
    return new Promise<IEventPro[]>((resolve, reject) => {
      return this._httpRequest.get<any>('/professional-events').subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      });
    });
  }

  public createApplication(applicationData: object){
    return new Promise<any>((resolve, reject) => {
      return this._httpRequest.post<any>('/professional-event/add', applicationData).subscribe({
        next: result => resolve(result),
        error: error => reject(error)
      })
    })
  }
  public updateApplication(application: IEventPro){
    return new Promise<IEventPro>((resolve, reject)=> {
      return this._httpRequest.update<any>('/professional-event', application).subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      })
    })
  }

  public deleteApplication(id: string) {
    return new Promise<IEventPro>((resolve, reject) => {
      this._httpRequest.delete<IEventPro>(`/professional-event/${id}/delete`).subscribe(({
        next: result => resolve(result),
        error: err => reject(err)
      }))
    })
  }
}
