import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent,],
  imports: [
    CommonModule,
  ],
  bootstrap: [FooterComponent],
})
export class FooterModule {
  constructor() {}
 }
