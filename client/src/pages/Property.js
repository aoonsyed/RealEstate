import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Property = () => {
  const location = useLocation();
  const { address, bedrooms, bathrooms, size, price, description } =
    location.state.property;

  const defaultCenter = {
    lat: 37.7749, // Default latitude (San Francisco, CA)
    lng: -122.4194, // Default longitude (San Francisco, CA)
  };

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const MapContainer = ({ property }) => {
    useEffect(() => {
      const mapOptions = {
        center: {
          lat: property.latitude, // Replace with property latitude
          lng: property.longitude, // Replace with property longitude
        },
        zoom: 12, // Initial zoom level
      };

      const map = new window.google.maps.Map(
        document.getElementById("map-container"),
        mapOptions
      );

      new window.google.maps.Marker({
        position: {
          lat: property.latitude, // Replace with property latitude
          lng: property.longitude, // Replace with property longitude
        },
        map: map,
        title: property.address,
      });
    }, [property]);
   
    return (
     
      <div
        id="gmaps-address"
        className="map-container bg-white rounded-lg shadow-md h-full"
        style={{ height: "100%" }}
      ></div>
    );
  };

  return (
    <div className="property-details-screen flex bg-gradient-to-r from-blue-500 to-blue-700 text-white h-screen">
      {/* Left half for details */}
      <div className="w-3/5 p-4 flex-1">
        <div className="property-details bg-white rounded-lg shadow-md p-4 h-full">
          <h2 className="text-2xl font-semibold mb-16 flex justify-center text-black">
            Property Details
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> {address}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Description:</strong> {description}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Price:</strong> ${price}
          </p>
          <div className="flex">
            <div className="w-1/2">
              <p className="text-gray-700">
                <strong>Bedrooms:</strong> {bedrooms}
              </p>
              <p className="text-gray-700">
                <strong>Bathrooms:</strong> {bathrooms}
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-gray-700">
                <strong>Size:</strong> {size} sqft
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right half for map */}
      <div className="w-2/5 p-4 flex-1">
        <LoadScript googleMapsApiKey="AIzaSyBdsMnH56pxZmplE3PK2A2hDMOZIEc5DKI">
          <MapContainer property={location.state.property} />
        </LoadScript>
      </div>
    </div>
  );
};

export default Property;