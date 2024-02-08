import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesarrolloComponent } from '../desarrollo/desarrollo.component';
import { IndexComponent } from './index.component';
import { RouterLink } from '@angular/router';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent, DesarrolloComponent, RouterLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
