import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeTestPage } from './take-test.page';

describe('TakeTestPage', () => {
  let component: TakeTestPage;
  let fixture: ComponentFixture<TakeTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
