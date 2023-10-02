export default function BannerTitle({ children, title }) {
  return (
    <div className="banner__title">
      <span className="banner__title__icon">{children}</span>
      <h3 className="banner__title__text">{title}</h3>
    </div>
  );
}
