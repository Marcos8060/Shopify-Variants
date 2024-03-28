import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { Formik, Field, Form } from "formik";

const InputValues = (props) => {
  const {
    options,
    handleSaveOptions,
    handleAddOptionValue,
    handleInputChange,
    handleDeleteValue,
    selectedOption,
    setSelectedOption,
    optionValueInput,
    optionValues
  } = props;
  return (
    <>
      <section>
        <p className="text-sm pl-6">Option Name</p>
        <div className="flex items-center gap-2">
          <PiDotsSixVerticalBold />
          <Field
            as="select"
            className="border border-gray rounded block focus:outline-none px-3 py-2 text-sm w-full"
            type="text"
            name="option"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select Option</option>
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Field>
        </div>
        <p className="text-sm pl-6 mt-4">Option Values</p>
        {selectedOption && (
          <div className="space-y-1">
            {optionValues[selectedOption]?.map((value, index) => (
              <div key={index} className="flex items-center gap-2">
                <PiDotsSixVerticalBold />
                <Field
                  placeholder="Option Value"
                  className="border border-gray rounded block focus:outline-none px-3 py-2 text-sm w-full"
                  type="text"
                  name={`optionValue${index}`}
                  value={value}
                  disabled
                />
                <RiDeleteBin6Line
                  className="cursor-pointer"
                  onClick={() => handleDeleteValue(selectedOption, index)}
                />
              </div>
            ))}
          </div>
        )}
        <section className="flex items-center gap-2 my-1">
          <div className="w-11/12 flex gap-2 items-center">
            <PiDotsSixVerticalBold />
            <Field
              placeholder="Option Value"
              className="border border-gray rounded block focus:outline-none px-3 py-2 text-sm w-full"
              type="text"
              name="optionValue"
              value={optionValueInput}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleAddOptionValue}
              className="px-3 py-1 border border-primary text-sm rounded flex items-center gap-1"
            >
              <IoMdAdd />
              Add
            </button>
          </div>
        </section>
        <section className="pl-6">
          <button
            type="button"
            onClick={handleSaveOptions}
            className="px-3 py-1 bg-primary text-white text-sm rounded flex items-center gap-1"
          >
            Save
          </button>
        </section>
      </section>
    </>
  );
};

export default InputValues;
