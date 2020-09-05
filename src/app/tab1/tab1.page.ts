import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { MemoryItem } from '../model/MemoryItem';
import { MemoryItemUtil } from '../utils/MemoryItemUtil';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public memoryItensList: MemoryItem[] = [];
  public selectedItens = [];
  public time: number;
  public missed = 0;

  private readonly SECONDS_TO_START_GAME = 5;
  private score = 0;
  private isIniting = true;

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit(): void {
    const memoryItemUtil = new MemoryItemUtil();
    this.memoryItensList = memoryItemUtil.build();
    memoryItemUtil.shuffle(this.memoryItensList);

    this.startCountDown();
    this.hideAfterXTime();
  }

  private startCountDown() {
    var countdown = 5;
    this.time = countdown;
    setInterval(function () {
      countdown = --countdown;
      this.time = countdown;
    }, 1000);
  }

  public hideAfterXTime() {
    const timeinMS = this.SECONDS_TO_START_GAME * 1000;
    const thisClass = this;
    setTimeout(function () {
      for (let i = 0; i < thisClass.memoryItensList.length; i++) {
        thisClass.memoryItensList[i].selected = false;
      }
      thisClass.isIniting = false;
    }, timeinMS);
  }

  public selectItem(item: MemoryItem) {
    if (this.isIniting) {
      this.presentToast('Aguarde!');
      return;
    }

    if (this.checkIfItemIsAlreadySelected(item)) {
      return;
    }

    if (this.selectedItens.length <= 2 && !item.disabled) {
      item.selected = true;
      this.selectedItens.push(item)
    }

    if (this.selectedItens.length === 2) {
      this.compareItens(this.selectedItens);
    }
  }

  private checkIfItemIsAlreadySelected(item: MemoryItem): boolean {
    if (this.selectedItens[0] && this.selectedItens[0].id == item.id) {
      return true;
    }
  }

  public async compareItens(itens: MemoryItem[]) {
    const firstItem = itens[0];
    const secondItem = itens[1];

    if (firstItem.value === secondItem.value) {
      this.disableSelectedItens(firstItem, secondItem);
      this.score++;
    } else {
      this.resetSelectedItem(firstItem);
      this.resetSelectedItem(secondItem);
      this.missed++;
    }

    if (this.score === 6) {
      await this.presentAlert();
    }

    this.selectedItens = [];
  }

  private resetSelectedItem(item: MemoryItem) {
    const thisClass = this;
    setTimeout(function () {
      thisClass.memoryItensList.forEach((mi) => {
        if (mi.id === item.id) {
          mi.selected = false;
        }
      });
    }, 500);
  }

  private disableSelectedItens(firstItem: MemoryItem, secondItem: MemoryItem) {
    this.disableItem(firstItem);
    this.disableItem(secondItem);
  }

  private disableItem(item: MemoryItem) {
    this.memoryItensList.forEach((mi) => {
      if (mi.id === item.id) {
        mi.disabled = true;
      }
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Parabéns!!!',
      message: 'Você finalizou o jogo. Aperte em OK para iniciar novamente.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.ngOnInit();
          }
        }
      ]
    });

    await alert.present();
  }

}
