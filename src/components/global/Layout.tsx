import React, {ReactNode} from "react";

interface LayoutProps {
  navbar: ReactNode;
  children?: ReactNode;
  asid: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className="container">
      <div className="lg:flex">
        <div className="flex-shrink-0 lg:w-20">{props.navbar}</div>
        <div className="hidden lg:block w-[1px] bg-[#E6E6E6] top-0 bottom-0"></div>
        <div className="flex-1">{props.children}</div>
        <div className="hidden lg:block w-[1px] bg-[#E6E6E6] top-0 bottom-0"></div>
        <div className="w-[300px]">
          <div className="sticky top-10">{props.asid}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
