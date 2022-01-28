import React from "react";

export const Input = ({ label, onFocus, onBlur, className, leftButton=null,haslabel=false,placeholder,type="text",name }) => {
  return (
    <div className="float-input-container border-base-100 group my-3">
      <input
        className={`float-input ${className}`}
        placeholder={haslabel ? "" : placeholder}
        type={type}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <label for={name} className={`float-input-label ${haslabel ? "block" : "hidden"} z-0`}>
        {label}
      </label>
      <button className={`left-btn ${leftButton ? "flex" : "hidden"} `}>
        {leftButton}
      </button>
    </div>
  );
};
