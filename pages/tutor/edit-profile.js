import React from "react";
import Header from "@/components/Header";

const EditProfile = () => {
  return (
    <>
      <Header />
      <main id="main" style={{ marginTop: "6.25rem" }}>
        <div className="container light-style flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
          <form name="edit-profile-tutor">
            <div className="card overflow-hidden">
              <div className="row no-gutters row-bordered row-border-light">
                <div className="col-md-3 pt-0">
                  <div className="list-group list-group-flush account-settings-links">
                    <a
                      style={{ backgroundColor: "#4fb2bf" }}
                      className="list-group-item list-group-item-action active"
                      data-toggle="list"
                      href="#account-general"
                    >
                      General
                    </a>
                    <a
                      style={{ backgroundColor: "#4fb2bf" }}
                      className="list-group-item list-group-item-action"
                      data-toggle="list"
                      href="#account-change-password"
                    >
                      Change password
                    </a>
                    <a
                      style={{ backgroundColor: "#4fb2bf" }}
                      className="list-group-item list-group-item-action"
                      data-toggle="list"
                      href="#account-info"
                    >
                      Basic Info
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="account-general"
                    >
                      <hr className="border-light m-0" />
                      <div className="card-body">
                        <div className="form-group">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control mb-1"
                            name="name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="text"
                            className="form-control mb-1"
                            name="email"
                            placeholder="abc@mail.com"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Degree</label>
                          <input
                            type="text"
                            name="degree"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="account-change-password">
                      <div className="card-body pb-2">
                        <div className="form-group">
                          <label className="form-label">Current password</label>
                          <input
                            type="password"
                            name="c_password"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">New password</label>
                          <input
                            type="password"
                            name="n_password"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">
                            Repeat new password
                          </label>
                          <input
                            type="password"
                            name="r_password"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="account-info">
                      <div className="card-body pb-2">
                        <div className="form-group">
                          <label className="form-label">
                            Bio (Not more than 30 words)
                          </label>
                          <textarea
                            className="form-control"
                            name="bio"
                            rows={5}
                            defaultValue={
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Birthday</label>
                          <input
                            type="date"
                            name="dob"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Area</label>
                          <input
                            type="text"
                            name="area"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">District</label>
                          <input
                            type="text"
                            name="district"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <hr className="border-light m-0" />
                      <div className="card-body pb-2">
                        <h6 className="mb-4">Contacts</h6>
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Linkedin ID</label>
                          <input
                            type="text"
                            name="linkedin"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right mt-3">
              <button type="button" className="default-button">
                Save changes
              </button>
              &nbsp;
              <button type="button" className="default-button">
                Cancel
              </button>
              <br />
              <br />
              <br />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default EditProfile;
