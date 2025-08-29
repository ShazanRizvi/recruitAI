import React, {useState} from "react";
import { BrainCircuit } from "lucide-react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { wordsfortypewrite, wordsfortextgenerate } from "../assets/Constants";
import { FileUpload } from "@/components/ui/file-upload"


const AtsChecker = () => {
  const [file, setFile] = useState(null);
  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    console.log(file);
  }

  return (
    <div>
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
      <div className="flex justify-center mt-20"> 
        <FileUpload onFileUpload={handleFileUpload} />

      </div>
    </div>
  );
};

export default AtsChecker;
