import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import TestimonialPic from "./components/TestimonialPic/index";
import randomBool from "./utility/randomBool";
import { colors, bannerTypes } from "./data/modifiers";
import { TbCloudUpload } from "react-icons/tb";
import testimonialHeadshot from "./assets/testimonial-image.png";
import "./scss/global.scss";
import "./scss/app.scss";

function App() {
  return (
    <main className="main container">
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
        <h2 className="component-section__title">Testimonials</h2>
        <div className="component-section__main testimonials">
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
          <TestimonialPic></TestimonialPic>
        </div>
      </section>
    </main>
  );
}

export default App;
