import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import csv from "csvtojson";
import cx from "classnames";

async function convertCSVToJSON(str) {
  const json = await csv({ checkType: true }).fromString(str);
  return json;
}

/** Select a file with react-dropzone then read into memory using FileReader */
export function FileLoader({
  /** Invoked after FileReader() has loaded file selected via dropzone */
  onLoad = () => {},
  /** Invoked after failure of FileReader() to load file selected via dropzone or a failure to parse the loaded CSV as JSON */
  onError = () => {},
  /** Invoked after abort of FileReader() to load file selected via dropzone */
  onAbort = () => {},
  /** See react-dropzone `accept` (mime-type) documentation */
  accept,
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = onAbort;
        reader.onerror = onError;
        reader.onload = async () => {
          await convertCSVToJSON(reader.result)
            .then(onLoad)
            .catch(onError);
        };
        reader.readAsText(file);
      });
    },
    [onLoad, onError, onAbort]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={cx(
        "d-flex rc-small w-fill",
        isDragActive ? "bg-g70" : "bg-n70"
      )}
      style={{
        borderWidth: 2,
        borderStyle: isDragActive ? "solid" : "dashed",
        borderColor: isDragActive ? "var(--color-g60)" : "var(--color-n60)",
        maxWidth: 420,
        minHeight: 180,
      }}
    >
      <div
        {...getRootProps({
          className: "d-flex flx-a-c flx-g-1 flx-j-c px-4x py-3x",
        })}
      >
        <input {...getInputProps({ accept })} />
        <div className="child-my-0 c-n40">
          <p>Drag and drop or click to browse</p>
        </div>
      </div>
    </div>
  );
}
