import axios from "axios";
import { BASE_PILOTS_URL_1, BASE_PILOTS_URL_2 } from "@/const";

export const getAllPilots1 = async () => await axios.get(BASE_PILOTS_URL_1);
export const getAllPilots2 = async () => await axios.get(BASE_PILOTS_URL_2);
