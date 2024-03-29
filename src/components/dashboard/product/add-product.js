import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import InputValues from "./input-value";
import { IoAdd } from "react-icons/io5";

const AddProduct = () => {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([
    { name: "Size", values: [] },
    { name: "Color", values: [] },
    { name: "Material", values: [] },
    { name: "Style", values: [] },
  ]);

  // Initialize optionValues object with an empty array for each option
  const initialOptionValues = options.reduce((acc, option) => {
    acc[option.name] = [];
    return acc;
  }, {});

  const [optionValues, setOptionValues] = useState(initialOptionValues);

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    description: Yup.string().required("Description is required!"),
  });

  const handleAddOption = () => {
    setOptions([...options, { name: "", values: [] }]);
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleOptionNameChange = (index, name) => {
    const updatedOptions = [...options];
    updatedOptions[index].name = name;
    setOptions(updatedOptions);
  };

  const handleAddOptionValue = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index].values.push(value);
    setOptions(updatedOptions);
    setOptionValues((prevOptionValues) => ({
      ...prevOptionValues,
      [selectedOption]: [...prevOptionValues[selectedOption], value],
    }));
  };

  const handleDeleteOptionValue = (index, valueIndex) => {
    const updatedOptions = [...options];
    updatedOptions[index].values.splice(valueIndex, 1);
    setOptions(updatedOptions);
    setOptionValues((prevOptionValues) => ({
      ...prevOptionValues,
      [selectedOption]: prevOptionValues[selectedOption].filter(
        (_, idx) => idx !== valueIndex
      ),
    }));
  };

  return (
    <section className="my-8 w-7/12">
        <h1 className="text-xl my-4">Add Product Variant</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ values }) => (
          <Form>
            <div className="space-y-4">
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
                    {options.map((option, index) => (
                      <InputValues
                       options={options}
                       selectedOption={selectedOption}
                       setSelectedOption={setSelectedOption}
                       optionValues={optionValues} // Pass optionValues to InputValues
                        key={index}
                        name={option.name}
                        values={option.values}
                        handleOptionNameChange={(name) =>
                          handleOptionNameChange(index, name)
                        }
                        handleAddOptionValue={(value) =>
                          handleAddOptionValue(index, value)
                        }
                        handleDeleteOptionValue={(valueIndex) =>
                          handleDeleteOptionValue(index, valueIndex)
                        }
                        handleDeleteOption={() => handleDeleteOption(index)}
                      />
                    ))} 
                  </>
                )}

                <section>
                  <div
                    onClick={handleAddOption}
                    className="flex items-center gap-2 text-blue-600 text-sm cursor-pointer"
                  >
                    <IoAdd />
                    <p>Add another option</p>
                  </div>
                </section>
              </section>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddProduct;
