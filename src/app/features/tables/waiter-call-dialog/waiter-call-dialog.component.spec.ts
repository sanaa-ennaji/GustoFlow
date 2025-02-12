import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterCallDialogComponent } from './waiter-call-dialog.component';

describe('WaiterCallDialogComponent', () => {
  let component: WaiterCallDialogComponent;
  let fixture: ComponentFixture<WaiterCallDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaiterCallDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaiterCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
