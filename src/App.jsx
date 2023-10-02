import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import { BsFillCheckCircleFill } from "react-icons/bs";
import randomBool from "./utility/randomBool";
import { colors, bannerTypes } from "./data/modifiers";
import "./scss/global.scss";
import "./scss/app.scss";

function App() {
  return (
    <main className="main container">
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
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam"}
                </Banner.Text>
              </Banner>
            );
          })}
        </div>
      </section>
      <section className="component-section">
        <h2 className="component-section__title">Cards</h2>
        <div className="component-section__main cards">
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
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam"}
                </Banner.Text>
              </Banner>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
