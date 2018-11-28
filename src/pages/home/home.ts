import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto: any;

  constructor(public navCtrl: NavController, public camera: Camera, private vibration: Vibration) {
  }

  defOptions(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    return options;
  }

  tirarFoto(){
    this.camera.getPicture(this.defOptions()).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.foto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  salvarMulher(){
    this.vibration.vibrate(1000);
  }


}
