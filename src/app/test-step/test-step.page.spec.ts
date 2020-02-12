import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestStepPage } from './test-step.page';

describe('TestStepPage', () => {
  let component: TestStepPage;
  let fixture: ComponentFixture<TestStepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestStepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
