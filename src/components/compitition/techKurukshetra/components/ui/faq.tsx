import React from "react";

function Faq() {
  return (
    <div className="faq w-full flex justify-center items-center bg-gray-900/45  relative z-[555] py-10 flex-col gap-10" id="faq">
      <div className="h-fit w-full text-center text-2xl md:text-5xl font-extrabold text-white">FAQ</div>
      <div className="space-y-4 w-full max-w-5xl h-auto">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
            <h2 className="font-medium text-2xl">
            What is TechKurukshetra ?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200 text-xl">
            Tech Kurukshetra is a tech showdown where anyone from any college can participate in various domains like coding, project showcase, poster designing and write-ups .
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
            <h2 className="font-medium text-2xl">
              Who can participate ?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200 text-xl">
          Students from any college, regardless of their year of study or academic stream, are eligible to participate.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
            <h2 className="font-medium text-2xl">
              What is the Team size ?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200 text-xl">
          The required team size varies depending on the specific event. For the Project Showdown event, teams should consist of 2 to 4 members.However, for all other events, participation is limited to individual entries, meaning that only one person can compete per team.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
            <h2 className="font-medium text-2xl">
             Location of the Competition ?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200 text-xl">
            University of Engineering & Management,Kolkata, Newtown, Rajarhat, Action Area - III, Kol-700 160 
          </p>
        </details>
      
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
            <h2 className="font-medium text-2xl">
              what is the Participation fees?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200 text-xl">
            All its need the sprinkle of passion and open dash of  mindness .And guess what? The best part is that participation in all these events is completely free of charge! Whether you are competing solo or as part of a team, you would not have to worry about any registration fees or hidden costs.
          </p>
        </details>
        
      </div>
    </div>
  );
}

export default Faq;
