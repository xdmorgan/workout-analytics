import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import csv from "csvtojson";
import cx from "classnames";
import { Button } from "./button";

async function convertCSVToJSON(str) {
  const json = await csv({ checkType: true, flatKeys: true }).fromString(str);
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
  onCancel = () => {},
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
        "d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal",
        isDragActive ? "bg-g80" : "bg-g90",
        isDragActive ? "c-g20" : "c-n10"
      )}
      style={{
        position: "relative",
        borderWidth: 2,
        borderStyle: isDragActive ? "solid" : "dashed",
        borderColor: isDragActive ? "var(--color-g50)" : "var(--color-g60)",
        minHeight: 180,
      }}
    >
      <div
        {...getRootProps({
          className: "d-flex w-fill flx-a-c flx-d-c flx-g-1 flx-j-c p-4x",
        })}
      >
        <input {...getInputProps({ accept })} />
        <h1 className="type-h1-xxl mt-0 mb-4x">Add data</h1>
        <div>
          <Button size="large" as="div">
            Select file
          </Button>
        </div>
        <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
          Drag and drop your CSV or click to browse and select from your hard
          drive.
        </p>
      </div>
      <Button
        onClick={onCancel}
        size="small"
        appearance="ghost"
        style={{
          position: "absolute",
          top: "var(--space-1x)",
          right: "var(--space-1x)",
        }}
      >
        <span className="sr-only">Cancel</span>
        <span aria-hidden>&#10005;</span>
      </Button>
    </div>
  );
}
