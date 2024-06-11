import Tab from "../tab";

const TabBar = ({ active, handleClick }) => {
  return (
    <>
      <Tab
        active={active}
        handleClick={() => handleClick(true)}
        text={"на 24 часа"}
      />
      <Tab
        active={!active}
        handleClick={() => handleClick(false)}
        text={"на 5 дней"}
      />
    </>
  );
};

export default TabBar;
