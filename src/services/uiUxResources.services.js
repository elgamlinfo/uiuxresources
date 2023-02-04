/** @format */
import axios from "axios";

const getUiUxResources = async () => {
  return await axios.get(process.env.REACT_APP_API);
};

const getSubCategoryByName = async (name) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/category?search=${name}`
  );
};

const UiUxResourcesServices = { getUiUxResources, getSubCategoryByName };

export default UiUxResourcesServices;
