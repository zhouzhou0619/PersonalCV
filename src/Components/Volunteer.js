import React from "react";

const Volunteer = ({ data = [] }) => {
  return (
    <section id="volunteer">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>VOLUNTEER HIGHLIGHTS</h1>

          <div id="volunteer-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {data.map((item, i) => {
              const src = `${process.env.PUBLIC_URL}/images/volunteer/${item.image}`;
              const Img = <img alt={item.title || "volunteer"} src={src} />;

              return (
                <div key={i} className="columns portfolio-item">
                  <div className="item-wrap">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer" title={item.title}>
                        {Img}
                      </a>
                    ) : (
                      Img
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
