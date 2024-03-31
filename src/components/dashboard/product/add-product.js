import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import InputValues from "./input-value";
import { IoAdd } from "react-icons/io5";

const AddProduct = () => {
  const [checked, setChecked] = useState(false);
  const [options, setOptions] = useState([
    "Size",
    "Color",
    "Material",
    "Style",
  ]);
  const [savedOptions, setSavedOptions] = useState([]);

  return (
    <section className="my-8 md:w-11/12">
      <h1 className="text-xl my-4">Add Product Variant</h1>
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
          <section className="px-6 space-y-2">
            {savedOptions.map((item, index) => (
              <div key={index}>
                <span className="text-xs">{item.name}</span>
                <div className="flex items-center gap-1">
                  {item.values?.map((child, index) => (
                    <div className="text-xs bg-secondary rounded-3xl px-2 py-1 font-bold">
                      <span key={index}>{child}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
          {checked && (
            <>
              <InputValues {...{ options, savedOptions, setSavedOptions }} />
            </>
          )}
        </section>
      </div>
    </section>
  );
};

export default AddProduct;
