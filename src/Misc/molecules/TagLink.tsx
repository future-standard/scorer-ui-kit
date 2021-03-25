import React from 'react';
import styled from 'styled-components';
import Tag, {ITag} from '../atoms/Tag';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface OwnProps {
  to?: string
}

export type ITagLink = OwnProps & ITag;

const TagLink : React.FC<ITagLink> = ({
  to='',
  ...props
}) => {
  return(
    <StyledLink to={to}>
      <Tag {...props} enableHover={true} />
    </StyledLink>
  );
};

export default TagLink;