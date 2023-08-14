import { useEffect, useRef, useState } from "react";
import "./Body.css";
import { uploadFile } from "./services/api";
import { FaCopy } from "react-icons/fa";
import bg_img from './Assets/cloud.png';



function Body() {
  const [file, setFile] = useState("");
  const [result, setresult] = useState("");
  

  const fileinputRef = useRef();

  const onUploadClick = () => {
    fileinputRef.current.click();
  };

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = result;
    document.body.appendChild(textArea);
    textArea.select();
    document.body.removeChild(textArea);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setresult(response.path);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="main-container">
      <div className="centered-border">
        <div className="upload-container">
          <img
            alt="logo"
            className="image-logo"
            // src="https://www.pngall.com/wp-content/uploads/2/Upload.png"
            src={bg_img}
          />
          <h3>👇🏻 Click to upload file 📂</h3>
          <button className="upload-btn" onClick={onUploadClick}>
            Upload File
          </button>
          <input
            type="file"
            ref={fileinputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <p>Upload file to get link to download file Or Share it with other </p>
          <br/>
          <a className="Download-link" href={result}>
            {" "}
            {result}
          </a>
          {result && (
                <button className="copy-button" onClick={handleCopyClick}>
                  {copied ? "Copied!" : <FaCopy />}
                </button>
              )}
        </div>
      </div>
    </div>
  );
}

export default Body;
