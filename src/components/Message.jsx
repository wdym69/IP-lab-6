import React from 'react';
import { useLocation } from 'react-router-dom';

const Message = () => {
  const location = useLocation();
  const formData = location.state;
  console.log(formData)
  return (
    <div>
      <h1>Thank You!</h1>
      {formData && (
        <div>
          <p>Thank you, {formData.name}, for your message. We have received the following details:</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
