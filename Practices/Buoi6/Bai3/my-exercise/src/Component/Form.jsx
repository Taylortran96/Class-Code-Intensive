import React, { useState } from "react";

export default function FormContainer () {
  const [data, setData] = useState({
    name: "",
    occupation: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thông tin của bạn là: ${data.name} được sinh tại ${data.occupation}`);
  };

  return (
    <div className="form-wrapper">
        <h1>Thông tin của bạn: {data.name} sinh tại {data.occupation}</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Occupation:
                <input
                type="text"
                name="occupation"
                value={data.occupation}
                onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};
