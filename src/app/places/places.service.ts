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
      233,
      new Date('2019-04-01'),
      new Date('2019-10-01'),
    ), new Place(
      'p2',
      'AGHHHH',
      'Sleepy mansion for cats!',
      'https://d3so8ydeu5zkl7.cloudfront.net/cdn/905963/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/3/9/3995_2500x2500_300dpi.jpg',
      123,
      new Date('2019-04-01'),
      new Date('2019-10-01'),
    ), new Place(
        'p3',
        'AGHfasdfasdfHHH',
        'Sleepy asdfasdfasdfasdf for cats!',
        'https://petco.scene7.com/is/image/PETCO/2915837-center-1?$ProductDetail-large$',
        43,
        new Date('2019-04-01'),
        new Date('2019-10-01'),
      ), new Place(
        'p4',
        'Test Name',
        'DESCRIPTION GOES HERE',
        'https://petco.scene7.com/is/image/PETCO/2915837-center-1?$ProductDetail-large$',
        534,
        new Date('2019-04-01'),
        new Date('2019-10-01'),
      ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
