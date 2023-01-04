import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IItemProps } from '../../models/ItemProps';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() public props!: IItemProps;
}
