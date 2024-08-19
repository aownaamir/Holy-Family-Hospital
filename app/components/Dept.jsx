import Triangle from "../svgs/Triangle";

const Dept = ({ item, currDept, onClick, identity }) => {
  return (
    <div
      onClick={onClick}
      className={`min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
        currDept === identity ? "bg-mehron-100" : "bg-red-100"
      } mr-[20px] lg:mr-0 translate-x-[635px] md:translate-x-[440px] lg:translate-x-[240px] xl:translate-x-[120px]`}
    >
      <div>
        <item.svg
          size="50px"
          color={currDept === identity ? "white" : "#8C1D1D"}
        />
      </div>
      <h2
        className={`${currDept === identity ? "text-white" : "text-[#8C1D1D]"}`}
      >
        {item.name}
      </h2>
      <div
        className={`absolute -bottom-5 ${
          currDept === identity ? "block" : "hidden"
        }`}
      >
        <Triangle size={25} color="#8C1D1D" />
      </div>
    </div>
  );
};

export default Dept;
