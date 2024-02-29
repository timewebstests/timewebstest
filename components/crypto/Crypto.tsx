'use client'

import React, { Component } from 'react';
import Image from 'next/image'
import { IoCaretDownCircleSharp } from 'react-icons/io5';



interface InfosState {
  items: any[];
  isLoaded: boolean;
}

class Infos extends Component<{}, InfosState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://swapzone.io/?refId=o9g4ffU0j')
      .then((res) => res.json())
      .then((data) => {
        if (data.location && data.location.tz_id) {
          this.setState({
            isLoaded: true,
            items: [data],
          });
        } else {
          console.error("Received non-array data:", data);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    const limitedItems = items.slice(0, 3);

    return (
      <div className="text-black flex justify-center">
        <div className="flex justify-center w-[100%] gap-4 p-5">
            {limitedItems.map((item, index) => (
              <div key={index} className="bg-white w-[auto] max-w-[550px] h-[120px] rounded-md shadow-xl">
                <div className='flex justify-between items-center h-full'>
                  <div className='p-2'>
                    <Image src={"https:" + item.current.condition.icon} width={50} height={50} alt=''/>
                  </div>
                  <div className='p-3 border-r-[0.5px] border-gray-400'>
                    <p className='text-xl font-bold'> {item.current.temp_c + "°"} </p> {item.location.name}
                  </div>
                  <div className='p-5 pr-0 lg:min-w-[290px] max-w-[290px]'>
                    {item.current.condition.text} 
                  </div>
                  <div className='p-1 m-3 hover:bg-[#BCA37F] rounded-xl'>
                    <IoCaretDownCircleSharp className="" size={24} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Infos;
