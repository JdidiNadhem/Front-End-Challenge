import {Button} from "@material-ui/core";
import React from "react";
import "./About.css";
const About = ({history}) => {
  return (
    <div className="about">
      <img
        src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"
        alt="about"
      />
      <div className="aboutdesc">
        <h2>About Us</h2>
        <p>
          Id velit laborum ut exercitation anim dolore sit ad eu ad. Laborum
          elit occaecat aute nulla sunt enim laboris. Excepteur quis do dolore
          esse aliqua. Enim esse elit excepteur nulla deserunt dolore cupidatat
          nisi ea occaecat ullamco cupidatat exercitation ullamco. Magna officia
          nulla laborum ea nulla proident ut excepteur nostrud sit excepteur
          ullamco ex amet. Aute dolore ullamco exercitation nulla id nostrud
          ullamco dolore sunt reprehenderit. Reprehenderit ea qui cillum eu in
          cupidatat deserunt quis nulla ullamco. Laboris id velit sint eiusmod
          cillum. Lorem ut ut aute ea. Labore anim proident officia aliquip
          velit ipsum culpa dolor qui. Eu nulla occaecat cillum elit elit
          laboris. Est labore tempor proident qui sint dolor dolore esse ullamco
          velit consectetur fugiat. Sit et incididunt eiusmod consequat.
          Voluptate est et anim eiusmod pariatur sint ipsum. Voluptate Lorem ea
          est et officia et. Est laboris consequat id ad laborum culpa anim quis
          reprehenderit. Duis aute eu reprehenderit voluptate esse adipisicing
          reprehenderit.
        </p>

        <Button
          style={{backgroundColor: "#007bff"}}
          variant="contained"
          color="primary"
          onClick={() => history.goBack()}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

export default About;
