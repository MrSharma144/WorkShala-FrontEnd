import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CompaniesCard2 from "../components/CompaniesCard2";
import Footer from "../components/Footer";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function CompaniesPage() {
    const [internship, setInternship] = useState([]);
    const [tempInternship, setTempInternship] = useState([]);
    const [loading, setLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [industries, setIndustries] = useState(["Industries"]);
    const [companyTypes, setCompanyTypes] = useState(["Company Types"]);

    const getData = async () => {
        setLoading(true);
        const tempLocation = [];
        try {
            const response = await axios.get(
                `https://workshala-api.onrender.com/auth/profiles/${
                    document.cookie.split(";")[0].split("=")[1]
                }/`
            );
            const internships = await axios.get(
                `https://internship-api-ljib.onrender.com/internship/${response.data.skills}`
            );
            console.log(internships);
            setInternship(internships.data);
            setTempInternship(internships.data);
            internships.data.forEach((element) => {
                if (!tempLocation.includes(element.Location)) {
                    tempLocation.push(element.Location);
                    setLocations(tempLocation);
                }
            });
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filterJobs = () => {
        setLoading(true);
        if (selectedLocation != null) {
            const temp = tempInternship;
            setInternship([]);
            temp.forEach((element) => {
                if (element.Location == selectedLocation) {
                    setInternship((prev) => [...prev, element]);
                }
            });
        }
        setLoading(false);
    };

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedCompanyType, setSelectedCompanyType] = useState(null);

    const applyChangesHandler = () => {
        filterJobs();
    };

    const clearChangesHandler = () => {
        setSelectedLocation(null);
        setSelectedIndustry(null);
        setSelectedCompanyType(null);
        setInternship(tempInternship);
    };

    return (
        <>
            <NavBar />
            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0 z-40">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}
            <div className="bg-[#FFF6F9] p-6">
                <h2 className="ml-10 text-xl font-bold min-[280px]:text-xl">
                    Featured Companies Actively Hiring
                </h2>
            </div>

            <div className="flex flex-wrap justify-evenly w-full my-12">
                <select
                    name=""
                    id=""
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-[300px] my-3 bg-[#FFF6F9] p-3 cursor-pointer rounded-lg shadow-lg"
                >
                    {locations.map((location, id) => (
                        <option key={id} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
                <select
                    name=""
                    id=""
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-[300px] my-3 bg-[#FFF6F9] p-3 cursor-pointer rounded-lg shadow-lg"
                >
                    {industries.map((industry, id) => (
                        <option key={id} value={industry}>
                            {industry}
                        </option>
                    ))}
                </select>
                <select
                    name=""
                    id=""
                    onChange={(e) => setSelectedCompanyType(e.target.value)}
                    className="w-[300px] my-3 bg-[#FFF6F9] p-3 cursor-pointer rounded-lg shadow-lg"
                >
                    {companyTypes.map((company, id) => (
                        <option key={id} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
                <div className="w-[200px] flex justify-between items-center my-3">
                    <button
                        onClick={applyChangesHandler}
                        className="py-1 px-3 text-white hover:bg-[#411e6b] rounded-lg bg-[#9465CC]"
                    >
                        Apply
                    </button>
                    <button
                        onClick={clearChangesHandler}
                        className="py-1 px-3 text-white hover:bg-[#411e6b] rounded-lg bg-[#9465CC]"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            {/*Companies section start here */}
            <div className="bg-[#FFF6F9] pt-20 m-auto justify-evenly flex flex-wrap">
                {internship != [] &&
                    internship.map((element, id) => (
                        <CompaniesCard2 key={id} items={element} />
                    ))}
            </div>
            {/*Companies section ends here*/}

            <Footer />
        </>
    );
}
