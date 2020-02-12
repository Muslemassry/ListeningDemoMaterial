import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildAssignTestPage } from './child-assign-test.page';

describe('ChildAssignTestPage', () => {
  let component: ChildAssignTestPage;
  let fixture: ComponentFixture<ChildAssignTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAssignTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildAssignTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
