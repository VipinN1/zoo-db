import React, { useState } from 'react';
import './AddEnclosureForm.css'; // Import CSS file for styling

const AddEnclosureForm = () => {
  const [enclosureInfo, setEnclosureInfo] = useState({
    enclosureId: '',
    name: '',
    enclosureType: '',
    buildDate: '',
    address: '',
    cleaningStartTime: '',
    cleaningEndTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnclosureInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the enclosureInfo to the backend
    console.log('Enclosure info submitted:', enclosureInfo);
    // Reset form after submission
    setEnclosureInfo({
      enclosureId: '',
      name: '',
      enclosureType: '',
      buildDate: '',
      address: '',
      cleaningStartTime: '',
      cleaningEndTime: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="enclosure-form">
      <label>
        Enclosure ID:
        <input
          type="text"
          name="enclosureId"
          value={enclosureInfo.enclosureId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={enclosureInfo.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enclosure Type:
        <input
          type="text"
          name="enclosureType"
          value={enclosureInfo.enclosureType}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Build Date:
        <input
          type="text"
          name="buildDate"
          value={enclosureInfo.buildDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={enclosureInfo.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Cleaning Start Time:
        <input
          type="text"
          name="cleaningStartTime"
          value={enclosureInfo.cleaningStartTime}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Cleaning End Time:
        <input
          type="text"
          name="cleaningEndTime"
          value={enclosureInfo.cleaningEndTime}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddEnclosureForm;
