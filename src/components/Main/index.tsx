import { FirstWrap } from "../FirstWrap";
import { Location } from "../Location";
import { MainPoster } from "../MainPoster";
import { Timeline } from "../Timeline";

const Main = () => {
  return (
    <main>
      <MainPoster />
      <FirstWrap />
      <Timeline />
      <Location />
    </main>
  );
};

export { Main };
