import React, { useState } from 'react';


function TestButton() {
    const [file, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [sesh, setSession] = useState('');
  
    const handleFileChange = (e) => {
        if (e.target.files) {
            setMessage('');
            setSelectedFile(e.target.files[0]);
          }
    };

    const handleUpload = async (event) => {

        if (!file) {
            setMessage('Please select a file.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload-doc', {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              const data = await response.json();
              setSession(data.session_id);
              setMessage('Success!')
            } else {
              // Handle errors
              setMessage('Failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
        
    );
};

export default TestButton;