import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 transform transition-transform duration-300 hover:scale-105 h-[400px] w-full max-w-[350px] flex flex-col"
        data-wow-delay=".15s"
      >
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-gray-800 dark:text-gray-100 sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
