import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoneTestPage } from './done-test.page';

describe('DoneTestPage', () => {
  let component: DoneTestPage;
  let fixture: ComponentFixture<DoneTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoneTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
