import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduleDeletePage } from './schedule-delete.page';

describe('ScheduleDeletePage', () => {
  let component: ScheduleDeletePage;
  let fixture: ComponentFixture<ScheduleDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
