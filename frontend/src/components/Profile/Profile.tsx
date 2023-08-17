import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';


const Profile = () => {
    const [ profileData, setProfileData] = useState<ProfileData>({
        _id: "",
        name: "",
        title: "",
        summary: "",
        contactLinks:[]
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const profileId = localStorage.getItem("profile_id");
        if (!profileId) {
            console.error("Error: No se encontró el profile en localStorage.");
            return;
    };

    const { Meta } = Card;

  return (
    <Card className="profile"
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}
}