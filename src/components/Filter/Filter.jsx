/* eslint-disable no-unused-vars */
import { useState } from 'react';
import arup from '../../assets/ar-up.svg';
import btnback from '../../assets/btnback.svg';

function Filter() {
  const [expanded, setExpanded] = useState(true);
  const [filterTransit, setFilterTransit] = useState(false);
  const [filterFacilities, setFilterFacilities] = useState(false);
  const [filterDeparture, setFilterDeparture] = useState(false);
  const [filterArrived, setFilterArrived] = useState(false);
  const [filterAirlines, setFilterAirlines] = useState(false);
  const [filterTicket, setFilterTicket] = useState(false);
  return (
    <div className="max-w-[1366px] flex mx-auto pb-[25px] px-4 sm:px-6 lg:px-8 pt-7 bg-[#F5F6FA] gap-x-9">
      <div className={`md:w-[27%] w-[200px] h-full md:relative absolute rounded-[15px] p-4 bg-[#fff] ${expanded ? null : 'hidden'}`}>
        <div className="border-b border-[#E5E5E5] mb-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#000] text-[16px] font-semibold">Transit</h1>
            <img src={filterTransit ? arup : btnback} alt="arrow" className="cursor-pointer" />
          </div>
          <div className={`${filterTransit ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Direct</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterTransit ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Transit</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterTransit ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Transit 2+</h1>
            <input type="checkbox" />
          </div>
        </div>
        <div className="border-b border-[#E5E5E5] mb-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#000] text-[16px] font-semibold">Facilities</h1>
            <img src={filterFacilities ? arup : btnback} onClick={() => setFilterFacilities(!filterFacilities)} alt="arrow" className="cursor-pointer" />
          </div>
          <div className={`${filterFacilities ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Luggage</h1>
            <input type="checkbox" value={'1'} />
          </div>
          <div className={`${filterFacilities ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">In-Flight Meal</h1>
            <input type="checkbox" value={'2'} />
          </div>
          <div className={`${filterFacilities ? 'flex' : 'hidden'} justify-between items-center mb-5`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Wi-fi</h1>
            <input type="checkbox" value={'3'} />
          </div>
        </div>
        <div className="border-b border-[#E5E5E5] mb-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#000] text-[16px] font-semibold">Departure Time</h1>
            <img src={`${filterDeparture ? '/ar-up.svg' : '/btnback.svg'}`} onClick={() => setFilterDeparture(!filterDeparture)} alt="arrow" className="cursor-pointer" />
          </div>
          <div className={`${filterDeparture ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">00:00 - 06:00</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterDeparture ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">06:00 - 12:00</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterDeparture ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">12:00 - 18:00</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterDeparture ? 'flex' : 'hidden'} justify-between items-center mb-5`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">18:00 - 24:00</h1>
            <input type="checkbox" />
          </div>
        </div>
        <div className="border-b border-[#E5E5E5] mb-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#000] text-[16px] font-semibold">Time Arrived</h1>
            <img src={`${filterArrived ? '/ar-up.svg' : '/btnback.svg'}`} onClick={() => setFilterArrived(!filterArrived)} alt="arrow" className="cursor-pointer" />
          </div>
          <div className={`${filterArrived ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">00:00 - 06:00</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterArrived ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">06:00 - 12:00</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterArrived ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">12:00 - 18:00</h1>
            <input type="checkbox" />
          </div>
          <div className={`${filterArrived ? 'flex' : 'hidden'} justify-between items-center mb-5`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">18:00 - 24:00</h1>
            <input type="checkbox" />
          </div>
        </div>
        <div className="border-b border-[#E5E5E5] mb-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#000] text-[16px] font-semibold">Airlines</h1>
            <img src={`${filterAirlines ? '/ar-up.svg' : '/btnback.svg'}`} onClick={() => setFilterAirlines(!filterAirlines)} alt="arrow" className="cursor-pointer" />
          </div>
          <div className={`${filterAirlines ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Garuda Indonesia</h1>
            <input type="checkbox" value={'2'} />
          </div>
          <div className={`${filterAirlines ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Air Asia</h1>
            <input type="checkbox" value={'4'} />
          </div>
          <div className={`${filterAirlines ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Lion Air</h1>
            <input type="checkbox" value={'3'} />
          </div>
          <div className={`${filterAirlines ? 'flex' : 'hidden'} justify-between items-center mb-3`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Singapore Airlines</h1>
            <input type="checkbox" value={'1'} />
          </div>
          <div className={`${filterAirlines ? 'flex' : 'hidden'} justify-between items-center mb-5`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Citilink</h1>
            <input type="checkbox" value={'5'} />
          </div>
        </div>
        <div className="mb-5 border-[#E5E5E5] border-b">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#000] text-[16px] font-semibold">Ticket Price</h1>
            <img src={`${filterTicket ? '/ar-up.svg' : '/btnback.svg'}`} onClick={() => setFilterTicket(!filterTicket)} alt="arrow" className="cursor-pointer" />
          </div>
          <div className={`${filterTicket ? 'flex' : 'hidden'} justify-between items-center mb-7`}>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Lowest</h1>
            <h1 className="text-[#000] text-[14px] font-normal leading-5">Higest</h1>
          </div>
          <div className={`${filterTicket ? 'flex' : 'hidden'} justify-between items-center mb-3`}></div>
          <div className={`${filterTicket ? 'flex' : 'hidden'} justify-between items-center mb-5`}></div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
