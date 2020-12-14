import { ComponentFixture, TestBed } from '@angular/core/testing';
import { asapScheduler, of, scheduled } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { WithDependencyComponent } from './with-dependency.component';

describe('WithDependencyComponent', () => {
  let component: WithDependencyComponent;
  let fixture: ComponentFixture<WithDependencyComponent>;
  let el: any;
  let dataService: DataService;
  let DataServiceStub: Partial<DataService> = {
       getData: () => of ([{ name: 'Serhii', title: 'Senior' }, { name: 'Dan', title: 'Middle' }]),
       getWelcomeWords: () => "Welcome"
}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithDependencyComponent ],
      providers: [{provide: DataService, useValue: DataServiceStub}] 
      //вместо реализации реального датасервиса берем фейковый, если useValue убрать то реальный сервис будет использоваться
      //fixture.componentInstance если сервис на уровне не модуля а компонента.
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDependencyComponent);
    dataService = TestBed.inject(DataService); 
      //  get the "welcome" element by CSS selector (e.g., by class name)
      component = fixture.componentInstance;
      el = fixture.nativeElement.querySelector('.welcome');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getWelcomeWords of dataService', () => {
    const getDataSpy = spyOn (dataService, 'getWelcomeWords');
    component.ngOnInit();
    expect(getDataSpy).toHaveBeenCalled();
  });
  it('should call getData of dataService', () => {
    const getDataSpy = spyOn (dataService, 'getData');
    component.ngOnInit();
    expect(getDataSpy).toHaveBeenCalled();
  });
  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome');
  });
  

});
