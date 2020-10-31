import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
  
})
export class SchedulePage {
  
  constructor(public router : Router,
    public popoverController: PopoverController,
    public alertCtrl: AlertController ){  }
  

  doPrompt() {
    this.alertCtrl.create({
      header:"ประชุม",
      subHeader:"คำอธิบาย",
      message: 'โปรเจคงานวิชาsoftware',
      cssClass: "secondary",
      buttons:[
        {
        text:"แก้ไข",
        handler:()=>{
          this.router.navigate(['schedule2']);
        }
      },
      {
        text:"ลบกิจกรรม",
        cssClass: "secondary",
        handler:()=>{
          this.router.navigate(['schedule2']);
        }
      }
    ]
    }).then((promptElement)=>{
      promptElement.present();
    })
  }



  openActivity() {
    this.router.navigate(['about']);
  }
  

  
  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverController,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }
  
}  

