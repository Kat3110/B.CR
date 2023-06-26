import React from "react";

export const pageBtnGenerator = (page, pageLength, handlePage) => {
  const pageArr = new Array(pageLength).fill(0).map((_, i) => ({
    page: i + 1,
    active: i + 1 === page,
  }));
  const currentPage = Math.floor(page / 5);

  return pageArr.slice(currentPage * 5, (currentPage + 1) * 5).map((item) => (
    <span
      key={item.page}
      className={item.active ? "pagination__number-active" : undefined}
      onClick={() => handlePage("page", item.page)}
    >
      {item.page}
    </span>
  ));
};
