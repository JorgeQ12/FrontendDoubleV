/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddPersonServiceService } from './addperson.service';

describe('Service: AddPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPersonServiceService]
    });
  });

  it('should ...', inject([AddPersonServiceService], (service: AddPersonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
