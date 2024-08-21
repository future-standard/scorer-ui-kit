import React, { FC } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalUI, defaultTheme, PageHeader, useThemeToggle, ButtonsStack, IButtonStack } from "scorer-ui-kit";


const defaultBtn : IButtonStack[] = [
  {id:'primaryBase0', buttonType: 'default', text:'Example Action 1'},
  {id:'secondaryBase1', buttonType: 'default', text:'Example Action 2', design: 'secondary'},
  {id:'buttonWithIcon2', buttonType: 'icon-button', text:'Delete Instance', design: 'danger', icon: 'DevicesScorerEdge'},
]

const GlobalUIPage: FC = () => {

  const {onThemeToggle, isLightMode} = useThemeToggle();

  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalUI
          accountOptionText="Account Options"
          canAlwaysPin
          legacyLayout={true}
          isLightMode={isLightMode}
          switchThemeText='SWITCH THEME'
          selectedThemeText={isLightMode ? 'LIGHT MODE' : 'DARK MODE' }
          onThemeToggle={onThemeToggle}
          hasSwitchTheme
          content={{
            items: [
              {
                href: "/welcome",
                icon: "Home",
                title: "Welcome",
              },
              {
                href: "/company",
                icon: "Detection",
                submenu: [
                  {
                    href: "/company/about",
                    title: "About us",
                  },
                  {
                    href: "/company/team",
                    title: "Team",
                  },
                  {
                    href: "/company/contact",
                    title: "Contact",
                  },
                  {
                    href: "/company/table-example",
                    title: "Table Example",
                  },
                  {
                    href: "https://www.google.com/",
                    isExternalLink: true,
                    title: "External link",
                  },
                ],
                title: "Company",
              },
              {
                href: "/services",
                icon: "Usage",
                submenu: [
                  {
                    title: "Online Services",
                  },
                  {
                    href: "/services/custom",
                    title: "Service custom",
                  },
                  {
                    href: "/services/special",
                    title: "Service special",
                  },
                  {
                    href: "/services/extra-special",
                    title: "Service extra special",
                  },
                  {
                    title: "On site Services",
                  },
                  {
                    href: "/services/special",
                    title: "Service special",
                  },
                  {
                    href: "/services/extra-special",
                    title: "Service extra special",
                  },
                ],
                title: "Services",
              },
              {
                href: "https://www.google.com/maps",
                icon: "Zone",
                isExternalLink: true,
                title: "External link",
              },
            ],
          }}
          currentUserText="Current User"
          customDrawer={{
            customComponent: <h1>Hello Drawer</h1>,
            icon: "Add",
            status: "danger",
            width: "280px;",
          }}
          hasCurrentUser
          hasLanguage
          hasLogout
          hasNotifications
          hasSearch
          home="#"
          loggedInUser="full.name@example.com"
          logoutLink="#"
          logoutText="Logout"
          maxWidth="1200px"
          notificationsHistory={{
            noNotificationsText: "No new notifications",
            read: [
              {
                imgUrl: "",
                message: "The device has correctly turn off",
                time: "3 days ago",
                title: "Device is off",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn on",
                time: "3 days ago",
                title: "Device is on",
              },
              {
                imgUrl: "",
                message: "The device has bean correctly added",
                time: "3 days ago",
                title: "A new device was added",
              },
            ],
            readNotificationsText: "New",
            unread: [
              {
                imgUrl: "",
                message:
                  "A short message limited to two lines. Extra text will just truncat...",
                time: "Just Now",
                title: "Event Type",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn off",
                time: "1 min ago",
                title: "Device is off",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn on",
                time: "6 mins ago",
                title: "Device is on",
              },
              {
                imgUrl: "",
                message:
                  "The connections is not working properly. Please verify your connection or contact your personal support.",
                time: "1 hour ago",
                title: "Connection was interrupted",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn off",
                time: "3 hour ago",
                title: "Device is off",
              },
            ],
            unreadNotificationsText: "Read",
          }}
          searchPlaceholder="Search area names, etc."
          supportUrl="/support"
          userSubmenu={[
            {
              href: "/user/accounts",
              text: "Accounts",
            },
            {
              href: "/user/billing",
              text: "Billing",
            },
            {
              href: "/user/payments",
              text: "Payments",
            },
          ]}
        >
          <PageHeader
            title='Welcome'
            introductionText='Thanks for using our UI library.'
            rightContent={<ButtonsStack buttons={defaultBtn}/>}
          />

          <p>Ea eu qui labore esse consectetur excepteur aliquip enim. Mollit in proident laboris culpa deserunt. Do occaecat velit consequat quis aliqua ad adipisicing do ad cillum esse ad Lorem. Et exercitation aute nisi mollit sit exercitation cillum nulla proident officia magna. Consequat ad veniam pariatur incididunt cillum ea id quis ad anim duis non occaecat. Sunt ad reprehenderit veniam labore ipsum laborum esse excepteur ex ex. Ea do dolore aliquip aliquip culpa qui elit aliquip aliqua est culpa nisi et esse.</p>
          <p>Veniam deserunt tempor mollit laborum enim ullamco exercitation consectetur incididunt. Nulla ex voluptate qui nisi. Anim nostrud minim quis cillum sint Lorem fugiat ullamco quis. Nulla ad tempor eiusmod. Adipisicing duis ipsum aliquip fugiat veniam ipsum minim commodo eu aute do quis cillum anim sint. Ea consectetur officia culpa magna qui qui ex elit.</p>
          <p>Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. Ex deserunt enim reprehenderit dolore mollit sit ut reprehenderit ullamco anim eiusmod. Aliquip exercitation mollit minim in consequat occaecat ut.</p>
          <p>Esse non magna exercitation nisi exercitation. Est elit quis laborum laborum deserunt. Officia excepteur proident eu elit laboris occaecat mollit. Exercitation elit mollit sint do laboris cupidatat deserunt incididunt enim in fugiat. Aliquip adipisicing ex Lorem proident aliquip nostrud deserunt nostrud mollit magna magna consectetur cupidatat amet sit. Do sint quis officia occaecat fugiat tempor dolor mollit ad dolore sit Lorem aute officia aute. Velit laboris Lorem Lorem elit in adipisicing qui veniam.</p>
          <p>Duis magna laboris cillum nostrud occaecat velit laboris duis. Aliqua cupidatat et consectetur amet ad exercitation nostrud ipsum in culpa qui consequat. Deserunt anim laborum est incididunt magna aute consectetur. In voluptate consequat minim non aute mollit ut cupidatat ex do cupidatat non.</p>
          <p>Ut labore sunt mollit fugiat exercitation ut ut cupidatat duis est do laboris laborum ad. Ut qui voluptate ipsum eiusmod eiusmod nisi quis quis dolore aliquip ut nulla labore. Occaecat quis proident ullamco commodo ut ad elit ea aliquip est Lorem ex aliquip fugiat proident. Pariatur occaecat laborum exercitation voluptate laboris consequat culpa dolore esse ad irure. Minim laboris sit quis officia culpa elit non amet sit nulla.</p>
          <p>Esse duis sit consectetur est. Voluptate laborum deserunt duis amet ad do labore cupidatat laborum id tempor pariatur id sunt culpa. Sit sint tempor id. Esse ullamco exercitation dolore non amet sint officia officia qui occaecat labore voluptate fugiat veniam. Fugiat ea ad sunt laboris et dolor esse anim fugiat deserunt fugiat ullamco dolor eiusmod. Dolore qui quis pariatur ullamco exercitation culpa sunt non.</p>
          <p>Non anim sint ex consequat nisi laborum dolor amet nostrud quis dolore proident occaecat esse. Voluptate nisi consectetur qui ut excepteur dolor Lorem reprehenderit. Esse sit culpa minim magna id adipisicing aliquip enim consectetur ea enim pariatur ut non nisi. Est proident nulla ut laboris deserunt tempor ut aliqua dolore est quis eu sunt. Amet minim deserunt pariatur enim Lorem velit voluptate deserunt laborum ipsum mollit amet. Mollit ea fugiat aliquip aute nostrud amet quis occaecat est aliqua eiusmod ea excepteur. Ullamco qui non irure culpa amet laboris culpa. Esse nostrud fugiat labore minim.</p>
          <p>Esse non magna exercitation nisi exercitation. Est elit quis laborum laborum deserunt. Officia excepteur proident eu elit laboris occaecat mollit. Exercitation elit mollit sint do laboris cupidatat deserunt incididunt enim in fugiat. Aliquip adipisicing ex Lorem proident aliquip nostrud deserunt nostrud mollit magna magna consectetur cupidatat amet sit. Do sint quis officia occaecat fugiat tempor dolor mollit ad dolore sit Lorem aute officia aute. Velit laboris Lorem Lorem elit in adipisicing qui veniam.</p>
          <p>Duis magna laboris cillum nostrud occaecat velit laboris duis. Aliqua cupidatat et consectetur amet ad exercitation nostrud ipsum in culpa qui consequat. Deserunt anim laborum est incididunt magna aute consectetur. In voluptate consequat minim non aute mollit ut cupidatat ex do cupidatat non.</p>
          <p>Ut labore sunt mollit fugiat exercitation ut ut cupidatat duis est do laboris laborum ad. Ut qui voluptate ipsum eiusmod eiusmod nisi quis quis dolore aliquip ut nulla labore. Occaecat quis proident ullamco commodo ut ad elit ea aliquip est Lorem ex aliquip fugiat proident. Pariatur occaecat laborum exercitation voluptate laboris consequat culpa dolore esse ad irure. Minim laboris sit quis officia culpa elit non amet sit nulla.</p>
          <p>Enim elit esse in exercitation enim eiusmod exercitation. Laboris labore nisi ullamco eiusmod. Fugiat dolor voluptate id cillum culpa duis eu cillum et. Fugiat mollit et excepteur fugiat officia tempor minim. Laboris officia velit anim in aute nisi sint.</p>
          <p>Nulla ad qui ex sunt aute ex excepteur est sit dolor. Ullamco ex deserunt tempor consequat tempor adipisicing reprehenderit consectetur. Et sunt sint eiusmod ullamco exercitation commodo. Non culpa ea amet exercitation aute incididunt esse minim aliqua.</p>
        </GlobalUI>
      </ThemeProvider>
  );
};

export default GlobalUIPage;
