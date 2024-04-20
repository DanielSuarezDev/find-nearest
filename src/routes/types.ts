export enum ROUTES {
    LOGIN = "/login",
    HOME = "/",
    REVISIONS = "/revisions",
    CREATE_REVISION = "/revisions/create",
    VEHICULE = "/vehicule",
    CREATE_VEHICULE = "/vehicule/create",
  }
  
  export interface Route {
    path: string;
    isPrivate?: boolean;
    element: JSX.Element;
    isLayout?: boolean;
  }
  