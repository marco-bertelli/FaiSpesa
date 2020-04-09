import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrealistaComponent } from './crealista.component';

describe('CrealistaComponent', () => {
  let component: CrealistaComponent;
  let fixture: ComponentFixture<CrealistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrealistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrealistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
