/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "../heading";
import Layout from "../layout";
import { useWindowSize } from "../../hooks/window-size";
import PhotoBlobs from "./photoblobs";

const useStyles = createUseStyles({
  contentDiv: {
    paddingTop: "4em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&.fitContent": {
      minHeight: "fit-content",
      margin: "0 1em",
    },
    "&.desktop": {
      height: "100vh",
      margin: "0 1em",
    },
  },
  verticalDisplay: {
    flexDirection: "column",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "68ch",
    fontSize: "20px",
    flexGrow: 1,
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "2em",
  },
  aboutMeLink: {
    margin: "0 0.5em",
  },
});

export const AboutMe = () => {
  const classes = useStyles();
  const desktop = useWindowSize() === "desktop";

  return (
    <Layout>
      <div
        id="aboutme"
        className={
          desktop
            ? `${classes.contentDiv} desktop`
            : `${classes.contentDiv} fitContent`
        }
      >
        <div className={classes.textContent}>
          <Heading title="About Me" />
          <div>
            <p>
              Hey there! Our names are Abe Liamo and Ramin. We are software engineesr based in
              Montreal, Canada.
            </p>
            <p>We are currently at McGill and interested in AI.</p>
            <p>My main interests are destroying Liamo at Tic-Tac-Toe.</p>
            <p>Some of our hobbies include Ultimate Frisbee and Tier 3 dodgeball, and quidditch. Also we like Halloween and salted peanuts.</p>
          </div>
        </div>
        {desktop ? <PhotoBlobs /> : null}
      </div>
    </Layout>
  );
};

export default AboutMe;
