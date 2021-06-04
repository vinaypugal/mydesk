import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const subject = ({data}) => {
  return (
    <>
      <Header />
      <main id="main" data-aos="fade-in">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Subjects</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              {data ? (
                data.map((item) => (
                  <div className="col-lg-4 col-md-4 d-flex align-items-stretch" key={item._id}>
                    <div className="course-item">
                      <img
                        style={{ width: 420, height: 200 }}
                        src={`/assets/img/${item.name}.jpg`}
                        className="img-fluid"
                        alt="..."
                      />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h3>
                            Class {item.class} - <span style={{textTransform : "capitalize"}}>{item.name}</span> 
                          </h3>
                        </div>
                        <a href="9th-state.html">
                          View More <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Loading..</h1>
              )}
              {/* End Course Item*/}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export async function getServerSideProps({params}) {
  const [cls , board] = params.slug
  const res = await axios.get(`${process.env.URL}/api/subjects/${cls}/${board}`)
  const data = await res.data
  return { props: { data } , notFound : !data }
}

export default subject;
