"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import characterMatrix from "@/constants/characterMatrixLib";
import clsx from "clsx";

type Props = {};

const createRandomMatrix = () => {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 9 }, () => (Math.random() >= 0.5 ? 1 : 0))
  );
};

const LedMatrix = ({
  character,
  delay,
}: {
  character: string;
  delay: number;
}) => {
  // Initialize the matrix with random boolean values
  const emptyMatrix = Array.from({ length: 9 }, () =>
    Array.from({ length: 7 }, () => 0)
  );
  const targetMatrix = characterMatrix[character.toUpperCase()] ?? emptyMatrix;

  const [matrix, setMatrix] = useState(emptyMatrix);
  const [cursor, setCursor] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prevCursor) => {
        let { row, col } = prevCursor;

        const newMatrix = [...matrix];

        // Update the matrix based on the cursor position
        newMatrix[row][col] = targetMatrix[row][col];

        col++;
        if (col >= 7) {
          col = 0;
          row++;
        }
        setMatrix(newMatrix);

        if (row >= 9) {
          clearInterval(interval);
          return { row: -1, col: -1 }; // Stop the animation
        }
        return { row, col };
      });
    }, delay); // Adjust the speed of the cursor movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-7 gap-[2px]">
      {matrix.map((row, i) => {
        return row.map((col, j) => {
          const isCursorHere = i === cursor.row && j === cursor.col;
          const isActive = col || isCursorHere;
          return (
            <motion.div
              key={`${i}-${j}`}
              className={`w-full aspect-square led-light  ${
                isActive ? "bg-black/70" : "bg-[#e9e9e9]"
              }`}
              whileHover={{ backgroundColor: "#ffffff" }}
              initial={{ backgroundColor: "#e9e9e9" }}
              animate={{
                backgroundColor: isActive ? "rgba(0,0,0,0.7)" : "#e9e9e9",
              }}
              transition={{ duration: 0.1 }}
            ></motion.div>
          );
        });
      })}
    </div>
  );
};

const LedGrid = ({
  value,
  gridStyle,
  delay,
}: {
  value: string;
  gridStyle: string;
  delay: number;
}) => {
  return (
    <div className={clsx("grid gap-1 md:gap-3 w-full", gridStyle)}>
      {value.split("").map((char, i) => (
        <LedMatrix character={char} key={`matrix-${i}`} delay={delay} />
      ))}
    </div>
  );
};

export default LedGrid;
