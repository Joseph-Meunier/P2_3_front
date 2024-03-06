import {Component, Input, OnInit} from '@angular/core';
import {EventProService} from "../../services/application/eventpro.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationDeleteComponent} from "../proevent-delete/application-delete.component";
import {IEventPro} from "../../interfaces/ieventpro";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-application-list',
    standalone: true,
    templateUrl: './proevent-list.component.html',
    styleUrl: './proevent-list.component.css',
    imports: [
        NgIf,
        NgForOf,
        FormsModule,
        CommonModule
    ]
})

export class ApplicationListComponent implements OnInit {

  proEvents : IEventPro[] = [];
  applicationName: string = '';
  isVisibleEdit: boolean = false;
  editApplicationData: any = {};

  selectedIcon: any = null;

  selectIcon(icon: any) {
    this.selectedIcon = icon;
  }

  constructor(
    private _EventProService: EventProService,
    public dialog: MatDialog
  ) {
  }
  ngOnInit(): void {
    this.getApplications();
  }

  editApplication(application: any) {
    this.isVisibleEdit = true;
    this.editApplicationData = { ...application };
  }

  updateApplication() {
    this.editApplicationData.Icon = this.selectedIcon.path;
    this._EventProService.updateApplication(this.editApplicationData)
      .then(response => {
        this.getApplications();
        this.isVisibleEdit = false;
      })
      .catch(error => {
        console.error('Error updating application:', error);
      });
  }

  getApplications() {
    this._EventProService.getProEvents().then((proEvents) => {
      this.proEvents = proEvents; 
    }).catch((error) => {
      console.log(error);
    });
  }

  

  onDelete(proEvent: IEventPro) {
    const confirmDeleteProEvent = this.dialog.open(ApplicationDeleteComponent, {data: false});
    confirmDeleteProEvent.afterClosed().subscribe(result => {
      if(result) {
        this._EventProService.deleteApplication(proEvent.Id).then(() => {
          window.location.reload()
        })
      }
    });
  }

}
