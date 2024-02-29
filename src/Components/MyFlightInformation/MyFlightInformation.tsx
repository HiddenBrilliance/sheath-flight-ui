import React, { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface MyFlightInformationProps {}

//Figure out why maximum component is not working
const MaximumDateComponent: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());

  const maximumDate = dayjs("2025-12-31");
};

const MyFlightInformation: FC<MyFlightInformationProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    flightNumber: "",
    departure: "",
    arrival: "",
    date: "",
  });

  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  console.log("Calendar Value", value);

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
        <div className="row mb-3">
          <label
            htmlFor="departure-destination"
            className="col-sm-2 col-form-label"
          >
            Depart:
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
            Arrival:
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
          <legend className="col-form-label col-sm-2 pt-0">Date </legend>{" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
              minDate={value}
              //figure out why it is not recognizing my variable for maximum date
              maxDate={maximumDate}
            />
          </LocalizationProvider>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1"></label>
            </div>
          </div>
        </div>
        <button type="submit">Find My Flights </button>
      </form>
    </div>
  );
};
{
  /* <div>
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
        Add more form fields as needed */
}

export default MyFlightInformation;
