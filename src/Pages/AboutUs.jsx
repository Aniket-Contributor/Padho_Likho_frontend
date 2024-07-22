import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl  font-semibold">
                            <span className="text-orange-500 font-bold">
                               Why Choose Padho Likho?
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200">
                        Choosing Padho Likho means choosing a path to success through a personalized and engaging learning experience. Our platform offers expertly curated courses taught by seasoned professionals who are dedicated to your growth and development. With <span className="text-orange-500 font-bold">flexible learning options</span>, you can study at your own pace, anytime and anywhere, making it easy to balance your education with your lifestyle.Our commitment to <span className="text-orange-500 font-bold">quality education</span>, combined with <span className="text-orange-500 font-bold">innovative teaching methods</span> and up-to-date resources, ensures that you receive the best possible learning experience.<span className="text-orange-500 font-bold"> Join Padho Likho</span> and empower yourself with the knowledge and skills needed to excel in todays fast-paced world. 
                        </p>
                        
                    </section>

                    <div className="w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto my-16">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                    {...celebrity} 
                                                                    key={celebrity.slideNumber} 
                                                                    totalSlides={celebrities.length}
                                                                    
                                                                />))}
                    
                </div>


            </div>
        </HomeLayout>  
    );
}   


export default AboutUs;