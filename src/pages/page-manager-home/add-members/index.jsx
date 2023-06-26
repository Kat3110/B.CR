import React from "react";
import AddMemberCsv from "./dialog";
import Button from "components/button";
import { ReactComponent as Close } from "assets/Plus.svg";
import { useRegisterUsersMutation } from "services/admin";
import { colorGenerate } from "utils/colorGenerate";

export default function AddMembers({ setShowAdd }) {
  const [csv, setCsv] = React.useState([]);

  const [register, { isLoading, isSuccess }] = useRegisterUsersMutation();

  const handleCsv = React.useCallback((filename, data) => {
    setCsv((prev) => [...prev, { filename, data }]);
  }, []);

  const removeCsv = (index) => {
    setCsv((prev) => {
      return prev.filter((_item, i) => i !== index);
    });
  };

  const handleRegister = () => {
    const data = csv.reduce((acc, { data }) => {
      return [...acc, ...data];
    }, []);
    register({
      data: data.map((item) => ({
        email: item.id,
        password: item.password,
        name: item.name,
        companyName: item.company,
        department: item.position,
        role: item.role,
        nation: item.nation,
        profileColor: colorGenerate(),
      })),
    });
  };

  React.useEffect(() => {
    if (isSuccess) setCsv([]);
  }, [isSuccess]);

  return (
    <div className="page-manager-home__add-member">
      <div className="page-manager-home__links">
        <span onClick={() => setShowAdd((prev) => !prev)}>Add a member</span>
        <span className="page-manager-home__link-active">Add members</span>
      </div>
      <div className="page-manager-home__group-button">
        {csv.map((item, index) => (
          <div key={index} className="csv_box">
            {item.filename}
            <Close onClick={() => removeCsv(index)} className="csv__close" />
          </div>
        ))}
        <AddMemberCsv handleCsv={handleCsv} />
        <Button
          size="s"
          text="Apply"
          color="default"
          onClick={handleRegister}
        />
      </div>
    </div>
  );
}
