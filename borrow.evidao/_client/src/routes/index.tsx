import Homepage from "pages/Homepage/Homepage";
import LoginFallback from "../pages/LoginFallback/LoginFallback";

interface IRoute {
  url: string;
  Component: React.FC;
  protected: Boolean;
}

export const routeList: IRoute[] = [
  {
    url: "/",
    Component: LoginFallback,
    protected: false,
  },
  // PROTECTED ROUTE
  {
    url: "/borrow",
    Component: Homepage,
    protected: true,
  },
];
