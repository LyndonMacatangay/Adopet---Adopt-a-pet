import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Note } from '../services/data.service';
import { ModalPage } from '../modal/modal.page';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  notes: Note[] = [];
 
  constructor(
    private dataService: DataService, 
     private cd: ChangeDetectorRef,
     private router: Router,
      private alertCtrl: AlertController, 
      private modalCtrl: ModalController,
      private authService: AuthService,

      ) {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
      this.cd.detectChanges();
    });
  }
 
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Post Your Pet',
      inputs: [
        {
          name: 'pet_name',
          placeholder: 'Name of Pet',
          type: 'text'
        },
        {
          name: 'owner',
          placeholder: 'Name of Owner',
          type: 'text'
        },
        {
          name: 'specie',
          placeholder: 'Specie',
          type: 'text'
        },
        {
          name: 'contact',
          placeholder: 'Contact Number for adoption',
          type: 'text'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Post',
          handler: res => {
            this.dataService.addNote({ pet_name: res.pet_name, owner: res.owner,specie:res.specie, contact:res.contact });
          }
        }
      ]
    });
 
    await alert.present();
  }
 
  async openNote(note: Note) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
 
    await modal.present();
  }
}