import React from "react";
import { useAtsStore } from "../Zustand/AtsStore";
import AnimatedProgressCircle from "../appcomponents/ProgressCircle";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutGrid } from "../components/ui/layout-grid";
import { Badge } from "../components/ui/badge";

const AtsScore = () => {
  const score = useAtsStore((state) => state.score);
  console.log("Ats Score:", score);

  const SkeletonOne = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your ATS Score</CardTitle>
          <CardDescription>
            This score indicates how well your resume matches the job role.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatedProgressCircle
            score={score?.result?.score}
            size={150}
            strokeWidth={12}
          />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  };

  const SkeletonTwo = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Matched Keywords</CardTitle>
          <CardDescription>
            The keywords from the job description that are present in your
            resume.
          </CardDescription>
        </CardHeader>
        <CardContent>
         { score?.result?.matchedKeywords.map((keyword, index) => (
            <Badge key={index} variant="default" className="m-1">{keyword}</Badge>
         ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  };
  const SkeletonThree = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Missing Keywords</CardTitle>
          <CardDescription>
            The keywords from the job description that are not present in your
            resume.
          </CardDescription>
        </CardHeader>
        <CardContent>
           { score?.result?.missingKeywords.slice(1).map((keyword, index) => (
            <Badge key={index} variant="destructive" className="m-1">{keyword}</Badge>
         ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  };
  const SkeletonFour = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>
            Detailed feedback on how to improve your resume for the job role.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto w-full h-96">
              {JSON.stringify(score?.result, null, 2)}
            </pre>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-1",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "col-span-4",
    },
  ];

  return (
    <div className="m-0 p-0 h-screen w-screen flex flex-col items-center justify-center">
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
        <BackgroundRippleEffect />

        <div className="w-full relative z-10 ">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-start justify-center w-3/4 pt-4">
              <h1 className="text-4xl text-blue-500 font-mono ">
                {score?.result?.jobPosition}
              </h1>
            </div>
          </div>
          {score !== null ? (
            <div className="h-screen w-full relative z-10 flex items-center justify-center ">
              <LayoutGrid cards={cards} />
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              No score available. Please check your resume first.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AtsScore;
