import { useRef, useState, useCallback } from "react";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import React from "react";

type UploadButtonProps = {
  onFileUpload: (file: File) => void;
};

const TARGET_TEXT = "Upload CV";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 20;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const UploadButton = ({
  onFileUpload,
}: UploadButtonProps) => {
  const intervalRef = useRef<number | null>(null);

  const [text, setText] =
    useState(TARGET_TEXT);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const scramble = () => {
    let pos = 0;

    intervalRef.current =
      window.setInterval(() => {
        const scrambled =
          TARGET_TEXT.split("")
            .map((char, index) => {
              if (
                pos / CYCLES_PER_LETTER >
                index
              ) {
                return char;
              }

              const randomCharIndex =
                Math.floor(
                  Math.random() *
                    CHARS.length
                );

              return CHARS[
                randomCharIndex
              ];
            })
            .join("");

        setText(scrambled);

        pos++;

        if (
          pos >=
          TARGET_TEXT.length *
            CYCLES_PER_LETTER
        ) {
          stopScramble();
        }
      }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(
        intervalRef.current
      );
    }

    setText(TARGET_TEXT);
  };

  return (
    <div {...getRootProps()}>
  <input {...getInputProps()} />

  <motion.button
    whileHover={{ scale: 1.025 }}
    whileTap={{ scale: 0.975 }}
    onMouseEnter={scramble}
    onMouseLeave={stopScramble}
    className="group relative overflow-hidden rounded-lg border border-neutral-300 bg-white px-4 py-2 font-mono font-medium uppercase text-black transition-colors hover:text-neutral-700"
  >
    <div className="relative z-10 flex items-center gap-2">
      <FiFileText />

      <span>{text}</span>
    </div>

    <motion.span
      initial={{ y: "100%" }}
      animate={{ y: "-100%" }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "linear",
      }}
      className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400 to-60% opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </motion.button>
</div>
  );
};

export default UploadButton;