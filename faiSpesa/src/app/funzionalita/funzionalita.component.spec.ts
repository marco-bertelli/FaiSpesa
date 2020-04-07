import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunzionalitaComponent } from './funzionalita.component';

describe('FunzionalitaComponent', () => {
  let component: FunzionalitaComponent;
  let fixture: ComponentFixture<FunzionalitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunzionalitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunzionalitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
