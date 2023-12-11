import { LoadingContext } from "@/global-context";
import React, { useContext, useEffect } from "react";

export default function PageContents({ page }: { page: number }) {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>Page {page}</h1>
      <hr />
      <span
        onClick={() => {
          setLoading(true);
          window.location.href = `/page${page === 1 ? 2 : 1}/`;
          window.onunload = () => {};
        }}
      >
        go to page {page === 1 ? 2 : 1}
      </span>
      {loading && <div>loading...</div>}
    </div>
  );
}
