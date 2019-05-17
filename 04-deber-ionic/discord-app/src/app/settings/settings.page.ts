import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from '../servicios/mensajeria.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private readonly _mensajeriaService:MensajeriaService,
    public alertController: AlertController,
    public toastController: ToastController) { }
  nombreAutor:string='';
  ngOnInit() {
    this.nombreAutor=this._mensajeriaService.autor;
  }

  guardarCambios(){
    
    if(this.nombreAutor.length==0){
      this.presentAlertError();
    }else{
      this._mensajeriaService.setAutor(this.nombreAutor);
      this.presentToastSuccess();
    }
  }
  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: 'El nombre del autor no puede estar vacío.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Tu configuración ha sido guardada.',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
}


