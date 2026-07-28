import type React from 'react';
import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

export type IChipZoneBreak = HTMLAttributes<HTMLDivElement>;

/* Figma "Spaces/Top Bar/Zone Break": the 12px band that separates two zones of the top bar. It
   owns both edge hairlines, which is why ChipBar suppresses its first cell's left divider
   unconditionally — that half of the rule already shipped, this is the other half.

   Sits BETWEEN bars, never inside one: a zone break is not a cell of either zone. */
const Break = styled.div`
  /* border-box keeps both 1px hairlines inside the 12px, matching Figma's 12px node. With the
     CSS default the band renders 14px and the top bar drifts 2px per zone break. */
  box-sizing: border-box;
  /* ChipBar protects its own children, but a zone break sits outside any bar, so it has to
     protect itself or a narrow top bar squashes the band. */
  flex-shrink: 0;
  width: 12px;
  height: 56px;
  background-color: var(--grey-3);
  border-left: 1px solid var(--grey-4);
  border-right: 1px solid var(--grey-4);
`;

/* aria-hidden before the spread, so a consumer can override it — the ordering ChipBar uses for
   role / aria-label. Decorative by default.

   To have it announced, both attributes are required: `role='separator'` on its own is inert,
   because the default aria-hidden='true' survives the spread and keeps the element out of the
   accessibility tree. Pass `role='separator' aria-hidden={false}`. */
const ChipZoneBreak: React.FC<IChipZoneBreak> = (props) => <Break aria-hidden='true' {...props} />;

export default ChipZoneBreak;
