"use client";
import Link from "next/link";
import React, {Fragment} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {usePathname} from "next/navigation";

let navLink = [
  {
    name: "Primary",
    links: [
      {
        icon: [
          "/ant-design_home-filled.svg",
          "/ant-design_home-filled (1).svg",
        ],
        url: "/",
        name: "Home",
      },
      {
        icon: ["/ion_notifications.svg", "/ion_notifications (1).svg"],
        url: "/Public_profile",
        name: "Notification",
      },
      {
        icon: [
          "/fluent_text-bullet-list-square-20-regular.svg",
          "/fluent_text-bullet-list-square-20-regular (1).svg",
        ],
        url: "/articles",
        name: "Article",
      },
      {
        icon: [
          "/ant-design_fire-filled.svg",
          "/ant-design_fire-filled (2).svg",
        ],
        url: "/Profile",
        name: "Fire",
      },
    ],
  },
  {
    name: "Secondary",
    links: [
      {
        icon: ["/file-pen-solid 3.svg", "/file-pen-solid 2.svg"],
        url: "/Title",
        name: "Writing",
      },
    ],
  },
];

function Navbar() {
  let [open, setOpen] = React.useState(false);
  let Toggle = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  return (
    <div className="h-full">
      <div className="sticky top-0">
        <div className="overflow-clip relative hidden lg:block">
          <div className="h-screen overflow-hidden overflow-y-auto -mr-[23px]">
            <div className="flex flex-col justify-between mr-6 h-full">
              <div className="flex flex-col items-center mt-12 mr-6 mb-10">
                <div className="mb-16">
                  <Link href="/">
                    <img width={55} height={34} src="./nav_logo.png" alt="" />
                  </Link>
                </div>
                <div>
                  {navLink.map((group, index) => (
                    <Fragment key={index}>
                      <div className="flex flex-col gap-11 mb-9">
                        {group.links.map(({icon, url}) => {
                          return (
                            <div key={icon[0]}>
                              <Link href={url}>
                                <img
                                  src={icon[url === pathname ? 1 : 0]}
                                  alt=""
                                />
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                      {navLink.length - 1 !== index && (
                        <hr className="mb-10 border-slate-400" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="mb-4 flex justify-center">
                <Link href={""}>
                  <img height={42} src="./image 3.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex justify-between items-center mt-4">
          <div>
            <Link href="/">
              <img src="./nav_logo.png" alt="" />
            </Link>
          </div>
          <div className="">
            <button onClick={Toggle}>
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/512/2311/2311531.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div>
          <Drawer onClose={Toggle} open={open} direction="left">
            <div className="overflow-clip relative">
              <div className="h-screen p-6 overflow-hidden overflow-y-auto -mr-[23px]">
                <div className="flex flex-col justify-between mr-6 h-full">
                  <div className="flex flex-col mr-6 mb-10">
                    <div className="mb-12">
                      <Link href="/">
                        <img
                          width={55}
                          height={34}
                          src="./nav_logo.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="">
                      {navLink.map((group, index) => (
                        <Fragment key={index}>
                          <div className="flex flex-col gap-9 mb-9">
                            {group.links.map(({icon, url, name}) => {
                              return (
                                <div key={icon[0]}>
                                  <Link
                                    href={url}
                                    className="flex items-center gap-3"
                                  >
                                    <img
                                      src={icon[url === pathname ? 1 : 0]}
                                      alt=""
                                    />
                                    <span className="mt-2 text-xl font-semibold">
                                      {name}
                                    </span>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                          {navLink.length - 1 !== index && (
                            <hr className="mb-10 border-slate-400" />
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Link href="/" className="flex items-center gap-4">
                      <img height={42} src="./image 3.png" alt="" />
                      <span className="mt-2">Jon Doe</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
