import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogofolioComponent } from './logofolio.component';

describe('LogofolioComponent', () => {
  let component: LogofolioComponent;
  let fixture: ComponentFixture<LogofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogofolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
