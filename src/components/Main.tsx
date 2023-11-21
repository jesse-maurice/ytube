import React from 'react';

interface Props {}

const Main = () => {
  return (
    <>
      <div className="w-full mt-[72px] flex flex-col content-center items-center justify-center">
        <h1 className=" text-[#d8d3d3] font-semibold text-[48px] leading-[60px]">
          YTubeGenius
        </h1>
        <p className=" font-light text-xl leading-[25px] text-[#d8d3d3]">
          Your ultimate YouTube Companion.
        </p>
      </div>
      <div className=" w-[780px] mt-[72px] flex flex-col content-center items-center justify-center mx-auto">
        <div className=" w-full">
          <h2 className=" font-medium text-base leading-[20px] text-[#d8d3d3]">
            Enter the title or video idea
          </h2>
          <input
            className=" py-[21px] my-[14px] pl-[23px] w-full rounded-[10px] border-[0.75px] border-[#d8d3d3] bg-[#201e1e] placeholder-[#d8d3d3]"
            placeholder="Color Psychology "
            type="text"
          />
          <p className=" font-light text-sm leading-[17.5px] text-[#d8d3d3]">
            e.g Photo Editing, Food Recipe
          </p>
        </div>
        <div className="w-full my-[35px] flex content-center justify-between gap-[39px]">
          <div className="w-full flex content-center items-center gap-4">
            <input
              className="rounded-[5px] border-[0.58px] border-[#d8d3d3] w-7 h-7 cursor-pointer appearance-none p-2 outline-none focus:outline-none checked:bg-[#111010] checked:text-white"
              type="radio"
            />
            <h2 className=" font-light text-xl leading-[25px] text-[#d8d3d3]">
              Include Video Script
            </h2>
          </div>
          <div className="w-full flex content-center items-center gap-4">
            <input
              className="rounded-[5px] border-[0.58px] border-[#d8d3d3] w-7 h-7 accent-pink-300 cursor-pointer"
              type="checkbox"
              checked={true}
            />
            <h2 className=" font-light text-xl leading-[25px] text-[#d8d3d3]">
              Include Description
            </h2>
          </div>
          <div className="w-full flex content-center items-center gap-4">
            <input
              className="rounded-[5px] border-[0.58px] border-[#d8d3d3] w-7 h-7 accent-pink-300 cursor-pointer"
              type="checkbox"
              checked={true}
            />
            <h2 className=" font-light text-xl leading-[25px] text-[#d8d3d3]">
              Include Hash tags
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main