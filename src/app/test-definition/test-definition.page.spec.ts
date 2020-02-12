import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestDefinitionPage } from './test-definition.page';

describe('TestDefinitionPage', () => {
  let component: TestDefinitionPage;
  let fixture: ComponentFixture<TestDefinitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDefinitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestDefinitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
