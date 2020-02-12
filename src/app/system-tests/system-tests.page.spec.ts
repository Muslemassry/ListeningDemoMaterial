import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemTestsPage } from './system-tests.page';

describe('SystemTestsPage', () => {
  let component: SystemTestsPage;
  let fixture: ComponentFixture<SystemTestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemTestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
