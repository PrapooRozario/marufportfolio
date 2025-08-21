"use client";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "@tanstack/react-form";
const Contact = () => {
  interface ContactInput {
    name: string;
    email: string;
    message: string;
  }

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    } as ContactInput,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="contact-bg rounded-3xl min-h-[500px] px-4 md:px-8 lg:px-12 py-12 mb-6">
      <Text variant="h2" font="ador" className="font-semibold text-center">
        আমার সাথে যোগাযোগ করুন
      </Text>
      <Text variant="h4" font="ador" className="text-center mb-8">
        আমি সর্বদা নতুন সুযোগ এবং সহযোগিতার জন্য উন্মুক্ত। আসুন একসাথে কাজ করি।
      </Text>

      <form
        className="max-w-3xl mx-auto"
        onSubmit={(e) => (e.preventDefault(), form.handleSubmit())}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
          <form.Field name="name">
            {(field) => (
              <Input
                type="text"
                name="name"
                placeholder="নাম"
                className="rounded-3xl bg-3/50 shadow-none p-6 w-full"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>
          <form.Field name="email">
            {(field) => (
              <Input
                type="email"
                placeholder="ইমেইল"
                className="rounded-3xl bg-3/50 shadow-none p-6 w-full"
              />
            )}
          </form.Field>
        </div>

        <Textarea
          placeholder="আপনার বার্তা"
          className="rounded-3xl bg-3/50 shadow-none p-6 h-48 md:h-60 w-full"
        />

        <Button
          text="Submit"
          variant="primary"
          font="inter"
          className="mt-4 w-full rounded-3xl"
        />
      </form>
    </div>
  );
};

export default Contact;
