import React, { useState, useEffect } from "react";
import { BrainCircuit } from "lucide-react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { wordsfortypewrite, wordsfortextgenerate } from "../assets/Constants";
import { FileUpload } from "@/components/ui/file-upload";
import callAPI from "../../http/axios";
import { placeholders } from "../assets/Constants";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

const AtsChecker = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState({});
  const [jobTitle, setJobTitle] = useState("");
  const [hasSubmittedJobTitle, setHasSubmittedJobTitle] = useState(false);

  const handleJobTitleChange = (e) => setJobTitle(e.target.value);

  const handleJobTitleSubmit = (e) => {
    e.preventDefault();
    if (jobTitle.trim()) {
      setHasSubmittedJobTitle(true);
      console.log("Job title submitted:", jobTitle);
    }
  };


  useEffect(() => {
    if (!file) return; // Don't run on initial render or if file is null

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobPosition", jobTitle);

    const fetchScore = async () => {
      try {
        const response = await callAPI(
          "POST",
          "/ats/resume_score",
          formData,
          { "Content-type": "multipart/form-data" },
          true
        );
        setScore(response);
        console.log(response);
      } catch (err) {
        console.error("Error fetching score:", err);
      }
    };

    fetchScore();
  }, [file]);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile); 
  };

  return (
    <div className="overflow-hidden">
      <div className="mt-10 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <BrainCircuit color="#2563eb" />
          <span>ATS Resume Checker</span>
        </HoverBorderGradient>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center mt-10">
          <TypewriterEffectSmooth words={wordsfortypewrite} />
          <div className="text-neutral-400 dark:text-neutral-200 text-xs sm:text-base">
            <TextGenerateEffect words={wordsfortextgenerate} />
          </div>
        </div>
      </div>

      {!hasSubmittedJobTitle ? (
        <div className="flex justify-center mt-20 p-10">
          <div className="mt-10 w-[40rem] flex flex-col items-center justify-center px-4">
            <p className="font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
              Job Position
            </p>
            <p className=" mb-10 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
              Enter the Job title you would like to check your resume for
            </p>

            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleJobTitleChange}
              onSubmit={handleJobTitleSubmit}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20">
          <FileUpload onChange={handleFileUpload} />
        </div>
      )}
    </div>
  );
};

export default AtsChecker;
