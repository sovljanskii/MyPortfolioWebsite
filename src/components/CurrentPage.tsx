import { useState } from "react";

let currentPage: string = "main";

export const getCurrentPage = () => {
  return currentPage.toString();
};

export const usePageState = () => {
  const [currentPage, setCurrentPage] = useState<string>("main");

  const getCurrentPage = () => {
    return currentPage;
  };

  const setNextPage = (page: string): void => {
    setCurrentPage(page);
  };

  return { getCurrentPage, setNextPage };
};
