import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Prince Verma</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I’m a self-learner, programmer and explorer of web technologies
              who believe in working hard and together to make a difference in
              the society. I work mostly on web Technologies, including concepts
              like React,JavaScript,Bootstrap, Java, Android, J2EE.
              Additionally, I’ve experience of designing and developing user
              interfaces, testing, debugging and working with source control
              (e.g. Git) and data-handling using JSON, and REST API..
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>West Delhi</p>
            <h5>Phone</h5>
            <p>(+91) 7011402286</p>
            <h5>Email</h5>
            <p>blazea423@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2016}
              schoolName="Guru Nanak Dev Institute of Technology"
              schoolDescription="Does Deploma in Computer Engineering here and got overall 67% marks."
            />
            <Education
              startYear={2017}
              endYear={2020}
              schoolName="Bharati Vidyapeth College of Engineering "
              schoolDescription="Pursuing Btech here in Information and technology .Currently In 3rd year."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            {/*  <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    />*/}
            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="java" progress={100} />
            <Skills skill="React" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
