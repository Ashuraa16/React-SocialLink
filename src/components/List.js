import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dikshant-pandey/",
        icon:
          "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png",
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com/Ashuraa16",
        icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/DikshantPande18",
        icon:
          "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
        bgColor: "#b8b3e8"
      }
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {data.map((link) => {
          return <ListItem social={link} key={link.id} />;
        })}
      </div>
    );
  }
}

export default List;
