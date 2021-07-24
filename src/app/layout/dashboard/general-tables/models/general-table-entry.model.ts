import { Grid } from 'src/app/core/decorators/grid.decorator';
import { EntityModel } from 'src/app/core/models/entity.model';
import { Display } from '../../../../core/decorators/display.decorator';
import { PrimaryKey } from 'src/app/core/decorators/primary-key.decorator';

@Grid('GeneralTableEntryGrid')
export class GeneralTableEntry extends EntityModel {
  @PrimaryKey()
  @Display({
    caption: 'מספר כניסה',
    captionInEnglish: 'Entry Number',
    dataType: 'numeric'
  })
  entryNumber!: number;

  @Display({
    caption: 'תאור',
    captionInEnglish: 'Description',
    dataType: 'text'
  })
  description!: string;
}
