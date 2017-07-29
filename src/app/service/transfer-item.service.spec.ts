import { TestBed, inject } from '@angular/core/testing';

import { TransferItemService } from './transfer-item.service';

describe('TransferItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferItemService]
    });
  });

  it('should ...', inject([TransferItemService], (service: TransferItemService) => {
    expect(service).toBeTruthy();
  }));
});
