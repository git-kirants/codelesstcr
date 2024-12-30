const Footer = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center text-sm md:text-base font-medium text-body-color dark:text-body-color-dark">
              <p className="mb-2 md:mb-4">Call or email:</p>
              <div className="flex flex-row justify-center items-center gap-2 md:gap-4 text-xs md:text-base whitespace-nowrap">
                <a href="tel:7034607887" className="hover:text-primary">
                  +91 7034607887
                </a>
                <span>•</span>
                <a href="mailto:tcrcodeless@gmail.com" className="hover:text-primary">
                  tcrcodeless@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
