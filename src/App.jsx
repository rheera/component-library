import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import { BsFillCheckCircleFill } from "react-icons/bs";
import randomBool from "./utility/randomBool";
import { colors, bannerTypes } from "./data/modifiers";
import "./scss/global.scss";
import "./scss/app.scss";

function App() {
  return (
    <main className="main">
      <section className="component-section">
        <h2 className="section-title">Badges</h2>
        <div className="badges">
          {colors.map((color, index) => (
            <Badge key={`badge-${index}`} color={color} rounded={randomBool()}>
              {color} badge
            </Badge>
          ))}
        </div>
      </section>
      <section className="component-section">
        <h2 className="section-title">Banners</h2>
        <div className="banners">
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
