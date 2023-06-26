export const roleFormater = (role) => {
  switch (role) {
    case 0:
      return "Client";
    case 1:
      return "Admin";
    case 2:
      return "Master";
    case 3:
      return "Manager";
    default:
      return "";
  }
};
