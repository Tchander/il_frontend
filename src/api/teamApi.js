import axios from "axios";
import { BASE_TEAMS_URL_1, BASE_TEAMS_URL_2 } from "@/const";

export const getTeamByUrlName = async (urlName) =>
  await axios.get(BASE_TEAMS_URL_2 + urlName + "/");

export const getAllTeams1 = async () => await axios.get(BASE_TEAMS_URL_1);
export const getAllTeams2 = async () => await axios.get(BASE_TEAMS_URL_2);
