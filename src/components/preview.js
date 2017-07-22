import React from 'react';
const width = { width: '50%' };

const Preview = (props) => {
  return (
    <div className="col-md-6 well">
      <div dangerouslySetInnerHTML={{ __html: props.text }}>
      </div>
    </div>
  );
};

export default Preview;
