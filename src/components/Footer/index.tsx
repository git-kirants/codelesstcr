const Footer = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center text-base font-medium text-body-color dark:text-body-color-dark">
              <p className="mb-4">Call or email:</p>
              <div className="flex justify-center items-center gap-4">
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
