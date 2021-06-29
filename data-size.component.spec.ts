import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSizeComponent } from './data-size.component';

describe('DataSizeComponent', () => {
  let component: DataSizeComponent;
  let fixture: ComponentFixture<DataSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
