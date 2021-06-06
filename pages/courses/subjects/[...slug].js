import axios from "axios";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const subject = ({ data }) => {
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
              {data.map((item) => (
                <div
                  className="col-lg-4 col-md-4 d-flex align-items-stretch"
                  key={item._id}
                >
                  <div className="course-item">
                    <Image
                      src={`/assets/img/${item.name}.jpg`}
                      className="img-fluid"
                      width={420}
                      height={200}
                      alt={item.name}
                    />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3>
                          Class {item.class} -{" "}
                          <span style={{ textTransform: "capitalize" }}>
                            {item.name}
                          </span>
                        </h3>
                      </div>
                      <a href="9th-state.html">
                        View More <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {/* End Course Item*/}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  let posts = [];
  const a = ["9", "10", "11", "12"];
  const b = ["stateboard", "cbse"];

  for (var i of a) {
    for (var j of b) {
      posts.push([i, j]);
    }
  }
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [cls, board] = params.slug;
  const res = await axios.get(
    `http://localhost:3000/api/subjects/${cls}/${board}`
  );
  const data = await res.data;
  if (!data) {
    return {
      redirect: {
        destination: "/courses",
        permanent: false,
      },
    };
  }
  return { props: { data } };
}
// export async function getServerSideProps({ params }) {
//   const [cls, board] = params.slug;
//   const res = await axios.get(
//     `${process.env.URL}/api/subjects/${cls}/${board}`
//   );
//   const data = await res.data;
//   if (!data) {
//     return {
//       redirect: {
//         destination: "/courses",
//         permanent: false,
//       },
//     };
//   }
//   return { props: { data } };
// }
export default subject;
