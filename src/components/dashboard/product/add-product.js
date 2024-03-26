import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import InputValues from "./input-value";

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
  const [savedOptionValues, setSavedOptionValues] = useState([]); // Array to store saved option values
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

  const handleSaveOptions = () => {
    // Combine all option values into a single array and save
    const values = Object.values(optionValues).flat();
    setSavedOptionValues(values);
  };

  return (
    <section className="my-8 w-7/12">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
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
                    <div className="flex items-center gap-1 pl-6">
                      {savedOptionValues.map((item, index) => (
                        <span className="text-xs bg-primary text-white rounded-3xl px-2 py-1" key={index}>{item}</span>
                      ))}
                    </div>
                    <InputValues
                      {...{
                        options,
                        handleDeleteOption,
                        handleSaveOptions,
                        handleAddOptionValue,
                        handleInputChange,
                        handleDeleteValue,
                        handleAddOption,
                        selectedOption,
                        setSelectedOption,
                        optionValueInput,
                        setOptionValueInput,
                        optionValues,
                      }}
                    />
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
