"use client";
import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (data: any) => void;
}

function FormSection({ selectedTemplate, userFormInput }: PROPS) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* Icon */}
      {selectedTemplate?.icon && <img src={selectedTemplate.icon} alt="icon" width={70} height={70} />}

      {/* Template Name and Description */}
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      {/* Form */}
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}

        <Button type="submit" className="w-full py-6">
          Generate content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
