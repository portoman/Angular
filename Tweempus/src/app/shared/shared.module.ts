import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwipListComponent } from './twimp/twip-list/twip-list.component';

@NgModule({
  declarations: [TwimpCardComponent, TwipListComponent],
  imports: [CommonModule],
  exports: [TwimpCardComponent, TwipListComponent],
})
export class SharedModule {}
