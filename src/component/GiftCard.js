import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DynamicButtonTab  from './ButtonTab'

const GiftCardPage = () => {
  let { status } = useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    if(!status){
      navigate("/giftcard/active");
    }
  },[status,navigate])

  return (
    <div>
      <h1>Gift Card Page</h1>
      <ButtonTab/>
    </div>
  );
};

export default GiftCardPage;

export const ButtonTab = ()=> {
const handleTab1Click = () => {
  console.log('Tab 1 clicked');
  // Perform specific action for Tab 1
};

const handleTab2Click = () => {
  console.log('Tab 2 clicked');
  // Perform specific action for Tab 2
};

const handleTab3Click = () => {
  console.log('Tab 3 clicked');
  // Perform specific action for Tab 3
};

const tabs = [
  { name: 'tab1', label: 'Tab 1', content: 'Content for Tab 1', onClick: handleTab1Click },
  { name: 'tab2', label: 'Tab 2', content: 'Content for Tab 2', onClick: handleTab2Click },
  { name: 'tab3', label: 'Tab 3', content: 'Content for Tab 3', onClick: handleTab3Click },
];

return (
  <div>
    <DynamicButtonTab tabs={tabs} />
  </div>
);
}