/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddUserServiceService } from './adduser.service';

describe('Service: AddUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUserServiceService]
    });
  });

  it('should ...', inject([AddUserServiceService], (service: AddUserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
