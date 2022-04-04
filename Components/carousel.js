import { useState } from "react";

export default function Carousel() {
  const [value, setValue] = useState({
      'step' : "STEP 1",
      'text' : "All deposits are pooled",
      'textSecond': "The liquidity pooled enables smart transactions and access to complex FOR token development strategies"
  });
  return (
    <div>
      <div className="text-center flex flex-row justify-center">
        <div className="flex-col">
          <h1 className="md:text-5xl text-3xl font-bold">STRATEGIES</h1>
          <p className="text-base md:text-xl py-5 leading-loose">
            A SINGLE DEPOSIT RESULTS IN THE MINING AND DEVELOPMENT OF FUTURE
            FORGE <br />
            PROJECTS, AND FORMS HIGHEST QUALITY IN THE ECOSYSTEM.
          </p>
          <h1 className="md:text-4xl text-2xl font-bold mt-8">
            {value["step"]}
          </h1>

          <div className="w-1/6 flex flex-row space-x-2 justify-center mx-auto mt-3">
            <div
              className={
                "w-1/4 before:block before:absolute before:content-[' '] border-b-4 hover:cursor-pointer border-" +
                (value["step"] == "STEP 1" ? "white" : "gray-500")
              }
              onClick={() =>
                setValue({
                  step: "STEP 1",
                  text: "ALL DEPOSITS ARE POOLED ",
                  textSecond:
                    " THE LIQUIDITY POOLED ENABLES SMART TRANSACTIONS AND ACCESS TO COMPLEX FOR TOKEN DEVELOPMENT STRATEGIES",
                })
              }
            ></div>

            <div
              className={
                "w-1/4 before:block before:absolute before:content-[' '] border-b-4 hover:cursor-pointer border-" +
                (value["step"] == "STEP 2" ? "white" : "gray-500")
              }
              onClick={() =>
                setValue({
                  step: "STEP 2",
                  text: "THE POOL ACCESSES THE RESULTS OF THE FORGE PLACED (STAKE).",
                  textSecond:
                    "USERS GENERATE THE SAME PERCENTAGE OF REVENUE ACCORDING TO THE APPLICABLE SHARE PERIOD. (THE PERCENTAGE OF REWARDS WILL DECREASE ANNUALLY).",
                })
              }
            ></div>

            <div
              className={
                "w-1/4 before:block before:absolute before:content-[' '] border-b-4 hover:cursor-pointer border-" +
                (value["step"] == "STEP 3" ? "white" : "gray-500")
              }
              onClick={() =>
                setValue({
                  step: "STEP 3",
                  text: "THE FORGE THAT IS STAKE WILL BE LOCKED FOREVER AS A BASIC FORM OF DEVELOPING THE FORGE ECOSYSTEM.",
                  textSecond:
                    "46.67% SUPPLY FOR PREPARED BY THE DEV AS A REWARD FOR STACKERS, ONLY VALID IN THE V.1 FORGE NETWORK PROJECT",
                })
              }
            ></div>

            <div
              className={
                "w-1/4 before:block before:absolute before:content-[' '] border-b-4 hover:cursor-pointer border-" +
                (value["step"] == "STEP 4" ? "white" : "gray-500")
              }
              onClick={() =>
                setValue({
                  step: "STEP 4",
                  text: "THE UTILITY OF USING FOR TOKENS",
                  textSecond:
                    "DEV HAVE A VISION TO BUILD A FORGE NETWORK AND WANTS TO FORM A LARGER COMMUNITY THROUGH FUTURE PROJECTS TO CREATE A QUALITY ECOSYSTEM.",
                })
              }
            ></div>
          </div>
          <p className="text-base md:text-xl pt-5">
            {value["text"]}
          </p>
          <p className="w-10/12 mx-auto text-base md:text-xl pt-3 leading-loose">
            {value["textSecond"]}
          </p>
        </div>
      </div>
    </div>
  );
}
