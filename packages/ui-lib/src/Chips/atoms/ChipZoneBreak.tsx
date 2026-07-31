import type React from 'react';
import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

export type IChipZoneBreak = HTMLAttributes<HTMLDivElement>;

/* The 12px band that separates two zones of the top bar, owning both edge hairlines.

   Sits BETWEEN bars, never inside one: a zone break is not a cell of either zone.

   `box-sizing: border-box` keeps both 1px hairlines inside the 12px. With the CSS default the band
   renders 14px and the top bar drifts 2px per zone break.

   `flex-shrink: 0`: a zone break sits outside any bar, so it has to protect itself or a narrow top
   bar squashes the band. */
const Break = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 12px;
  height: 56px;
  background-color: var(--grey-3);
  border-left: 1px solid var(--grey-4);
  border-right: 1px solid var(--grey-4);
`;

/* aria-hidden before the spread, so a consumer can override it. Decorative by default.

   To have it announced, both attributes are required: `role='separator'` on its own is inert,
   because the default aria-hidden='true' survives the spread and keeps the element out of the
   accessibility tree. Pass `role='separator' aria-hidden={false}`. */
const ChipZoneBreak: React.FC<IChipZoneBreak> = (props) => <Break aria-hidden='true' {...props} />;

export default ChipZoneBreak;
