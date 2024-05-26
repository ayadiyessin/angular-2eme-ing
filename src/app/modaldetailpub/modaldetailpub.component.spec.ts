import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetailpubComponent } from './modaldetailpub.component';

describe('ModaldetailpubComponent', () => {
  let component: ModaldetailpubComponent;
  let fixture: ComponentFixture<ModaldetailpubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaldetailpubComponent]
    });
    fixture = TestBed.createComponent(ModaldetailpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
