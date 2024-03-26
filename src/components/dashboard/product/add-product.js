import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsSixVerticalBold } from "react-icons/pi";

const AddProduct = () => {
  const [checked, setChecked] = useState(false);
  const [options, setOptions] = useState([
    "Size",
    "Color",
    "Material",
    "Style",
  ]);
  const [optionValues, setOptionValues] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [optionValueInput, setOptionValueInput] = useState("");

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    description: Yup.string().required("Description is required!"),
  });

  const handleAddOption = (option) => {
    setOptions([...options, option]);
    setOptionValues({ ...optionValues, [option]: [] });
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);

    const updatedOptionValues = { ...optionValues };
    delete updatedOptionValues[options[index]];
    setOptionValues(updatedOptionValues);
  };

  const handleAddValue = (option, value) => {
    if (value && !optionValues[option]?.includes(value)) {
      setOptionValues((prevOptionValues) => ({
        ...prevOptionValues,
        [option]: [...(prevOptionValues[option] || []), value],
      }));
      setOptionValueInput(""); // Clear input after adding value
    }
  };

  const handleDeleteValue = (option, index) => {
    const updatedValues = [...optionValues[option]];
    updatedValues.splice(index, 1);
    setOptionValues({ ...optionValues, [option]: updatedValues });
  };

  const handleInputChange = (e) => {
    setOptionValueInput(e.target.value);
  };

  const handleAddOptionValue = () => {
    if (optionValueInput.trim() !== "") {
      handleAddValue(selectedOption, optionValueInput); // Add value
    }
  };

  return (
    <section className="my-8 w-7/12">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={handleAddProduct}
      >
        {({ values }) => (
          <Form>
            <div className="space-y-4">
              <section className="space-y-4 bg-white p-4 shadow rounded">
                <Field
                  placeholder="Title"
                  className="border border-gray rounded block focus:outline-none px-3 py-2 text-sm w-full"
                  type="text"
                  name="title"
                />
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  className="border border-gray rounded block focus:outline-none px-3 py-2 text-sm w-full"
                  type="text"
                  rows={4}
                />
              </section>
              <section className="space-y-4 bg-white p-4 shadow rounded">
                <h1>Options</h1>
                <div className="flex items-center gap-4">
                  <input
                    onClick={() => setChecked(!checked)}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm">
                    This Product has options like size and color
                  </p>
                </div>
                <div className="border-b border-gray"></div>

                {checked && (
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
                        <RiDeleteBin6Line
                          className="cursor-pointer"
                          onClick={() => handleDeleteOption(index)}
                        />
                      </div>
                      <p className="text-sm pl-6 mt-4">Option Values</p>
                      {selectedOption && (
                        <div className="space-y-1">
                          {optionValues[selectedOption]?.map((value, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
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
                                onClick={() =>
                                  handleDeleteValue(selectedOption, index)
                                }
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-2 space-y-1">
                        <div className="w-10/12 flex gap-2 items-center">
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
                        <button
                          type="button"
                          onClick={handleAddOptionValue}
                          className="px-3 py-1 border border-primary text-xs rounded"
                        >
                          Add Value
                        </button>
                      </div>
                    </section>
                  </>
                )}
              </section>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddProduct;
