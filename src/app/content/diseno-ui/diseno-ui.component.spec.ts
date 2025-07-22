import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoUiComponent } from './diseno-ui.component';

describe('DisenoUiComponent', () => {
  let component: DisenoUiComponent;
  let fixture: ComponentFixture<DisenoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisenoUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisenoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
