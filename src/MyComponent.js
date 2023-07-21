import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const animatedComponents = makeAnimated();

const MyComponent = () => {
  const handleSelectChange = (selectedOption) => {
    // Do something with the selected option
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <h3>Select an Option:</h3>
      <Select
        options={options}
        onChange={handleSelectChange}
        components={animatedComponents}
        closeMenuOnSelect={false}
        autofocus={true}
      />
    </div>
  );
};
export default MyComponent;
