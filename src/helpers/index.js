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
export const teamColor = (team) => {
  switch (team) {
    case "Alfa Romeo":
      return "background: #990100; color: #fffbfa;";
    case "Alpha Tauri":
      return "background: #26284f; color: #fffbfa;";
    case "Alpine":
      return "background: #053ca3; color: #fffbfa;";
    case "Aston Martin":
      return "background: #015850; color: #fffbfa;";
    case "Ferrari":
      return "background: #e20419; color: #fffbfa;";
    case "Haas":
      return "background: #fff; color: #0d73c7;";
    case "McLaren":
      return "background: #fe8800; color: #fffbfa;";
    case "Mercedes":
      return "background: #01d2bd; color: #000;";
    case "RedBull":
      return "background: #171560; color: #fffbfa;";
    case "Williams":
      return "background: #01aae5; color: #fffbfa;";
    default:
      return "background: transparent;";
  }
};
