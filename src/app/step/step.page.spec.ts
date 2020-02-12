import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepPage } from './step.page';

describe('StepPage', () => {
  let component: StepPage;
  let fixture: ComponentFixture<StepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
