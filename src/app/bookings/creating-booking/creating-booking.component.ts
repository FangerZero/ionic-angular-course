import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-creating-booking',
  templateUrl: './creating-booking.component.html',
  styleUrls: ['./creating-booking.component.scss'],
})
export class CreatingBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'You Booked this Place!' }, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
