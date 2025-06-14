import { Details } from "../Details";
import { DressCode } from "../DressCode";
import { FirstWrap } from "../FirstWrap";
import { Location } from "../Location";
import { MainPoster } from "../MainPoster";
import { Timeline } from "../Timeline";
import { Timer } from "../Timer";

const Main = () => {
  return (
    <main>
      <MainPoster />
      <FirstWrap />
      <Timeline />
      <Timer />
      <Location />
      <Details />
      <DressCode />
    </main>
  );
};

export { Main };
