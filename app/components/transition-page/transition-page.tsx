"use client";
import React, { useEffect, useContext } from "react";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";

function TransitionPage() {
  const contextPreferences = useContext(ContextPreferences!)!;
  const { setLoading, loading } = contextPreferences;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading, setLoading]);

  return (
    <>
      {loading && (
        <>
          <div className="loading1 shadow-snipped"></div>
          <div className="loading2 shadow-snipped"></div>
        </>
      )}
    </>
  );
}

export { TransitionPage };
