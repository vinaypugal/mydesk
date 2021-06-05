import Header from "@/components/Header";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loading from "components/Loading";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import useCheck from "utils/useCheck";

const Profile = () => {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  useCheck(user, "student");
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/student", fetcher);

  if (error) return <h1>failed to load</h1>;
  if (!data) return <Loading />;
  if (!data.profile) {
    return <Loading />;
  }
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
                        <h4>{data.profile.name}</h4>
                        <p className="text-secondary mb-1">
                          Grade {data.profile.class}
                        </p>
                        <p className="text-muted font-size-sm">
                          {data.profile.school}
                        </p>
                        <p className="text-muted font-size-sm">
                          {data.profile.board}
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
                        <h6 className="mb-0">Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.profile.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.email}
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile No.</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.profile.mobile}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Parent Mobile No.</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.profile.parentmobile}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.profile.city}, {data.profile.state}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <Link href="/student/edit-profile">
                          <a
                            className="btn btn-block default-button"
                            href="edit-profile.html"
                          >
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

export const getServerSideProps = withPageAuthRequired();

export default Profile;
