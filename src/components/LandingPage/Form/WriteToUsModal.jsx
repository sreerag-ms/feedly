/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import { Modal, Button, Input } from '@bigbinary/neetoui/v2';
import { Formik, Form } from 'formik';
import { Textarea, Input as FormikInput } from '@bigbinary/neetoui/v2/formik';

import * as Yup from 'yup';
import React from 'react';
import PropTypes from 'prop-types';
import { Check } from '@bigbinary/neeto-icons';
import dummyPost from 'apis/dummyPost';
// eslint-disable-next-line import/no-unresolved
import formValidationSchema from 'constants/formValidationSchema';

const WriteToUsModal = ({ showWriteToUs, setShowWriteToUs }) => {
  const handleSubmit = async (values) => {
    try {
      const resp = await dummyPost.send(values);
    } catch (err) {
      console.log(err);
    }
    setShowWriteToUs(false);
  };

  return (
    <Modal size="md" isOpen={showWriteToUs} onClose={() => setShowWriteToUs(false)}>
      <Formik
        initialValues={{
          name: '',
          response: '',
          email: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={formValidationSchema.writeToUs}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Modal.Header>
                <div className="">
                  <div className="text-2xl font-semibold">Cant find what you came for?</div>
                </div>
              </Modal.Header>
              <Modal.Body className="w-full">
                <div className="w-full ">
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between my-6">
                      <div className="w-1/2 pr-2">
                        <FormikInput id="name" label="Name" name="name" placeholder="Enter Name" />
                      </div>
                      <div className="w-1/2">
                        <FormikInput
                          name="email"
                          type="email"
                          label="Email"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea name="response" label="Response" placeholder="Enter text" />
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="space-x-2">
                <Button
                  icon={Check}
                  type="submit"
                  label="Submit"
                  size="large"
                  style="primary"
                  className="ml-2"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
                <Button
                  style="text"
                  label="Cancel"
                  onClick={() => setShowWriteToUs(false)}
                  size="large"
                />
              </Modal.Footer>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
WriteToUsModal.propTypes = {
  showWriteToUs: PropTypes.bool.isRequired,
  setShowWriteToUs: PropTypes.func.isRequired,
};
export default WriteToUsModal;
