import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px] mx-auto lg:mx-0">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Recruitment Opportunities
              </h2>
              <ul className="mb-9 space-y-4 text-base font-medium text-body-color sm:text-lg">
                <li>• No-code developers</li>
                <li>• Machine learning interns</li>
                <li>• Front-end-developers</li>
                <li>• Full Stack Developers</li>
                <li>• Data Analyst</li>
                <li>• HR Manager</li>
                <li>• Technical Support Team Lead</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Courses Available
              </h2>
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Machine Learning</h3>
                  <p className="text-base font-medium text-body-color">3 Months Course + Project with Stipend + Certifications</p>
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Front end Development</h3>
                  <p className="text-base font-medium text-body-color">3 Months Course + Project with Stipend + Certifications</p>
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Data Analyst</h3>
                  <p className="text-base font-medium text-body-color">2 Months Course + Project with Stipend + Certifications</p>
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Full Stack Developer</h3>
                  <p className="text-base font-medium text-body-color">3 Months Course + Project with Stipend + Certifications</p>
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Platform Management</h3>
                  <p className="text-base font-medium text-body-color">1 Months Course + Project with Stipend + Certifications</p>
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Dropshipping</h3>
                  <p className="text-base font-medium text-body-color">4 Months  + Project + Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
