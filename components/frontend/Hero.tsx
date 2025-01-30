import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import TransitionalText from "./TransitionalText";
import { Pill } from "lucide-react";

const Hero = () => {
    const TEXTS = [
        "Acupuncture",
        "Massage",
        "Chiropractor",
        "Dental",
        "Cosmetic",
        "Dietitian",
        "Speech Therapist",
        "Occupational Therapist",
        "Acupuncturist"
    ];
    return (
        <div className="dark:bg-dark bg-white">
            <div className="relative  pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl flex flex-wrap items-center gap-3">
                                    <span>Book your</span> {" "}
                                    <TransitionalText TEXTS={TEXTS} className="text-red-500 uppercase" />
                                    <br></br>
                                    <span>sessions now</span>
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                    Health shouldn&apos;t be a puzzle, we are cutting through the B.S to bring you simple, affordable, and transparent healthcare.
                                </p>

                                {/* Search bar here */}
                                <SearchBar />
                                {/*  */}
                                <ul className="flex flex-wrap items-center mt-6">
                                    <li>
                                        <Link
                                            href="/#"
                                            className="bg-white dark:bg-black inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-black hover:bg-blue-dark lg:px-7"
                                        >
                                            Need Doctor Urgently
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#"
                                            className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary hover:bg-gray-200 hover:rounded-2xl dark:text-white"
                                        >
                                            <span className="mr-2">
                                                <Pill className="h-5 w-5 flex-shrink-0" />
                                            </span>
                                            Need a Refill
                                        </Link>
                                    </li>
                                </ul>
                                <div className="py-4 pt-8 flex gap-4 ">
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="font-bold">600</span>
                                        <span className="text-sm text-gray-300">Active Specialists</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="font-bold">1800</span>
                                        <span className="text-sm text-gray-300">Active Patients</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Image
                                        src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                        width={300} height={300}
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;