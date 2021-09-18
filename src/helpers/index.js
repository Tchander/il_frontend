import {
  CLASS_MAPPER,
  IMG_TEAMS_MAPPER,
  IMG_FLAGS_WRAPPER,
  IMG_PILOTS_WRAPPER,
} from "@/const";
export const getClassByPosition = (index) => {
  return CLASS_MAPPER[index + 1];
};
export const getTeamImage = (teamImage) => {
  return IMG_TEAMS_MAPPER[teamImage];
};
export const getFlagImage = (countryFlag) => {
  return IMG_FLAGS_WRAPPER[countryFlag];
};
export const getPilotImage = (pilotImage) => {
  return IMG_PILOTS_WRAPPER[pilotImage];
};
