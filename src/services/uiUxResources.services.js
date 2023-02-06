/** @format */
import axios from "axios";

const getUiUxResources = async () => {
  return await axios.get(process.env.REACT_APP_API);
};
const getUiUxResourcesHomePage = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/homePage`);
};

const getSubCategoryByName = async (name) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/category?search=${name}`
  );
};

const UiUxResourcesServices = { getUiUxResources, getSubCategoryByName, getUiUxResourcesHomePage };

export default UiUxResourcesServices;
