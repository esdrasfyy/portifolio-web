"use client";
import React, { useEffect, useState } from "react";

function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const animateMe = (e: any) => {
    const span = e.currentTarget.querySelector(".animation-transform");
    const {
      offsetX,
      offsetY,
      target: { offsetWidth, offsetHeight },
    } = e;

    const move = 20;
    const xMove = (offsetX / offsetWidth) * (move * 2) - move;
    const yMove = (offsetY / offsetHeight) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e: any) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".animated");
    const cursor = document.querySelector(".cursor");

    links.forEach((link) => {
      link.addEventListener("mousemove", animateMe);
      link.addEventListener("mouseleave", animateMe);
    });

    window.addEventListener("mousemove", editCursor);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mousemove", animateMe);
        link.removeEventListener("mouseleave", animateMe);
      });
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);
  return (
    <span className="cursor" style={{ left: x + "px", top: y + "px" }}></span>
  );
}

export { Cursor };