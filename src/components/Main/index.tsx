import { Details } from "../Details";
import { DressCode } from "../DressCode";
import { FirstWrap } from "../FirstWrap";
import { Location } from "../Location";
import { MainPoster } from "../MainPoster";
import { Poster } from "../Poster";
import { Timeline } from "../Timeline";
import { Timer } from "../Timer";

import poster_1 from "../../assets/poster_1.jpg";
import poster_2 from "../../assets/poster_2.jpg";
import poster_3 from "../../assets/poster_3.jpg";

const Main = () => {
  return (
    <main>
      <MainPoster />
      <FirstWrap />
      <Timeline />
      <Poster src={poster_1} />
      <Timer />
      <Location />
      <Poster src={poster_2} />
      <Details />
      <DressCode />
      <Poster src={poster_3} />
    </main>
  );
};

export { Main };
