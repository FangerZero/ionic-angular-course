import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.services';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingsService: BookingService, ) { }

  ngOnInit() {
    this.loadedBookings = this.bookingsService.bookings;
  }

  onCancelBooking(offerId: string, bookingSlider: IonItemSliding)  {
    bookingSlider.close();
    // Cancel Booking with OfferId
  }

}
