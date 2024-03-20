import React, { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AirportCodesAutoComplete from "../AutoCompleteInput";

interface MyFlightInformationProps {}

const MyFlightInformation: FC<MyFlightInformationProps> = () => {
  const [formData, setFormData] = useState({
    airlineCarrier: "",
    flightNumber: "",
    departure: "",
    arrival: "",
    date: "",
  });
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
  const maximumDate = dayjs("2025-12-31");

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
            <AirportCodesAutoComplete></AirportCodesAutoComplete>
            {/* <input
              type="string"
              className="form-control"
              id="departure-destination"
            /> */}
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
            <AirportCodesAutoComplete></AirportCodesAutoComplete>
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Date </legend>{" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
              minDate={dayjs(new Date())}
              //figure out why it is not recognizing my variable for maximum date
              maxDate={maximumDate}
            />
          </LocalizationProvider>
        </fieldset>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <h3>Airline Carrier Preference</h3>{" "}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>{" "}
        <button type="submit">Find My Flights </button>
      </form>
    </div>
  );
};

export default MyFlightInformation;
