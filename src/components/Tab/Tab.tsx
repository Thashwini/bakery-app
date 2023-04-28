import React, { useEffect, useState } from "react";

interface ITabProps {
  children: JSX.Element | JSX.Element[];
  className?: IClassNameProps;
}

interface IClassNameProps {
  tabHeader?: string;
  activeTab?: string;
  inactiveTab?: string;
}

const initialTabStyles: IClassNameProps = {
  tabHeader: "tabs border-b border-gray-300 gap-4",
  activeTab:
    "tab tab-bordered tab-active border-b-3 border-baseColor font-medium text-baseColor text-xs sm:text-sm md:text-base xl:text-lg",
  inactiveTab: "tab text-baseColor text-xs sm:text-sm md:text-base xl:text-lg",
};

type IChildren = Record<string, JSX.Element>;

const Tabs = ({
  children,
  className = initialTabStyles,
}: ITabProps): JSX.Element => {
  const [tabHeader, setTabHeader] = useState<string[]>([]);
  const [childContent, setChildConent] = useState<IChildren>({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers: string[] = [];
    const childCnt: IChildren = {};
    React.Children.forEach(children, (element: JSX.Element) => {
      const { name, children } = element.props;
      headers.push(name);
      childCnt[name] = children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
  }, [children]);

  const changeTab = (name: string): void => {
    setActive(name);
  };

  return (
    <div className="my-4">
      <ul className={className.tabHeader}>
        {tabHeader.map((item) => (
          <li
            onClick={() => {
              changeTab(item);
            }}
            key={item}
            className={
              item === active ? className.activeTab : className.inactiveTab
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return (
              <div className="block" key={key}>
                {childContent[key]}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Tabs;
