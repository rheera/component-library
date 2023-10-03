import "../../scss/testimonial.scss";

export default function TestimonialPic({ children }) {
  return (
    <>
      <div className="testimonial">
        {children}
        <div className="testimonial__dot-background"></div>
      </div>
    </>
  );
}
