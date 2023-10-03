export default function CardText({ children, title }) {
  return (
    <div className="card__text">
      <h3 className="card__text__title">{title}</h3>
      {children && <p className="card__text__para">{children}</p>}
    </div>
  );
}
