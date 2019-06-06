import React, { PureComponent } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
export default class Contact extends PureComponent {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Prince Verma</h2>
            <img
              src="https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png"
              alt="avatar"
              style={{ height: "200" }}
            />
            {/*}   <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      textAlign: "center"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    {917011402286}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      textAlign: "center"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    blazea423@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
