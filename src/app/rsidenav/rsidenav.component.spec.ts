import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsidenavComponent } from './rsidenav.component';

describe('RsidenavComponent', () => {
  let component: RsidenavComponent;
  let fixture: ComponentFixture<RsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
