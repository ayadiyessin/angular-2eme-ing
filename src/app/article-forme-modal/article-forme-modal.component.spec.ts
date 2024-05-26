import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormeModalComponent } from './article-forme-modal.component';

describe('ArticleFormeModalComponent', () => {
  let component: ArticleFormeModalComponent;
  let fixture: ComponentFixture<ArticleFormeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFormeModalComponent]
    });
    fixture = TestBed.createComponent(ArticleFormeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
