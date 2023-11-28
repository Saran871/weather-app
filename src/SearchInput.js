import React from 'react';
import { Form } from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ search, onChange }) => {
  return (
    <>
      <Form.Control
        type="text"
        value={search}
        onChange={onChange}
        className="form-control rounded-pill border-0"
        placeholder='Enter your city name'
      />
      {/* <FaSearch  className='text-end position-absolute'/> */}

    </>

  );
};
export default SearchInput
