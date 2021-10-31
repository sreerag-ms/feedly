/* eslint-disable react/style-prop-object */
import React from 'react';
import { Formik, Form } from 'formik';
import { Modal, Button } from '@bigbinary/neetoui/v2';
import PropTypes from 'prop-types';
import dummyPost from 'apis/dummyPost';
import { Input as FormikInput } from '@bigbinary/neetoui/v2/formik';
import Wallpaper from 'images/orange.png';
// eslint-disable-next-line import/no-unresolved
import formValidationSchema from 'constants/formValidationSchema';

const Subscription = ({ showSubscription, setShowSubscription }) => {
  const handleSubmit = async (values) => {
    try {
      await dummyPost.send(values);
    } catch (err) {
      console.log(err.message);
    }
    setShowSubscription(false);
  };

  return (
    <Modal size="xs" isOpen={showSubscription} onClose={() => setShowSubscription(false)}>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={formValidationSchema.subscription}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Modal.Header>
                <div className="flex flex-col">
                  <img src={Wallpaper} alt="Oranges.jpg" />
                  <div className="text-2xl font-semibold my-5">Subscribe to Feed.ly</div>
                  <div>We dont spam, We deliver the latest news in short. </div>
                </div>
              </Modal.Header>
              <Modal.Body className="w-full">
                <div className="w-full flex flex-col ">
                  <FormikInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="example@email.com"
                  />
                </div>
              </Modal.Body>
              <Modal.Footer className="space-x-2">
                <Button
                  type="submit"
                  label="Sign Up"
                  size="large"
                  style="primary"
                  className="ml-2"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
                <Button
                  style="text"
                  label="Cancel"
                  onClick={() => setShowSubscription(false)}
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
Subscription.propTypes = {
  showSubscription: PropTypes.bool.isRequired,
  setShowSubscription: PropTypes.func.isRequired,
};
export default Subscription;
