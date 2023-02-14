import React from 'react';

const ChooserWrapper = ({chooserName, children}) => {
    return (
        <form className="mb-3">
            <label htmlFor={chooserName + children}>{chooserName}</label>
            <div id={chooserName + children}>
                {children}
            </div>
        </form>
    );
};

export default ChooserWrapper;