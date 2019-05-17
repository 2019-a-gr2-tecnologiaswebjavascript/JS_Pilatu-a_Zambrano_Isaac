import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChatComponent } from './item-chat.component';

describe('ItemChatComponent', () => {
  let component: ItemChatComponent;
  let fixture: ComponentFixture<ItemChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemChatComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
