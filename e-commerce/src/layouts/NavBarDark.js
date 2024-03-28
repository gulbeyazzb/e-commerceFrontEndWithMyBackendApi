export default function NavBarDark() {
  return (
    <div className="hidden sm:flex absolute bg-[#23856D] w-full top-0   ">
      <div className="flex justify-evenly container mx-auto p-4 h-14 items-center text-white">
        <div className="flex font-normal text-sm gap-6 ">
          {" "}
          <a href="tel:5414558154">
            <i className="bx bxs-phone-call me-2"></i>+90 (555) 555 55 55
          </a>
          <a href="mailto:glbzbayram@gmail.com">
            <i className="bx bx-envelope me-2"></i>glbzbayram@gmail.com
          </a>
        </div>
        <div className="font-bold text-sm">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex justify-between items-center font-bold text-sm gap-2">
          <h6>Follow Us :</h6>
          <a href="">
            <i className="bx bxl-facebook-circle text-white text-lg"></i>
          </a>
          <a>
            <i className="bx bxl-instagram text-white text-lg"></i>
          </a>
          <a>
            <i className="bx bxl-twitter text-white text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
