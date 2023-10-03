export default function TestimonialPicText({
  children,
  author = "Unknown",
  company = "",
}) {
  return (
    <>
      <q className="testimonial-pic__text__quote">{children}</q>
      <div className="testimonial-pic__text__source">
        <p className="testimonial-pic__text__source__author">{author}</p>
        <p className="testimonial-pic__text__source__company">{company}</p>
      </div>
    </>
  );
}
