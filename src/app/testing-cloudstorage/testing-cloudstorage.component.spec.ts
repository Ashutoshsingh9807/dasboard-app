import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCloudstorageComponent } from './testing-cloudstorage.component';

describe('TestingCloudstorageComponent', () => {
  let component: TestingCloudstorageComponent;
  let fixture: ComponentFixture<TestingCloudstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingCloudstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingCloudstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
