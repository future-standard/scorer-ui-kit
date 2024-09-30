import React, { Fragment, useRef } from 'react';
import { AlertType, ITooltipPosition, ITooltipType, Tooltip } from 'scorer-ui-kit';
import styled, { css } from 'styled-components';

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
`;

const StatusDot = styled.div<{ type?: AlertType, tooltipMessage?: string }>`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: ${({ type }) => `var(--${type}, var(--primary-9))`};
    ${({ tooltipMessage }) => tooltipMessage && css`
      &:hover {
        cursor: pointer;
      };
    `}
`;

interface IStatusDot {
  type?: AlertType
  tooltipMessage?: string
  tooltipIcon?: string
  tooltipType?: ITooltipType
  tooltipPosition?: ITooltipPosition
}

interface IStatusBundle {
  statusList: IStatusDot[]
}

export const StatusComponent: React.FC<IStatusBundle> = ({ statusList }) => {

  const statusRefs = useRef<(React.RefObject<HTMLDivElement>)[]>([]);
  statusRefs.current = statusList.map(() => React.createRef<HTMLDivElement>());

  return (
    <StatusWrapper>
      {
        statusList.map(({ type, tooltipMessage, tooltipIcon, tooltipType, tooltipPosition }, index) => {
          return (
            <Fragment key={index}>
              <StatusDot ref={statusRefs.current[index]} type={type} tooltipMessage={tooltipMessage} />
              {tooltipMessage && (
                <Tooltip tooltipFor={statusRefs.current[index]} message={tooltipMessage} icon={tooltipIcon} type={tooltipType} tooltipPosition={tooltipPosition} />)
              }
            </Fragment>
          )
        })
      }
    </StatusWrapper>
  )
}