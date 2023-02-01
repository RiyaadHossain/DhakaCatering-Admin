import React from "react";

export default function MakeAdmin() {
  return (
    <div className="max-w-2xl mx-auto flex items-center justify-center h-screen my-12 md:my-1">
      <div className="card py-8 justify-center w-full shadow-2xl bg-base-200">
        <div className="card-body">
          <h3 className="text-center text-2xl font-bold mb-4">Make Admin</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="file-input w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                User Role
              </option>
              <option>Admin</option>
              <option>Moderator</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-wide mx-auto btn-primary">
              Make Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
