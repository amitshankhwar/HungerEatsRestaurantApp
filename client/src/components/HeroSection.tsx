import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HeroImage from "@/assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="flex flex-col md:flex-row max-w-7xl max-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food anytime & anywhere
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicious food is waiting for you, we are always near to
            you
          </p>
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 w-full">
            <Input
              type="text"
              value={searchText}
              placeholder="Search restaurant by name, city & country"
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 border-2 shadow-lg focus:border-none"
            />
            <Search className="text-gray-500 absolute inset-y-2 left-2" />
            <Button
              onClick={() => navigate(`/search/${searchText}`)}
              className="bg-orange hover:bg-hoverOrange"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img src={HeroImage} className="object-cover w-full max-h-[500px]" />
      </div>
    </div>
  );
};

export default HeroSection;