import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AirportCodesAutoComplete() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={airportCodes}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Airport" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const airportCodes = [
  {
    label: "ATL - Hartsfield-Jackson Atlanta International Airport",
    airport: "Hartsfield-Jackson Atlanta International Airport",
  },
  {
    label: "LAX - Los Angeles International Airport",
    airport: "Los Angeles International Airport",
  },
  {
    label: "ORD - Chicago O'Hare International Airport",
    airport: "Chicago O'Hare International Airport",
  },
  {
    label: "DFW - Dallas/Fort Worth International Airport",
    airport: "Dallas/Fort Worth International Airport",
  },
  {
    label: "DEN - Denver International Airport",
    airport: "Denver International Airport",
  },
  {
    label: "JFK - John F. Kennedy International Airport",
    airport: "John F. Kennedy International Airport",
  },
  {
    label: "SFO - San Francisco International Airport",
    airport: "San Francisco International Airport",
  },
  {
    label: "SEA - Seattle-Tacoma International Airport",
    airport: "Seattle-Tacoma International Airport",
  },
  {
    label: "LAS - McCarran International Airport",
    airport: "McCarran International Airport",
  },
  {
    label: "MCO - Orlando International Airport",
    airport: "Orlando International Airport",
  },
  {
    label: "MIA - Miami International Airport",
    airport: "Miami International Airport",
  },
  {
    label: "EWR - Newark Liberty International Airport",
    airport: "Newark Liberty International Airport",
  },
  {
    label: "CLT - Charlotte Douglas International Airport",
    airport: "Charlotte Douglas International Airport",
  },
  {
    label: "PHX - Phoenix Sky Harbor International Airport",
    airport: "Phoenix Sky Harbor International Airport",
  },
  {
    label: "IAH - George Bush Intercontinental Airport",
    airport: "George Bush Intercontinental Airport",
  },
  {
    label: "BOS - Logan International Airport",
    airport: "Logan International Airport",
  },
  {
    label: "MSP - Minneapolis-Saint Paul International Airport",
    airport: "Minneapolis-Saint Paul International Airport",
  },
  {
    label: "DTW - Detroit Metropolitan Wayne County Airport",
    airport: "Detroit Metropolitan Wayne County Airport",
  },
  {
    label: "FLL - Fort Lauderdale-Hollywood International Airport",
    airport: "Fort Lauderdale-Hollywood International Airport",
  },
  {
    label: "PHL - Philadelphia International Airport",
    airport: "Philadelphia International Airport",
  },
  { label: "LGA - LaGuardia Airport", airport: "LaGuardia Airport" },
  {
    label: "BWI - Baltimore/Washington International Thurgood Marshall Airport",
    airport: "Baltimore/Washington International Thurgood Marshall Airport",
  },
  {
    label: "DCA - Ronald Reagan Washington National Airport",
    airport: "Ronald Reagan Washington National Airport",
  },
  {
    label: "SLC - Salt Lake City International Airport",
    airport: "Salt Lake City International Airport",
  },
  {
    label: "SAN - San Diego International Airport",
    airport: "San Diego International Airport",
  },
  {
    label: "TPA - Tampa International Airport",
    airport: "Tampa International Airport",
  },
  {
    label: "MDW - Chicago Midway International Airport",
    airport: "Chicago Midway International Airport",
  },
  {
    label: "IAD - Washington Dulles International Airport",
    airport: "Washington Dulles International Airport",
  },
  {
    label: "HNL - Daniel K. Inouye International Airport",
    airport: "Daniel K. Inouye International Airport",
  },
  {
    label: "PDX - Portland International Airport",
    airport: "Portland International Airport",
  },
  {
    label: "STL - St. Louis Lambert International Airport",
    airport: "St. Louis Lambert International Airport",
  },
  { label: "DAL - Dallas Love Field", airport: "Dallas Love Field" },
  {
    label: "BNA - Nashville International Airport",
    airport: "Nashville International Airport",
  },
  {
    label: "AUS - Austin-Bergstrom International Airport",
    airport: "Austin-Bergstrom International Airport",
  },
  {
    label: "MSY - Louis Armstrong New Orleans International Airport",
    airport: "Louis Armstrong New Orleans International Airport",
  },
  {
    label: "HOU - William P. Hobby Airport",
    airport: "William P. Hobby Airport",
  },
  {
    label: "RSW - Southwest Florida International Airport",
    airport: "Southwest Florida International Airport",
  },
  {
    label: "SJC - Norman Y. Mineta San Jose International Airport",
    airport: "Norman Y. Mineta San Jose International Airport",
  },
  {
    label: "SMF - Sacramento International Airport",
    airport: "Sacramento International Airport",
  },
  {
    label: "OAK - Oakland International Airport",
    airport: "Oakland International Airport",
  },
  {
    label: "CLE - Cleveland Hopkins International Airport",
    airport: "Cleveland Hopkins International Airport",
  },
  {
    label: "PIT - Pittsburgh International Airport",
    airport: "Pittsburgh International Airport",
  },
  {
    label: "IND - Indianapolis International Airport",
    airport: "Indianapolis International Airport",
  },
  {
    label: "CMH - John Glenn Columbus International Airport",
    airport: "John Glenn Columbus International Airport",
  },
  {
    label: "SAT - San Antonio International Airport",
    airport: "San Antonio International Airport",
  },
  {
    label: "MCI - Kansas City International Airport",
    airport: "Kansas City International Airport",
  },
  {
    label: "CVG - Cincinnati/Northern Kentucky International Airport",
    airport: "Cincinnati/Northern Kentucky International Airport",
  },
  {
    label: "RDU - Raleigh-Durham International Airport",
    airport: "Raleigh-Durham International Airport",
  },
  {
    label: "MKE - General Mitchell International Airport",
    airport: "General Mitchell International Airport",
  },
  { label: "OGG - Kahului Airport", airport: "Kahului Airport" },
  {
    label: "BUF - Buffalo Niagara International Airport",
    airport: "Buffalo Niagara International Airport",
  },
  { label: "LGB - Long Beach Airport", airport: "Long Beach Airport" },
  {
    label: "BHM - Birmingham-Shuttlesworth International Airport",
    airport: "Birmingham-Shuttlesworth International Airport",
  },
  {
    label: "JAX - Jacksonville International Airport",
    airport: "Jacksonville International Airport",
  },
  {
    label: "ONT - Ontario International Airport",
    airport: "Ontario International Airport",
  },
  {
    label: "RNO - Reno-Tahoe International Airport",
    airport: "Reno-Tahoe International Airport",
  },
  {
    label: "RIC - Richmond International Airport",
    airport: "Richmond International Airport",
  },
  { label: "SNA - John Wayne Airport", airport: "John Wayne Airport" },
  {
    label: "MSY - Louis Armstrong New Orleans International Airport",
    airport: "Louis Armstrong New Orleans International Airport",
  },
  {
    label: "TUL - Tulsa International Airport",
    airport: "Tulsa International Airport",
  },
  { label: "OMA - Eppley Airfield", airport: "Eppley Airfield" },
  {
    label: "OKC - Will Rogers World Airport",
    airport: "Will Rogers World Airport",
  },
  {
    label: "MEM - Memphis International Airport",
    airport: "Memphis International Airport",
  },
  {
    label: "ABQ - Albuquerque International Sunport",
    airport: "Albuquerque International Sunport",
  },
  {
    label: "PBI - Palm Beach International Airport",
    airport: "Palm Beach International Airport",
  },
  {
    label: "ANC - Ted Stevens Anchorage International Airport",
    airport: "Ted Stevens Anchorage International Airport",
  },
  {
    label: "SDF - Louisville Muhammad Ali International Airport",
    airport: "Louisville Muhammad Ali International Airport",
  },
  {
    label: "BUR - Hollywood Burbank Airport",
    airport: "Hollywood Burbank Airport",
  },
  {
    label: "DSM - Des Moines International Airport",
    airport: "Des Moines International Airport",
  },
  {
    label: "ELP - El Paso International Airport",
    airport: "El Paso International Airport",
  },
  {
    label: "GEG - Spokane International Airport",
    airport: "Spokane International Airport",
  },
  {
    label: "SAV - Savannah/Hilton Head International Airport",
    airport: "Savannah/Hilton Head International Airport",
  },
  { label: "TYS - McGhee Tyson Airport", airport: "McGhee Tyson Airport" },
  {
    label: "SYR - Syracuse Hancock International Airport",
    airport: "Syracuse Hancock International Airport",
  },
  {
    label: "DAY - Dayton International Airport",
    airport: "Dayton International Airport",
  },
  {
    label: "PWM - Portland International Jetport",
    airport: "Portland International Jetport",
  },
  {
    label: "ORF - Norfolk International Airport",
    airport: "Norfolk International Airport",
  },
  {
    label: "ICT - Wichita Dwight D. Eisenhower National Airport",
    airport: "Wichita Dwight D. Eisenhower National Airport",
  },
  {
    label: "MSN - Dane County Regional Airport",
    airport: "Dane County Regional Airport",
  },
  {
    label: "LIT - Bill and Hillary Clinton National Airport",
    airport: "Bill and Hillary Clinton National Airport",
  },
  {
    label: "CRP - Corpus Christi International Airport",
    airport: "Corpus Christi International Airport",
  },
  {
    label: "BTR - Baton Rouge Metropolitan Airport",
    airport: "Baton Rouge Metropolitan Airport",
  },
  { label: "BOI - Boise Airport", airport: "Boise Airport" },
  {
    label: "CID - The Eastern Iowa Airport",
    airport: "The Eastern Iowa Airport",
  },
  {
    label: "GSO - Piedmont Triad International Airport",
    airport: "Piedmont Triad International Airport",
  },
  {
    label: "FWA - Fort Wayne International Airport",
    airport: "Fort Wayne International Airport",
  },
  { label: "SBA - Santa Barbara Airport", airport: "Santa Barbara Airport" },
  {
    label: "ALB - Albany International Airport",
    airport: "Albany International Airport",
  },
  {
    label: "TLH - Tallahassee International Airport",
    airport: "Tallahassee International Airport",
  },
  {
    label: "MDT - Harrisburg International Airport",
    airport: "Harrisburg International Airport",
  },
  {
    label: "GRR - Gerald R. Ford International Airport",
    airport: "Gerald R. Ford International Airport",
  },
  {
    label: "RIC - Richmond International Airport",
    airport: "Richmond International Airport",
  },
  {
    label: "RST - Rochester International Airport",
    airport: "Rochester International Airport",
  },
  {
    label: "GRR - Gerald R. Ford International Airport",
    airport: "Gerald R. Ford International Airport",
  },
  {
    label: "FNT - Bishop International Airport",
    airport: "Bishop International Airport",
  },
  {
    label: "AMA - Rick Husband Amarillo International Airport",
    airport: "Rick Husband Amarillo International Airport",
  },
  { label: "PVD - T. F. Green Airport", airport: "T. F. Green Airport" },
  {
    label: "MHT - Manchester-Boston Regional Airport",
    airport: "Manchester-Boston Regional Airport",
  },
  {
    label: "MSN - Dane County Regional Airport",
    airport: "Dane County Regional Airport",
  },
  {
    label: "ORF - Norfolk International Airport",
    airport: "Norfolk International Airport",
  },
  {
    label: "BTV - Burlington International Airport",
    airport: "Burlington International Airport",
  },
  { label: "CRW - Yeager Airport", airport: "Yeager Airport" },
  {
    label: "ROC - Greater Rochester International Airport",
    airport: "Greater Rochester International Airport",
  },
  {
    label: "EVV - Evansville Regional Airport",
    airport: "Evansville Regional Airport",
  },
  {
    label: "HPN - Westchester County Airport",
    airport: "Westchester County Airport",
  },
  {
    label: "CAE - Columbia Metropolitan Airport",
    airport: "Columbia Metropolitan Airport",
  },
  {
    label: "GSP - Greenville-Spartanburg International Airport",
    airport: "Greenville-Spartanburg International Airport",
  },
  {
    label: "ECP - Northwest Florida Beaches International Airport",
    airport: "Northwest Florida Beaches International Airport",
  },
  {
    label: "FSD - Sioux Falls Regional Airport",
    airport: "Sioux Falls Regional Airport",
  },
  {
    label: "CHA - Chattanooga Metropolitan Airport",
    airport: "Chattanooga Metropolitan Airport",
  },
  {
    label: "FAY - Fayetteville Regional Airport",
    airport: "Fayetteville Regional Airport",
  },
  {
    label: "DAB - Daytona Beach International Airport",
    airport: "Daytona Beach International Airport",
  },
  {
    label: "BZN - Bozeman Yellowstone International Airport",
    airport: "Bozeman Yellowstone International Airport",
  },
  {
    label: "MFE - McAllen Miller International Airport",
    airport: "McAllen Miller International Airport",
  },
  {
    label: "BIL - Billings Logan International Airport",
    airport: "Billings Logan International Airport",
  },
  {
    label: "VPS - Destin-Fort Walton Beach Airport",
    airport: "Destin-Fort Walton Beach Airport",
  },
  {
    label: "PNS - Pensacola International Airport",
    airport: "Pensacola International Airport",
  },
  {
    label: "AGS - Augusta Regional Airport",
    airport: "Augusta Regional Airport",
  },
  {
    label: "SBN - South Bend International Airport",
    airport: "South Bend International Airport",
  },
  {
    label: "ABE - Lehigh Valley International Airport",
    airport: "Lehigh Valley International Airport",
  },
  {
    label: "BMI - Central Illinois Regional Airport at Bloomington-Normal",
    airport: "Central Illinois Regional Airport at Bloomington-Normal",
  },
  { label: "CRW - Yeager Airport", airport: "Yeager Airport" },
  {
    label: "DSM - Des Moines International Airport",
    airport: "Des Moines International Airport",
  },
  {
    label: "FNT - Bishop International Airport",
    airport: "Bishop International Airport",
  },
  {
    label: "GRR - Gerald R. Ford International Airport",
    airport: "Gerald R. Ford International Airport",
  },
  {
    label: "LAN - Capital Region International Airport",
    airport: "Capital Region International Airport",
  },
  {
    label: "MSN - Dane County Regional Airport",
    airport: "Dane County Regional Airport",
  },
];
