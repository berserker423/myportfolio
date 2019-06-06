import React, { PureComponent } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  Button,
  CardActions,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";
export default class Project extends PureComponent {
  state = {
    activeTab: 0
  };
  toggleCategory = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "Dark",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover"
              }}
            >
              Burger-App
            </CardTitle>
            <CardText>
              This is my first React project.Simply using Html,Css,React.I
              created it when i was learning react on udmey{" "}
            </CardText>
            <CardActions>
              <Button
                colored
                onClick={() => {
                  window.open(
                    "https://github.com/Lonewalker423/burger-app",
                    "_blank"
                  );
                }}
              >
                GITHUB>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "Dark" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "Dark",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover"
              }}
            >
              Weather-App
            </CardTitle>
            <CardText>
              My second Project on React js and In this one I am trying to learn
              fetching objects through Online Api's here i use
              onlineweathermap.org api and fetch data through json. here i also
              used bootstrap and learn some of it classes and design elements it
              is not mobile browser compaitable. I deployed it on netlify
            </CardText>
            <CardActions>
              <Button
                colored
                onClick={() => {
                  window.open(
                    "https://github.com/Lonewalker423/weather-app",
                    "_blank"
                  );
                }}
              >
                GITHUB>
              </Button>
              <Button
                colored
                onClick={() => {
                  window.open("https://wtherapp.netlify.com", "_blank");
                }}
              >
                LIVEDEMO
              </Button>
            </CardActions>
            <CardMenu style={{ color: "Dark" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "Dark",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover"
              }}
            >
              MobileStore-App
            </CardTitle>
            <CardText>
              This is my third project. it is full ecommerce solution for
              selling mobile. here i used
              Reactjs,bootstrap,css,styledComponent,react-router,payapalsandbox,Contextapi.
              and deplyoed on heroku.In this project I manage state by the
              contex api that is build in React. for resusable component i used
              styledcomponent. here i understand some major concepts like props
              drilling and state management without redux . In cart for checkout
              i use paypal sandbox for fake payments.
            </CardText>
            <CardActions>
              <Button
                colored
                onClick={() => {
                  window.open(
                    "https://github.com/Lonewalker423/store",
                    "_blank"
                  );
                }}
              >
                GITHUB
              </Button>
              <Button
                colored
                onClick={() => {
                  window.open("https://thecella.herokuapp.com/", "_blank");
                }}
              >
                LIVEDEMO
              </Button>
            </CardActions>
            <CardMenu style={{ color: "Dark" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <h1>this is Vue</h1>;
    } else if (this.state.activeTab === 2) {
      return <h1>this is angular</h1>;
    }
  };
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabeid =>
            this.setState(() => {
              return { activeTab: tabeid };
            })
          }
        >
          <Tab>React</Tab>
          <Tab>Vue</Tab>
          <Tab>Angular</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategory()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
