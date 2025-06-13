import Width from "./Width";
import { FaCamera } from "react-icons/fa";
import profileImage from "../assets/profile.webp";

const AccountSettings = () => {
  return (
    <Width>
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-4 p-4 bg-white w-full ">
          Account Settings
        </h2>

        <div className="border-b-2 border-dashed p-4">
          <div className="flex items-start gap-4 bg-gray-50 rounded-md mb-4">
            <div className="relative w-16 h-16 cursor-pointer object-cover">
              <img
                src={profileImage}
                alt="User"
                className="rounded-full w-16 h-16 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold ">
                <FaCamera className="p-[0.5px]" />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800">Marry Doe</h3>
              <p className="text-sm text-gray-500">Marry@gmail.com</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed font-semibold">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam
            Erat, Sed Diam
          </p>
        </div>
    
      </div>
    </Width>
  );
};

export default AccountSettings;
