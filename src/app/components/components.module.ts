import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShrinkHeaderComponent } from './shrink-header/shrink-header.component';



@NgModule({
  declarations: [ShrinkHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ShrinkHeaderComponent]
})
export class ComponentsModule { }
