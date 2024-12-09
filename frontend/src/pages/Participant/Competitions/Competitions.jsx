import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Button from "../../../components/Button";
import { HiPlus } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa6";
import moment from "moment";
import CompetitionList from "./_components/CompetitionList";
import SearchList from "./_components/SearchList";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Competitions = () => {
  const [search, setSearch] = useState("");
  const [searchView, setSearchView] = useState(true);
  const [searchComps, setSearchComps] = useState([]);
  const [competitions, setCompetitions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/competitions`
      );

      setCompetitions(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleSearch = () => {
      if (search == "") {
        setSearchView(false);
        return;
      }
      setSearchView(true);
      setSearchComps(
        competitions.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) != false
        )
      );
    };

    handleSearch();
  }, [search]);

  return (
    <div className="py-5 px-8 ">
      <div className="flex gap-3 w-full">
        <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg flex-1">
          <IoSearch size={25} />
          <input
            type="text"
            className="bg-gray-700 focus:outline-none w-full "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for competitions..."
          />
        </div>
        <Button
          handleClick={() => navigate(`${location.pathname}/create`)}
          className="flex items-center gap-2 flex-2"
        >
          <HiPlus size={25} />
          <p>Create One</p>
        </Button>
      </div>
      {/*Here, we need to add all different Competitions */}
      {searchView ? (
        <SearchList text="Search results..." competitions={searchComps} />
      ) : (
        <div className="mt-8 mb-4">
          <h1 className={`text-[2.5em] mb-2 text-green-500`}>
            Discover Kodespaces -
            <span className="text-[#787878]">
              {" "}
              Your Hub for Competitive Coding!
            </span>
          </h1>
          <p className="text-gray-200 max-w-[50em] text-sm">
            Join exciting coding challenges, from solo problem-solving to
            multiplayer duels. Test your skills, tackle diverse problems, and
            earn rewards with every competition.
          </p>
          <div className="mt-12">
            <CompetitionList
              text="Best Picks for you"
              competitions={competitions}
            />
            <CompetitionList
              text="Solo Rides to the end!"
              competitions={competitions.filter((item) => item.mode == "solo")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Competitions;
