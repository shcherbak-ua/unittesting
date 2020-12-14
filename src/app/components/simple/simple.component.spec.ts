import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //проверяем что наш метод из компоненты был вызван
  it('should emit toggleAction once clicked'), () => {
    const spy = spyOn(component, 'toggleAction');
    fixture.debugElement.query(By.css('p')).triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }
  it('should log message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.toggleAction();
    expect(consoleSpy).toHaveBeenCalled();
  })
});
