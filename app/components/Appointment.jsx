import Input from "./Input";
import Hexa1 from "../svgs/Hexa1";
import SectionHeader from "./SectionHeader";

const Appointment = () => {
  return (
    <div id="appointment" className={`mt-[80px] relative`}>
      <div className=" absolute -z-10 -top-5 right-0">
        <Hexa1 />
      </div>
      <SectionHeader title="Make an Appointment">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <form action="">
        <div className="px-3 lg:px-10 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-7 items-start">
            <div className="flex flex-col gap-7 md:gap-5 md:flex-row justify-center items-center">
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input type="text" label="Full Name" placeholder="Ahmed" />
                <Input
                  type="text"
                  label="Phone Number"
                  placeholder="+92 *** *******"
                />
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="">Department</label>
                  <select
                    defaultValue={0}
                    className="w-full border border-slate-500 rounded-md px-3 py-2"
                  >
                    <option value={0}>Select Department</option>
                    <option value={1}>Dental Care</option>
                    <option value={2}> Neurology</option>
                    <option value={3}>Crutches</option>
                    <option value={4}>Cardiology</option>
                    <option value={5}>Pulmonary</option>
                    <option value={6}>Xray</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input
                  type="text"
                  label="Email Address"
                  placeholder="example@gmail.com"
                />
                <Input
                  type="date"
                  label="Booking Date"
                  placeholder="dd/mm/yy"
                />
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="">Doctor</label>
                  <select
                    defaultValue={0}
                    className="w-full border border-slate-500 rounded-md px-3 py-2"
                  >
                    <option value={0}>Select Doctor</option>
                    <option value={0}>Dr. Ali</option>
                    <option value={1}>Dr. Ahmed</option>
                    <option value={2}>Dr. Abubakr</option>
                    <option value={3}>Dr. Abbas</option>
                    <option value={4}>Dr. Adil</option>
                    <option value={5}>Dr. Imran</option>
                    <option value={6}>Dr. Awais</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea
                type="text/area"
                className="w-full md:w-[720px] lg:w-[860px] border border-slate-500 rounded-md px-3 py-2"
                placeholder="Write something here..."
              />
            </div>
            <button className="w-32 h-12 text-white bg-mehron-100 rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
