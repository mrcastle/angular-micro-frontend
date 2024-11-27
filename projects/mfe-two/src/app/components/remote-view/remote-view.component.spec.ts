import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteViewComponent } from './remote-view.component';

describe('RemoteViewComponent', () => {
  let component: RemoteViewComponent;
  let fixture: ComponentFixture<RemoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
