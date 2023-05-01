import AboutTop from "../Components/AboutTop";
import CounterUpPage from "../Components/CounterUpPage";
import PageIntroHeader from "../Components/PageIntroHeader";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const AboutUsPage = () => {
  return (
    <>
      <PageIntroHeader PageName={"About"} />
      <AboutTop />
      <CounterUpPage />;
    </>
  );
};

export default AboutUsPage;
