import React from "react";

const Volunteer = ({ data = [] }) => {
  return (
    <section id="volunteer">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>VOLUNTEER</h1>

          <div id="volunteer-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {data.map((item, i) => (
              <div key={i} className="columns portfolio-item">
                <div className="item-wrap">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" title={item.title}>

                      <img alt={item.title} src={`${process.env.PUBLIC_URL}/images/volunteer/${item.image}`} />
                    </a>
                  ) : (
                    <img alt={item.title} src={`${process.env.PUBLIC_URL}/images/volunteer/${item.image}`} />
                  )}
                  {item.title ? (
                    <div style={{ padding: "10px", textAlign: "center" }}>
                      <h5 style={{ margin: 0 }}>{item.title}</h5>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Volunteer;
