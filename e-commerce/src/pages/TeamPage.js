import React from "react";
import Team from "../components/team/Team";
import TeamHeader from "../components/team/TeamHeader";
import TeamHeroPictures from "../components/team/TeamHeroPictures";
import TeamCTA from "../components/team/TeamCTA";

export default function TeamPage() {
  return (
    <>
      <TeamHeader />
      <TeamHeroPictures />
      <Team />
      <TeamCTA />
    </>
  );
}
