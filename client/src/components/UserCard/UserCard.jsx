import React from "react";

function UserCard({ user }) {
  return (
    <div>
      <article className="user-card">
        <div className="user-info">
          <span className="info-label">Name:</span>
          <span className="info-value">{user.name}</span>
        </div>
        <div className="user-info">
          <span className="info-label">Email:</span>
          <span className="info-value">{user.email}</span>
        </div>
        <div className="user-info">
          <span className="info-label">Registration Date:</span>
          <span className="info-value">{user.registrationDate}</span>
        </div>
      </article>
    </div>
  );
}

export default UserCard;
