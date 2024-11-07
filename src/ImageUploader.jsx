import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(null);

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  const REPO_OWNER = 'jos556';
  const REPO_NAME = 'upload_image';

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setMessage('');
      // Create preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    } else {
      setMessage('Please select an image file');
      setFile(null);
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first!');
      return;
    }

    setUploading(true);
    setMessage('Uploading...');

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

      try {
        const response = await axios.put(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/public/${file.name}`,
          {
            message: `Add image: ${file.name}`,
            content: base64String,
          },
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setMessage('Upload successful!');
        console.log('File uploaded:', response.data);
      } catch (error) {
        setMessage(`Upload failed: ${error.message}`);
        console.error('Error uploading file:', error);
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="uploader-container">
      <div className="upload-box">
        <div className="upload-area">
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept="image/*"
            disabled={uploading}
            id="file-input"
            className="file-input"
          />
          <label htmlFor="file-input" className="file-label">
            {preview ? (
              <img src={preview} alt="Preview" className="image-preview" />
            ) : (
              <>
                <span className="upload-icon">📁</span>
                <span>Drag and drop your image here or click to browse</span>
              </>
            )}
          </label>
        </div>
        
        <button 
          onClick={handleUpload} 
          disabled={!file || uploading}
          className={`upload-button ${uploading ? 'uploading' : ''}`}
        >
          {uploading ? 'Uploading...' : 'Upload to Gallery'}
        </button>
        
        {message && (
          <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;