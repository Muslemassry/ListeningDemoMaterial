import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeTestClickablePage } from './take-test-clickable.page';

describe('TakeTestClickablePage', () => {
  let component: TakeTestClickablePage;
  let fixture: ComponentFixture<TakeTestClickablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeTestClickablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeTestClickablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
