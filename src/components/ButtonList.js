import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnNames = ["All","JavaScript","System Design","Study Skills","Music","Algorithms","Tamil Cinema","Google","News","Podcasts","Software Development"]
  return (
    <div className="flex justify-center m-2 w-full">
      <div className="flex gap-2 min-w-max">
        {
          btnNames.map((name) => <Button key={name} name={name}></Button>)
        }
      </div>
    </div>
  );
};

export default ButtonList;
