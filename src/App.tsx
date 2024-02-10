import "./App.css";

const App = () => {
  return (
    <>
      <div className="m-0 p-1 w-full h-fit md:flex md:flex-row bg-white overflow-auto ">
        <div className=" w-full md:w-8/12 flex flex-col justify-start items-start p-2 m-0">
          <h1 className=" text-3xl text-black font-bold ">Mahesh Bhalerao</h1>
          <h1 className=" text-lg text-black font-semibold ">
            Front End Dev (ReactJS) + Cross Platform Mobile Application
            Developer (React-Native)
          </h1>
          <div className=" w-full flex flex-col justify-start items-start p-0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">
              PROFILE SUMMARY
            </h1>
            <p className=" text-lg text-black font-normal ">
              Over 10+ years of IT experience which includes 6.0 years of
              experience in developing Front End applications using ReactJS and
              Redux. Expertise in cross-platform mobile application development
              using React-Native framework. Highly Curious about new front-end
              development technologies and thoroughly mastering them with a keen
              awareness of new industry developments and programming solutions.
            </p>
          </div>
          <div className=" w-full flex flex-col justify-start items-start p0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">
              WORK EXPERIENCE
            </h1>
            <ul className=" text-lg text-black font-normal list-disc p-4 ">
              <li>
                Worked on multiple ReactJS projects to develop high performing
                web applications.
              </li>
              <li>
                Extensive hands-on experience with React Hooks and Functional
                components.
              </li>
              <li>Experience in implementing Micro-Frontend Applications.</li>
              <li>
                Experience in implementation of react-redux and Redux Tool Kit
                for state management of react application.
              </li>
              <li>
                Experience in Redux Thunk middleware used to manage Asynchronous
                actions.
              </li>
              <li>Experience with HOC and Container pattern in ReactJS.</li>
              <li>Experience with Styled Components.</li>
              <li>
                Worked on writing unit test cases using React Testing Library,
                Jest and Enzyme.
              </li>
              <li>
                Hands on experience of HTML5, CSS3, JavaScript with ES6 features
                and Typescript.
              </li>
              <li>Working knowledge of Flexbox, CSS Grid, Media Query.</li>
              <li>
                Experience in Cypress End to End Automation Testing Framework.
              </li>
              <li>
                Extensive experience in JIRA and GitHub for version controlling.
              </li>
              <li>
                Experience in developing Cross-Platform Mobile applications
                using React Native framework.
              </li>
              <li>
                Worked on multiple Native iOS (swift/Objective C) Mobile
                Application Development.
              </li>
              <li>
                Knowledge of Apple App Store Application deployment process.
              </li>
              <li>
                Able to work in a Rapid and Agile development environment with
                frequent deliveries.
              </li>
              <li>Self-learning other JavaScript frameworks and NodeJS.</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-4/12 flex flex-col justify-start items-start p-2 m-0 ">
          <>
            <p>Pune, India, 411061</p>
            <h1 className=" text-lg text-black font-semibold ">
              +91-9657644092
            </h1>
            <h1 className=" text-lg text-black font-semibold ">
              bhaleraomahesh26@gmail.com
            </h1>
          </>

          <div className=" w-full flex flex-col justify-start items-start p-0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">
              TECHNICAL SKILLS
            </h1>
            <div className="text-lg text-black font-normal">
              {`ReactJS, Redux, React Native, JavaScript, ES6,\n 
              HTML5, CSS3,  SASS, styled- components, Tailwind CSS, \n
              Typescript, Nodejs and ExpressJS(Basic) React, \n
              Testing Library, Jest and Enzyme, \n
              Cypress – Automation Testing Framework, \n
              iOS – Swift / Objective C`}
            </div>
          </div>

          <div className=" w-full flex flex-col justify-start items-start p-0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">
              DEVELOPMENT TOOLS
            </h1>
            <div className=" text-lg text-black font-normal ">
              VScode, Atom, Xcode, Android Studio, React Native Debugger,
              Postman,  React & Redux Dev Tool
            </div>
          </div>

          <div className=" w-full flex flex-col justify-start items-start p-0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">EDUCATION</h1>
            <h1 className=" text-lg text-black font-semibold ">
              MCA (Master of Computer Application)
            </h1>
            <div className=" text-sm text-black font-light ">2009 - 2012</div>
          </div>
          <div className=" w-full flex flex-col justify-start items-start p-0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">LANGUAGES</h1>
            <h1 className=" text-lg text-black font-semibold ">
              English, Hindi, Marathi
            </h1>
          </div>

          <div className=" w-full flex flex-col justify-start items-start p-0 my-5 ">
            <h1 className=" text-xl text-blue-400 font-bold ">INTEREST</h1>
            <h1 className=" text-lg text-black font-semibold ">
              Front End Development
            </h1>
            <div className=" text-sm text-black font-light ">
              (ReactJS and JavaScript based UI Libraries/frameworks)
            </div>
            <h1 className=" text-lg text-black font-semibold ">
              Mobile Application Development
            </h1>
            <div className=" text-sm text-black font-light ">
              (Cross-platform – React Native)
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 p-1 w-full flex flex-col bg-white overflow-auto ">
        <div className=" w-full flex flex-col justify-start items-start p-2 my-5 ">
          <h1 className=" text-xl text-blue-400 font-bold ">ORGANIZATIONS</h1>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">LTIMINDTREE,</span>{" "}
              <span className=" text-sm text-black font-light ">
                Pune - UI Specialist
              </span>
            </div>
            <div className=" text-sm text-black font-light ">
              Jan 2022 – CURRENTLY WORKING
            </div>
          </div>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">
                Persistent Systems Limited,
              </span>{" "}
              <span className=" text-sm text-black font-light ">
                Pune - Engineering Lead
              </span>
            </div>
            <div className=" text-sm text-black font-light ">
              Feb 2020 – Jan 2022
            </div>
          </div>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">
                Cognizant Technology Solutions,
              </span>{" "}
              <span className=" text-sm text-black font-light ">
                Pune - Associate Projects
              </span>
            </div>
            <div className=" text-sm text-black font-light ">
              Dec 2015 – Jan 2020
            </div>
          </div>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">TCP International Inc.,</span>{" "}
              <span className=" text-sm text-black font-light ">
                Pune - Software Engineer
              </span>
            </div>
            <div className=" text-sm text-black font-light ">
              May 2014 – Sept 2015
            </div>
          </div>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">
                Greyhound Technology Pvt. Ltd.,
              </span>
              <span className=" text-sm text-black font-light ">
                Nashik - Junior Engineer
              </span>
            </div>
            <div className=" text-sm text-black font-light ">
              Jan 2013 – May 2014
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col justify-start items-start p-2 my-5 ">
          <h1 className=" text-xl text-blue-400 font-bold ">KEY PROJECTS</h1>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">
                Organization People Platform (ReactJS) ,
              </span>{" "}
              <span className=" text-sm text-black font-light ">
                – LTIMINDTREE, Pune
              </span>
            </div>
            <div className=" text-lg text-black font-normal ">
              Application that supports workforce transformation, where there is
              merger, acquisition, re-structuring, or a combination. This
              platform enables workforce transformations by empowering business
              leaders to follow a data-centric design, planning and tracking
              approach to achieve organizational, talent and financial
              objectives.
            </div>
            <div className="font-semibold my-1">Responsibilities: </div>
            <ul className=" text-lg text-black font-normal list-disc p-4 ">
              <li>Worked as FE lead for Survey POD.</li>
              <li>Development and enhancement of React components.</li>
              <li>Implementing Redux flow with RTK.</li>
              <li>Create common component with storybook.</li>
              <li>
                Using Azure DevOps for CI/CD and Azure Board for Agile process.
              </li>
              <li>Technical analysis of User Stories tickets.</li>
              <li>
                Attending daily client meetings and discussion of queries.
              </li>
            </ul>
          </div>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">
                Web based Application for Educational Institutes (ReactJS),
              </span>{" "}
              <span className=" text-sm text-black font-light ">
                – Persistent Systems Limited, Pune
              </span>
            </div>
            <div className=" text-lg text-black font-normal ">
              The web-based application provides platform for various
              educational institutes to select the exact corequisite materials
              that students need across courses and disciplines. Their unique
              diagnostic approach using assessments and analytics helps
              institutes identify key gaps in each student understanding and
              give them an adaptive learning pathway.
            </div>
            <div className="font-semibold my-1">Responsibilities: </div>
            <ul className=" text-lg text-black font-normal list-disc p-4 ">
              <li>Development and enhancement of React components.</li>
              <li>Implementing Redux flow with Thunk Middleware.</li>
              <li>Working with Functional components and API Integration.</li>
              <li>Creation of GIT Pull Requests and Peer code reviews.</li>
              <li>Presenting sprint demos.</li>
            </ul>
          </div>

          <div className=" text-lg text-black font-normal ">
            <div>
              <span className="font-semibold ">
                Banking Financial Services Travel Tool Application – ReactJs Web
                App/React Native (Cross Platform Mobile App) ,
              </span>{" "}
              <span className=" text-sm text-black font-light ">
                – Cognizant Technology Solutions, Pune
              </span>
            </div>
            <div className=" text-lg text-black font-normal ">
              Change the way you travel with BFS Travel Tools. Provides access
              over 850 selected airport lounges, view exclusive privileges for
              cardmembers, and explore city guides around the world.
            </div>
            <div className="font-semibold my-1">Responsibilities: </div>
            <ul className=" text-lg text-black font-normal list-disc p-4 ">
              <li>Creating react re-usable components.</li>
              <li>
                Writing custom middleware to manage the asynchronous data from
                APIs.
              </li>
              <li>
                Writing Native Bridging code for iOS for accessing platform
                specific APIs.
              </li>
              <li>
                Extensively use GitHub for version controlling, regularly
                pushing to code, and reviewing the PRs raised by teammates.
              </li>
              <li>
                Integration of firebase Analytics and Fastlane for deploying
                beta testing builds to QA.
              </li>
              <li>Third party native iOS SDK integration.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
