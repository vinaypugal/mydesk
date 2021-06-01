import Link from "next/link";
import React from "react";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <main id="main">
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <i
                        className="bx bx-user-check"
                        style={{ fontSize: 50 }}
                      />
                      <div className="mt-3">
                        <h4>Abinaya</h4>
                        <p className="text-secondary mb-1">Grade 10</p>
                        <p className="text-muted font-size-sm">
                          Velammal School
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-8">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <div className="mt-3">
                        <h4>Bio</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris nunc arcu, dignissim sit amet
                          sollicitudin iaculis, vehicula id urna. Sed luctus
                          urna nunc. Donec fermentum, magna sit amet rutrum
                          pretium, turpis dolor molestie diam, ut lacinia diam
                          risus eleifend sapien. Curabitur ac nibh nulla.
                          Maecenas nec augue placerat, viverra tellus non,
                          pulvinar risus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-mt-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">Abinaya V</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        abi@gmail.com
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile No.</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">7904373819</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Parent Mobile No.</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">8799763466</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Avadi, Chennai
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <Link href="/student/edit-profile">
                          <a className="btn btn-block default-button">
                            Edit Profile
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
