import { Link } from "react-router-dom";

import HomePageImage from "../Assets/Images/homePageMainImage.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout  >
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Padho_
                        <span className="text-orange-500 font-bold">
                            Likho_
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-200">
                        Dear Parents enroll your child into a world full of_ 
                        <span className="text-orange-500 font-bold">
                            animations and learnings.
                        </span>
                    </p>
                    <p className="text-xl text-gray-200">
                    At Padho Likho, we believe in the transformative power of education. Our mission is to provide a <span className="text-orange-500 font-bold">dynamic and interactive learning</span> experience that caters to students of all ages and backgrounds. Whether you’re looking to enhance your skills, prepare for exams, or pursue your passions, Padho Likho is here to guide you every step of the way.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-orange-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Course Catalog
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img alt="homepage image" src={HomePageImage} />
                </div>

            </div>
        </HomeLayout>
    );
}

export default HomePage;