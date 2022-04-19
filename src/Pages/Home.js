import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../Components/Map"


const Home = () => (
    <Wrapper apiKey={"AIzaSyC1m3IlUqJZjoDK4-rmBEr-wQ33r4RKt2k"}>
      <Map />
    </Wrapper>
  );

export default Home;