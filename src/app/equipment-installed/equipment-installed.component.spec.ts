import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInstalledComponent } from './equipment-installed.component';

describe('EquipmentInstalledComponent', () => {
  let component: EquipmentInstalledComponent;
  let fixture: ComponentFixture<EquipmentInstalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentInstalledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentInstalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
