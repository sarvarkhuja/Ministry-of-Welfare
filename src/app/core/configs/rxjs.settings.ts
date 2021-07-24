import { LookupModel } from './../models/lookup.model';
import { map } from 'rxjs/operators';

export const selectMap = map((s: LookupModel[]) =>
  s.map((w) => {
    if (w.entryNumber !== null && w.entryNumber !== undefined && w.description) {
      w.textField = `${w.entryNumber} | ${w.description}`;
    } else {
      w.textField = w.description;
    }
    return w;
  })
);

export const convertCodeToNumber = map((s: any[]) =>
  s.map((w) => {
    w.entryNumber = w.entryNumber ? Number(w.entryNumber) : w.entryNumber;
    if (w.entryNumber != null && w.entryNumber !== undefined && w.description) {
      w.textField = `${w.entryNumber} | ${w.description}`;
    } else {
      w.textField = w.description;
    }
    return w;
  })
);
