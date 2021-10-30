/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from '@bigbinary/neetoui/v2';
import { Check } from '@bigbinary/neeto-icons';

const SearchPortal = ({ showSearch, setShowSearch, allArticles }) => {
  useEffect(() => {}, [showSearch]);
  if (!showSearch) return null;
  return ReactDOM.createPortal(
    <Modal isOpen={showSearch} onClose={() => setShowSearch(false)}>
      <Modal.Header>Title</Modal.Header>
      <Modal.Body>Body</Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button icon={Check} label="Continue" onClick={() => setShowSearch(false)} size="large" />
        <Button style="text" label="Cancel" onClick={() => setShowSearch(false)} size="large" />
      </Modal.Footer>
    </Modal>,
    document.body,
  );
};

export default SearchPortal;
