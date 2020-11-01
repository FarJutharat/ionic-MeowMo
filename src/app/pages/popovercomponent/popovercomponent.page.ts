import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular'
import { Router } from '@angular/router';;
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  constructor(private popover:PopoverController,
    private router : Router,
    public navCtrl: NavController,
    private popoverController: PopoverController ) { }

  ngOnInit() {
  }

  async ClosePopover()
  {
    //this.popover.dismiss
    await this.popoverController.dismiss();
     this.navCtrl.navigateForward(['schedule-delete'])
    //this.router.navigate(['schedule-delete'])
  }
}
