import { RxSlash } from "react-icons/rx";

export default function TestimonialText({
  children,
  author = "Unknown",
  company = "",
}) {
  return (
    <>
      <q className="testimonial__text testimonial__text__quote">{children}</q>
      <div className="testimonial__text testimonial__text__source">
        <p className="testimonial__text__source__author">{author}</p>
        <span className="testimonial__text__source__slash">
          <RxSlash />
        </span>
        <p className="testimonial__text__source__company">{company}</p>
      </div>
    </>
  );
}
