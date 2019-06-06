import React, { PureComponent } from "react";
import { Grid, Cell } from "react-mdl";
export default class Landing extends PureComponent {
  render() {
    return (
      <div style={{ margin: "auto", width: "100%" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front-end Web Developer</h1>
              <hr />
              <p>
                HTML | CSS | Bootstrap | JavaScript | React | Java | Mongo DB |
                Meteor
              </p>
              <div className="social-links">
                {/*linkdin*/}
                <a
                  href="https://linkedin.com/in/prince-verma-a1b920132"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*github*/}
                <a
                  href="https://github.com/Lonewalker423"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
