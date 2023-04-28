import React from "react";

interface ITabPaneProps {
  name: string;
  key: string;
  children: JSX.Element;
}

const TabPane = ({ name, key, children }: ITabPaneProps): JSX.Element => {
  return (
    <div className="tab-pane" key={key}>
      {children}
    </div>
  );
};

export default TabPane;
