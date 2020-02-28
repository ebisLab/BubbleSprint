import React, { useState, useEffect } from "react";
import axios from "axios";
import  {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [dependencyState, setDependencyState] = useState(false)

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
useEffect(() => {
  axiosWithAuth()
  .get(`/colors`)
  .then(res=>{
    setColorList(res.data)
    setDependencyState(false);
  })
  .catch(err=>err)

}, [dependencyState])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setDependencyState={setDependencyState}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
