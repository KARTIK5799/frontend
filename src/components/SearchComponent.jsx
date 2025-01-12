import busIcon from '../assets/bus.png';
import trainIcon from '../assets/train.png';
import taxiIcon from '../assets/taxi.png';
import airPlaneIcon from '../assets/airplane.png';
import { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [nextDate, setNextDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // Track the selected date

  // Function to get the next day's date
  const getNextDay = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set the date to tomorrow
    const nextDay = today.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    setNextDate(nextDay);
    setSelectedDate(nextDay); // Set the default selected date to tomorrow
  };

  // Function to get the day of the week from the selected date
  const getDayFromDate = (date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(date).getDay(); // Get the day index (0-6)
    return daysOfWeek[dayIndex]; // Return the day name
  };

  useEffect(() => {
    getNextDay(); // Set the next day's date when the component mounts
  }, []);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Update the selected date when user changes it
  };

  return (
    <div className="w-full h-full flex justify-center items-center z-40 absolute">
      <div className="flex flex-col w-full h-full items-center justify-center">
        {/* Top Section with Icons */}
        <section className="bg-white h-24 w-[50%] flex justify-between items-center z-40 rounded-3xl shadow-lg px-4">
          <div
            className={`flex flex-1 justify-center items-center cursor-pointer ${activeIcon === 'bus' ? 'border-b-2 border-yellow-400' : ''}`}
            onClick={() => handleIconClick('bus')}
          >
            <img src={busIcon} alt="Bus Icon" className="h-20 w-20" />
          </div>
          <div className="h-16 w-[1px] bg-gray-400"></div>
          <div
            className={`flex flex-1 justify-center items-center cursor-pointer ${activeIcon === 'train' ? 'border-b-2 border-yellow-400' : ''}`}
            onClick={() => handleIconClick('train')}
          >
            <img src={trainIcon} alt="Train Icon" className="h-20 w-20" />
          </div>
          <div className="h-16 w-[1px] bg-gray-400"></div>
          <div
            className={`flex flex-1 justify-center items-center cursor-pointer ${activeIcon === 'taxi' ? 'border-b-2 border-yellow-400' : ''}`}
            onClick={() => handleIconClick('taxi')}
          >
            <img src={taxiIcon} alt="Taxi Icon" className="h-20 w-20" />
          </div>
          <div className="h-16 w-[1px] bg-gray-400"></div>
          <div
            className={`flex flex-1 justify-center items-center cursor-pointer ${activeIcon === 'airplane' ? 'border-b-2 border-yellow-400' : ''}`}
            onClick={() => handleIconClick('airplane')}
          >
            <img src={airPlaneIcon} alt="Airplane Icon" className="h-14 w-10 mb-6 transform rotate-90" />
          </div>
        </section>

        {/* Bottom Section */}
        <section className="bg-white h-auto w-[90%] md:w-[75%] mt-[-3rem] pt-[4rem] flex flex-col items-center rounded-3xl shadow-lg px-6 py-8">
          <h2 className="text-xl font-semibold text-center mb-6">Bus Ticket Booking. Travelling with a group? Hire a bus.</h2>
          <form action="" className="w-full">
            <div className="flex flex-wrap justify-between mb-6 border-2 rounded-3xl p-3">
              <div className="flex flex-col w-full md:w-[30%] mb-4 md:mb-0">
                <label htmlFor="from" className="text-sm">From</label>
                <input
                  type="text"
                  id="from"
                  placeholder='Delhi,Delhi'
                  className="w-full p-3 border-none font-bold text-4xl border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="from" className="text-sm">India</label>
              </div>
              <div className="h-24 w-[1px] bg-gray-400"></div>
              <div className="flex flex-col w-full md:w-[30%] mb-4 md:mb-0">
                <label htmlFor="to" className="text-sm">To</label>
                <input
                  type="text"
                  id="to"
                  placeholder='Mumbai,Maharashtra'
                  className="w-full p-3 border-none font-bold text-4xl border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="to" className="text-sm">India</label>
              </div>
              <div className="h-24 w-[1px] bg-gray-400"></div>
              <div className="flex flex-col w-full md:w-[30%]">
                <label htmlFor="travelDate" className="text-lg">Travel date</label>
                <input
                  type="date"
                  id="travelDate"
                  value={selectedDate} 
                  min={nextDate} 
                  onChange={handleDateChange} 
                  className="w-full p-3 border-none font-bold text-4xl border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="travelDate" className="text-sm">{getDayFromDate(selectedDate)}</label>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg text-lg  hover:bg-yellow-300 transition-all">
                Search
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
};

export default SearchComponent;
