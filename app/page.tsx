import Achievement from "@/components/Achievement";
import DanceStyle from "@/components/DanceStyle";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import HomePage from "@/components/HomePage";
import LatestBuzz from "@/components/LatestBuzz";
import LatestBuzzEvents from "@/components/LatestBuzzEvents";
import Members from "@/components/Members";
import TalkToUs from "@/components/TalkToUs";
import Video from "@/components/Video";

export default function page() {
  return (
    <main>
      <HomePage />
      <LatestBuzz />
      <LatestBuzzEvents />
      < Gallery />
      <Video />
      <Events />
      <Achievement />
      <DanceStyle />
      <TalkToUs />
    </main>
  );
}
