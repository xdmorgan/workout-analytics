import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import csv from "csvtojson";

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
  const onDrop = useCallback((acceptedFiles) => {
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
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="d-flex bg-n70 h-fill" style={{ minHeight: "100vh" }}>
      <div {...getRootProps({ className: "d-flex flx-a-c flx-g-1 flx-j-c" })}>
        <input {...getInputProps({ accept })} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}
