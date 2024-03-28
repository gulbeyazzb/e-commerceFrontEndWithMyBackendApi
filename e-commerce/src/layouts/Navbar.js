import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATES } from "../store/reducers/productReducer";
import MD5 from "crypto-js/md5";
import { fetchCategoryActionCreator } from "../store/actions/globalAction";
import { useLocation } from "react-router-dom";
import {
  setTotalPriceAction,
  setTotalQuantityAction,
} from "../store/actions/shoppingCartAction";

const NavBar = () => {
  const [visibleItem, setVisibleItem] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const { search } = useLocation();

  const userInfo = useSelector((store) => store.user.userInfo);

  const userNotFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.NotFetched
  );
  const userFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetched
  );
  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, []);
  const categories = useSelector((store) => store.global.categories);

  const dispatch = useDispatch();

  const womanCategories = categories.filter((category) =>
    category.code.includes("k:")
  );
  const manCategories = categories.filter((category) =>
    category.code.includes("e:")
  );
  const clickHandle = (e) => {};
  const cartProducts = useSelector((store) => store.shoppingCart.cartList);

  useEffect(() => {
    dispatch(setTotalQuantityAction());
  }, [cartProducts]);

  const { totalQuantity } = useSelector((store) => store.shoppingCart);

  return (
    <div className="bg-white ">
      <div className="py-6 sm:w-[90rem] m-auto">
        <div className="flex gap-[2rem] sm:gap-[11rem] justify-center items-center">
          <div>
            {" "}
            <NavLink
              to="/"
              exact
              className={`${
                !visibleItem ? "flex" : "hidden sm:flex"
              } font-bold text-2xl px-4 sm:px-0`}
            >
              Bandage
            </NavLink>
          </div>
          <div className="hidden sm:flex gap-[1rem] text-second-text font-bold text-sm">
            {" "}
            <NavLink to="/" className="" activeClassName="text-black" exact>
              Home
            </NavLink>
            <div className="flex items-center">
              <NavLink
                to="/v1/products"
                className=""
                activeClassName="text-black"
              >
                Shop
              </NavLink>
              <div className="relative inline-block text-left">
                <div className="flex items-center">
                  <button
                    onClick={() => setToggle(!toggle)}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-white text-sm  text-second-text font-bold hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <svg
                      className="-mr-1 h-10 w-10 sm:h-5 sm:w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {toggle && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div className="py-1" role="none">
                      <p className="font-bold text-black text-xl p-2">Woman</p>
                      {womanCategories.map((category) => (
                        <NavLink
                          to={`/v1/products/${
                            category.code.includes("k:")
                              ? `kadin/${category.code.slice(
                                  2,
                                  category.code.length
                                )}`
                              : `erkek/${category.code.slice(
                                  2,
                                  category.code.length
                                )}`
                          }${search}`}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id={category.id}
                          onClick={() => setToggle(false)}
                        >
                          {category.title}
                        </NavLink>
                      ))}
                      <p className="font-bold text-black text-xl p-2">Men</p>
                      {manCategories.map((category) => (
                        <NavLink
                          to={`/v1/products/${category.code}`}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          onClick={clickHandle}
                          id={category.id}
                        >
                          {category.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <NavLink
              to="/about"
              className=""
              activeClassName="text-black"
              exact
            >
              About
            </NavLink>
            <NavLink to="/blog" className="" activeClassName="text-black" exact>
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className=""
              activeClassName="text-black"
              exact
            >
              Contact
            </NavLink>
            <NavLink to="/team" className="" activeClassName="text-black" exact>
              Team
            </NavLink>
            <NavLink to="/pricing" activeClassName="text-black" exact>
              Pricing
            </NavLink>
          </div>
          <div className="flex items-center gap-2 text-black sm:text-primary-color font-bold ">
            {userNotFetched && (
              <div className="flex">
                {" "}
                <i
                  className={`${
                    !visibleItem ? "flex" : "flex sm:hidden"
                  } hidden sm:flex bx bx-user text-[#23a6f0] text-2xl `}
                ></i>
                <NavLink
                  to="/login"
                  exact
                  className={`${
                    !visibleItem ? "flex" : "flex sm:hidden "
                  } font-bold text-lg px-4 sm:px-0 hidden sm:flex items-center `}
                >
                  Login /
                </NavLink>
                <NavLink
                  to="/signup"
                  exact
                  className={`${
                    !visibleItem ? "flex" : "flex sm:hidden "
                  } font-bold text-lg px-4 sm:px-0 hidden sm:flex items-center `}
                >
                  Register
                </NavLink>
              </div>
            )}

            <input
              type="text"
              name="searchingItem"
              className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
              placeholder="Search"
              hidden={!visibleItem}
            ></input>

            <button
              onClick={() => setVisibleItem(!visibleItem)}
              className="flex items-center "
            >
              <i className="bx bx-search  text-2xl"></i>
            </button>

            {/*-------------------------------CART DROPDOWN NAV ------------------------------------------------------------  */}

            <NavLink
              to="/cart"
              exact
              className="items-center flex"
              hidden={visibleItem}
            >
              <i
                className="bx bx-cart  text-2xl"
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                hidden={visibleItem}
              ></i>
              {open && (
                <div
                  className="absolute right-32 z-10 top-12 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-600"
                  onMouseOver={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  {cartProducts?.map((p) => (
                    <div className="flex flex-col p-2 ">
                      <div className="flex gap-2 w-full justify-between">
                        <img src={p?.image} className="w-20 py-2"></img>
                        <div className="flex flex-col pt-3 w-3/4">
                          <h5 className="pb-3 font-bold text-base text-black">
                            {p.name}
                          </h5>
                          <div className="flex justify-between">
                            <span className="text-base text-center ">
                              count: {p.sellCount}
                            </span>
                            <span className=" text-base ">
                              {p.sellCount * p.price} TL
                            </span>
                          </div>
                        </div>{" "}
                      </div>{" "}
                      <hr className=" w-full text-white font-extrabold text-5xl" />
                    </div>
                  ))}
                  {cartProducts.length > 0 && (
                    <Button className="h-full w-full bg-orange-800 ">
                      GO TO CART
                    </Button>
                  )}
                  {cartProducts.length == 0 && (
                    <NavLink
                      to="/v1/products"
                      className="flex opacity-75 justify-center items-center w-full m-auto text-white text-xl font-bold bg-orange-900 text-center  shadow-lg"
                    >
                      Basket is empty! Let's Shop{" "}
                      <i className="bx bxs-chevron-right w-40 text-2xl"></i>
                    </NavLink>
                  )}
                </div>
              )}
              <p hidden={visibleItem}>{totalQuantity}</p>
            </NavLink>

            {/*-------------------------------CART DROPDOWN NAV ------------------------------------------------------------  */}
            <NavLink
              hidden={visibleItem}
              to="/favorites"
              exact
              className="flex items-center"
            >
              <i className="bx bx-heart text-2xl" hidden={visibleItem}></i>{" "}
              <p hidden={visibleItem}>1</p>
            </NavLink>

            {userFetched && (
              <div className="hidden sm:flex gap-2 items-center">
                <img
                  className="rounded-full"
                  src={`https://www.gravatar.com/avatar/${MD5(
                    userInfo.email
                  )}?s=35`}
                />
              </div>
            )}

            <div className="flex sm:hidden text-5xl">
              {!visibleItem && (
                <Menu>
                  <MenuHandler>
                    <Button className="p-0 shadow-none bg-transparent">
                      {" "}
                      <i className="bx bx-menu text-black text-3xl"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="">
                    <NavLink to="/" className="" exact>
                      {" "}
                      <MenuItem className=""> Home</MenuItem>{" "}
                    </NavLink>
                    <NavLink to="/shopping" className="">
                      {" "}
                      <MenuItem>Shop</MenuItem>
                    </NavLink>
                    <NavLink to="/about" className="" exact>
                      {" "}
                      <MenuItem>About</MenuItem>{" "}
                    </NavLink>
                    <NavLink to="/team" className="" exact>
                      {" "}
                      <MenuItem> Team</MenuItem>
                    </NavLink>
                    <NavLink to="/pricing" exact>
                      <MenuItem> Pricing</MenuItem>{" "}
                    </NavLink>
                    <NavLink to="/contact" className="" exact>
                      {" "}
                      <MenuItem>Contact</MenuItem>
                    </NavLink>
                    <NavLink to="/signup" exact className="flex items-center">
                      {" "}
                      <MenuItem>
                        {" "}
                        <box-icon
                          name="user"
                          color="#23a6f0"
                          className="w-3 h-3"
                        ></box-icon>{" "}
                        Login / Register
                      </MenuItem>{" "}
                    </NavLink>
                  </MenuList>
                </Menu>
              )}
            </div>

            {userFetched && (
              <div className="flex sm:hidden gap-2 items-center">
                <img
                  className="rounded-full"
                  src={`https://www.gravatar.com/avatar/${MD5(
                    userInfo.email
                  )}?s=35`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
