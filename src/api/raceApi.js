import axios from "axios";
import { BASE_RACES_URL_1, BASE_RACES_URL_2 } from "@/const";

export const getAllRace1 = async () => await axios.get(BASE_RACES_URL_1);
export const getRaceByCountry1 = async (country) =>
  await axios.get(BASE_RACES_URL_1 + country + "/");
export const getAllRace2 = async () => await axios.get(BASE_RACES_URL_2);
export const getRaceByCountry2 = async (country) =>
  await axios.get(BASE_RACES_URL_2 + country + "/");
