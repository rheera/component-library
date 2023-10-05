import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import TestimonialPic from "./components/TestimonialPic/index";
import Testimonial from "./components/Testimonial/index";
import Button from "./components/Button/Button";
import Tooltip from "./components/Tooltip/Tooltip";
import Toasts from "./components/Toast/Toasts";
import useToast from "./hooks/useToast";
import randomBool from "./utility/randomBool";
import { colors, bannerTypes } from "./data/modifiers";
import { TbCloudUpload } from "react-icons/tb";
import {
  PiArrowBendRightUpBold,
  PiArrowBendRightDownBold,
} from "react-icons/pi";
import { HiHomeModern } from "react-icons/hi2";
import testimonialHeadshot from "./assets/testimonial-image.png";
import "./scss/global.scss";
import "./scss/app.scss";

function App() {
  const [toasts, addToast, removeToast] = useToast();

  return (
    <main className="main container">
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Component Library++
      </h1>
      {/* Badges */}
      <section className="component-section">
        <h2 className="component-section__title">Badges</h2>
        <div className="component-section__main badges">
          {colors.map((color, index) => (
            <Badge key={`badge-${index}`} color={color} rounded={randomBool()}>
              {color} badge
            </Badge>
          ))}
        </div>
      </section>

      {/* Banners */}
      <section className="component-section">
        <h2 className="component-section__title">Banners</h2>
        <div className="component-section__main banners">
          {bannerTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Banner key={`banner-${index}`} type={type.type}>
                <Banner.Icon>
                  <Icon />
                </Banner.Icon>
                <Banner.Text title={type.title}>
                  {/* This is just so the second example has no text in the body, just title and icon */}
                  {index !== 2 &&
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam. "}
                </Banner.Text>
              </Banner>
            );
          })}
        </div>
      </section>

      {/* Cards */}
      <section className="component-section">
        <h2 className="component-section__title">Cards</h2>
        <div className="component-section__main cards">
          <Card>
            <Card.Icon>
              <TbCloudUpload />
            </Card.Icon>
            <Card.Text title="Easy Deployment">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Text>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="component-section">
        <h2 className="component-section__title">
          Testimonials - with Picture
        </h2>
        <div className="component-section__main testimonial-pics">
          <TestimonialPic pic={testimonialHeadshot}>
            <TestimonialPic.Text
              author="May Andersons"
              company="Workcation, CTO"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
              adipiscing nunc urna, sit.
            </TestimonialPic.Text>
          </TestimonialPic>
        </div>
      </section>

      {/* Testimonials */}
      <section className="component-section">
        <h2 className="component-section__title">Testimonials</h2>
        <div className="component-section__main testimonials">
          <Testimonial>
            <Testimonial.Title>
              <HiHomeModern />
              <h4>
                Work<span>cation</span>
              </h4>
            </Testimonial.Title>
            <Testimonial.Text author="May Andersons" company="Workcation, CTO">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.
            </Testimonial.Text>
          </Testimonial>
        </div>
      </section>

      {/* Tooltips */}
      <section className="component-section">
        <h2 className="component-section__title">Tooltips</h2>
        <div className="tooltips__info">
          <div className="info-text ">
            <h4>I should show up here, hover over the buttons</h4>{" "}
            <PiArrowBendRightDownBold className="down-arrow" />
          </div>
          <div className="tooltips__info__box" id="outside"></div>
        </div>
        <div className="component-section__main tooltips">
          {bannerTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Tooltip
                key={`tooltip-${index}`}
                icon={<Icon />}
                type={type.type}
                title="Click the button"
                text="Pressing the button should open up a toast on the bottom right for about 3 seconds"
              >
                <Button
                  onClick={() =>
                    addToast({
                      type: type.type,
                      location: randomBool() ? "right" : "left",
                      icon: <Icon />,
                    })
                  }
                >
                  Hover Me
                </Button>
              </Tooltip>
            );
          })}
        </div>
      </section>

      {/* Toasts */}
      <section className="component-section">
        <h2 className="component-section__title">Toasts</h2>
        <div className="component-section__main toasts">
          <div className="info-text">
            <h4>You have to click one of these buttons for this one </h4>{" "}
            <PiArrowBendRightUpBold />
          </div>
          <Toasts toasts={toasts} removeToast={removeToast} />
        </div>
      </section>
    </main>
  );
}

export default App;
