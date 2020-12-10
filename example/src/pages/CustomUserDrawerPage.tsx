import React from 'react';
import styled from 'styled-components';
import { TopBar } from 'scorer-ui-kit';


const Container = styled.div`
  margin: 0;
`

const CustomContentContainer = styled.div`
  padding: 10px 20px;
  border-bottom: ${({theme: {colors}}) => colors.divider} 1px solid;
`

const ExampleText = styled.div`
  font-size: 14px;
  font-style: italic;
  line-height: 20px;
  color: #999999;
`

const loggedInUser = "full.name@example.com";
const userSubmenu = [
  {
    text: 'Accounts',
    href: '#'
  },
  {
    text: 'Billing',
    href: '#'
  },
  {
    text: 'Payments',
    href: '#'
  }
]

const useSearch = true;
const useNotifications = true;
const showLanguage = true;
const logoutLink = "#"
const searchPlaceholder = "Search area names, etc.";



const CustomUserDrawerPage : React.FC = () => {


  const userDrawerBespoke = <CustomContentContainer>
    <ExampleText>
      <p>Custom content can be injected under the user menu like this.</p>
      <p>The styling for this is left to you to include, keeping it flexible.</p>
    </ExampleText>
  </CustomContentContainer>

  // userDrawerBespoke: See examples for implementation of this prop.

  return <Container><TopBar {...{userDrawerBespoke, loggedInUser, userSubmenu, useSearch, useNotifications, logoutLink, searchPlaceholder, showLanguage}}/></Container>;
};

export default CustomUserDrawerPage;