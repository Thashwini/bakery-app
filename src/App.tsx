import React from "react";
import "./App.css";
import CustomTable from "./components/CustomTable/CustomTable";
import { IColumnType } from "./components/CustomTable/CustomTable";
import { CakeProps, DessertData } from "./constants/Data";
import { BakeryData } from "./constants/Data";
import Tabs from "./components/Tab/Tab";
import TabPane from "./components/Tab/TabPane";

function App() {
  const cakeTableColumns: Array<IColumnType<CakeProps>> = [
    {
      key: "item",
      title: "Cake",
    },
    {
      key: "price",
      title: "Price",
    },
  ];

  const dessertTableColumns: Array<IColumnType<CakeProps>> = [
    {
      key: "item",
      title: "Dessert",
    },
    {
      key: "price",
      title: "Price",
    },
  ];

  return (
    <>
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold">Bakery</h1>
        <Tabs>
          <TabPane name="Cake" key="1">
            <div className="my-10">
              <CustomTable columns={cakeTableColumns} data={BakeryData} />
            </div>
          </TabPane>
          <TabPane name="Dessert" key="2">
            <div className="my-10">
              <CustomTable columns={dessertTableColumns} data={DessertData} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default App;
