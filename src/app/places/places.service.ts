import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Meow Mix Mansion',
      'Beautiful mansion for cats!',
      'https://petco.scene7.com/is/image/PETCO/2915837-center-1?$ProductDetail-large$',
      233.22),
    new Place(
      'p2',
      'AGHHHH',
      'Sleepy mansion for cats!',
      'https://d3so8ydeu5zkl7.cloudfront.net/cdn/905963/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/3/9/3995_2500x2500_300dpi.jpg',
      123.22),
      new Place(
        'p3',
        'AGHfasdfasdfHHH',
        'Sleepy asdfasdfasdfasdf for cats!',
        'https://petco.scene7.com/is/image/PETCO/2915837-center-1?$ProductDetail-large$',
        43.22),
      new Place(
        'p3',
        'Test Name',
        'DESCRIPTION GOES HERE!!!',
        'https://petco.scene7.com/is/image/PETCO/2915837-center-1?$ProductDetail-large$',
        534.33)
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
