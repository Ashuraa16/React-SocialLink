import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

const ListItem = (props) => {
  console.log(props.social.icon);
  return (
    <div className="ListItem">
      <div style={{ backgroundColor: props.social.bgColor }} className="list">
        <img src={props.social.icon} />
        <a href={props.social.link}>{props.social.name}</a>
      </div>
    </div>
  );
};

export default ListItem;
