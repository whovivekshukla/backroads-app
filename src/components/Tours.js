import Title from "./Title";
import { toursData } from "../data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {toursData.map((data) => {
            const {id, image, date, title, text, icon, place, days, price} = data;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>
                    {text}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>{" "}
                      {place}
                    </p>
                    <p>{days}</p>
                    <p>from ${price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;
