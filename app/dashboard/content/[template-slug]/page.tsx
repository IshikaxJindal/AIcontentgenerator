"use client";
import React from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const GenerateAIContent = (formData: any) => {
    // Add logic here
  };

  return (
    <div className="p-10">
      {/* Back Button */}
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
