import React from "react";

const Members = props => {
  return (
    <div className="members-list">
      {props.member.map(formData => (
        <div className="person" key={formData.id}>
          <h2>{formData.name}</h2>
          <h3>{formData.email}</h3>
          <h3>{formData.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Members;
