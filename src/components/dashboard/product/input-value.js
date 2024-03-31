import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PiDotsSixVerticalBold } from "react-icons/pi";

const InputValues = ({ options, savedOptions, setSavedOptions }) => {
  const [optionValues, setOptionValues] = useState([""]);

  const initialValues = {
    option: "",
    optionValues: optionValues,
  };

  const validationSchema = Yup.object().shape({
    option: Yup.string().required("Option Name is required"),
    optionValues: Yup.array()
      .of(Yup.string().required("Option Value is required"))
      .required("At least one Option Value is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { option, optionValues } = values;

    const existingOption = savedOptions.find((opt) => opt.name === option);

    if (existingOption) {
      setSavedOptions((prevOptions) =>
        prevOptions.map((opt) =>
          opt.name === option
            ? { ...opt, values: [...opt.values, ...optionValues] }
            : opt
        )
      );
    } else {
      setSavedOptions((prevOptions) => [
        ...prevOptions,
        { name: option, values: optionValues },
      ]);
    }

    resetForm();
    setOptionValues([""]); // Reset optionValues state
  };

  const handleFocus = () => {
    // Check if the last option value field is focused
    if (document.activeElement === document.getElementById("optionValue-" + (optionValues.length - 1))) {
      // Add another empty string to the optionValues array
      setOptionValues(prevValues => [...prevValues, ""]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <section>
            <p className="text-sm pl-6">Option Name</p>
            <div className="flex items-center gap-2">
              <PiDotsSixVerticalBold />
              <Field
                as="select"
                className="border border-gray rounded block focus:outline-none px-3 py-2 text-sm w-full"
                name="option"
              >
                <option value="">Select Option</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage
              name="option"
              component="div"
              className="text-red font-bold text-xs pl-6"
            />

            <p className="text-sm pl-6 mt-4">Option Values</p>
            <div className="space-y-1">
              {optionValues.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div>
                    <PiDotsSixVerticalBold />
                  </div>
                  <div className="w-full">
                    <Field
                      id={"optionValue-" + index}
                      onFocus={handleFocus}
                      placeholder="Option Value"
                      className="border border-gray rounded block focus:outline-none px-3 py-2 text-xs w-full"
                      type="text"
                      name={`optionValues[${index}]`}
                    />
                    <ErrorMessage
                      name={`optionValues[${index}]`}
                      component="div"
                      className="text-red font-bold text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>

            <section className="pl-6 my-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-3 py-1 bg-primary text-white text-sm rounded flex items-center gap-1"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </section>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default InputValues;
