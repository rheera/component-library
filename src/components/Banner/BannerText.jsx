export default function BannerText({ children, title }) {
  return (
    <div className="banner__text">
      <h3 className="banner__text__title">{title}</h3>
      {children && <p className="banner__text__para">{children}</p>}
    </div>
  );
}
