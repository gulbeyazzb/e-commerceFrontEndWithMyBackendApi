import React from "react";
import TeamCompound from "../compounds/Team/TeamCompound";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col gap-28 text-[#252B42] text-center items-center py-28 ">
        <div className="flex flex-col gap-2">
          <h1 className="px-20 sm:px-0 font-bold text-[40px]">Meet Our Team</h1>
        </div>
        <TeamCompound />
      </div>
    </div>
  );
};
export default Team;
