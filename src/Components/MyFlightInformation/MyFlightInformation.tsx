import React, { FC, useState } from "react";

interface MyFlightInformationProps {}

const MyFlightInformation: FC<MyFlightInformationProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    flightNumber: "",
    departure: "",
    arrival: "",
    date: "",
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can perform actions like validation or sending the form data
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <h2>My Flights Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Flight Number:
            <input
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleInputChange}
            />
          </label>
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>

      <div
        id="multi-product-search-form-1"
        data-testid="multi-product-search-form"
      >
        <form>
          <div className="row mb-3">
            <label
              htmlFor="departure-destination"
              className="col-sm-2 col-form-label"
            >
              Departure
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                className="form-control"
                id="departure-destination"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="arrival-destination"
              className="col-sm-2 col-form-label"
            >
              Arrival
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                className="form-control"
                id="arrival-destination"
              />
            </div>
          </div>

          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">
              Date of Travel
            </legend>
            \{" "}
          </fieldset>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="gridCheck1"
                ></label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Find My Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyFlightInformation;
