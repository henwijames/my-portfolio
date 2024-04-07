import Me from "./Me";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    User2,
    MailIcon,
    HomeIcon,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Henry James Ribano",
    },
    {
        icon: <MailIcon size={20} />,
        text: "henryribano27@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on June 27, 2003",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelor of Science in Information Technology",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Taal, Batangas, Philippines",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                college: "Lemery Colleges",
                qualifications: "Bachelor of Science in Information Technology",
                years: "2019 - Present",
            },
            {
                college: "Lemery Senior High School",
                qualifications: "Accountancy, Business and Management Strand",
                years: "2015 - 2019",
            },
            {
                college: "Napico Elementary School",
                qualifications: "Elementary",
                years: "2009 - 2015",
            },
        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Dainice Event Management",
                role: "Event Staff",
                years: "November 2022",
            },
            {
                company: "Lemery Colleges",
                role: "Front-End Developer and UI/UX Designer",
                years: "October 2023 - March 2024",
            },
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML",
                image: "/skills/html.svg",
            },
            {
                name: "CSS",
                image: "/skills/css.svg",
            },
            {
                name: "Javascript",
                image: "/skills/javascript.svg",
            },
            {
                name: "PHP",
                image: "/skills/php.svg",
            },
            {
                name: "SASS",
                image: "/skills/sass.svg",
            },
            {
                name: "TAILWIND",
                image: "/skills/tailwind.svg",
            },
            {
                name: "BOOTSTRAP",
                image: "/skills/bootsrap.svg",
            },
            {
                name: "NODEJS",
                image: "/skills/nodejs.svg",
            },
            {
                name: "MYSQL",
                image: "/skills/mysql.svg",
            },
            {
                name: "PYTHON",
                image: "/skills/python.svg",
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/git.svg",
            },
            {
                imgPath: "/about/figma.svg",
            },
            {
                imgPath: "/about/photoshop.svg",
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24 mb-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About Me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <Me
                            containerStyles="w-[505px] h-[505px] relative"
                            imgSrc="/hero/ako.png"
                        />
                    </div>
                    {/* Tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList
                                className="w-full grid xl:grid-cols-3 xl:max-w-[520px]
                            xl:border dark:border-none"
                            >
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="personal"
                                >
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="qualifications"
                                >
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="skills"
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* Tabs Content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* Personal Info */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Creating beautiful and responsive
                                            website is my passion.
                                        </h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            I'm into web development for almost
                                            2 years now. I have a strong
                                            foundation in front-end development
                                            and UI/UX design. I am currently
                                            studying Bachelor of Science in
                                            Information Technology at Lemery
                                            Colleges. I am also a front-end
                                            developer and UI/UX designer at
                                            Lemery Colleges.
                                        </p>
                                        {/* Icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                    >
                                                        <div className="text-primary">
                                                            {item.icon}
                                                        </div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* Languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-slate-500">
                                                Language Skill
                                            </div>
                                            <div className=" border-b border-border"></div>
                                            <div>Tagalog, English</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Qualifications */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Career
                                        </h3>
                                        {/* Experience and Education Wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* Experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary mb-4">
                                                    <Briefcase size={20} />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "experience"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "experience"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                role,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                company
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                role
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium ">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* Education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary mb-4">
                                                    <GraduationCap size={20} />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "education"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "education"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                college,
                                                                qualifications,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                college
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                qualifications
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium ">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">
                                            Tools I use everyday
                                        </h3>
                                        {/* skills */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">
                                                Skills
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* Skill list */}
                                            <div className="grid grid-cols-5 xl:flex gap-4">
                                                {getData(
                                                    skillData,
                                                    "skills"
                                                ).data.map((item, index) => {
                                                    const { image } = item;
                                                    return (
                                                        <div key={index}>
                                                            <div className="flex justify-center items-center">
                                                                <div className="xl:w-10 xl:h-10 w-8 h-8 ">
                                                                    <Image
                                                                        src={
                                                                            image
                                                                        }
                                                                        alt="skills"
                                                                        width={
                                                                            50
                                                                        }
                                                                        height={
                                                                            50
                                                                        }
                                                                        priority
                                                                        className="hover:scale-150 transition-all duration-300 cursor-pointer"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                                Tools
                                            </h4>
                                            <div className=" border-b border-border mb-4"></div>
                                            {/* tool list */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(
                                                    skillData,
                                                    "tools"
                                                ).data.map((item, index) => {
                                                    const { imgPath } = item;
                                                    return (
                                                        <div key={index}>
                                                            <div className="flex items-center gap-x-4">
                                                                <div className="w-8 h-8">
                                                                    <Image
                                                                        src={
                                                                            imgPath
                                                                        }
                                                                        alt="tool"
                                                                        width={
                                                                            48
                                                                        }
                                                                        height={
                                                                            48
                                                                        }
                                                                        priority
                                                                        className=" hover:scale-150 transition-all duration-300 cursor-pointer"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
