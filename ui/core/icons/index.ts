export type guiIconName =
  | 'school'
  | 'code'
  | 'today'
  | 'person';

export type guiIconKey =
  | 'School'
  | 'Code'
  | 'Today'
  | 'Person';

export enum GUI_ICONS {
  School = 'school',
  Code = 'code',
  Today = 'today',
  Person = 'person',
}

export const GUI_ICON_CODEPOINTS: { [key in GUI_ICONS]: string } = {
  [GUI_ICONS.School]: '61697',
  [GUI_ICONS.Code]: '61698',
  [GUI_ICONS.Today]: '61699',
  [GUI_ICONS.Person]: '61700',
};
