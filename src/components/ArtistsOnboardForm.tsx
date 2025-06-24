"use client"

import { useFormik } from "formik";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import MultiSelectDropdown from "./MultiSelectDropdown";

import { categories, feeRanges, languages } from "@/data";
import { artistOnboardFormValidator } from "@/validators";

export default function ArtistsOnboardForm() {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      image: null,
    },
    onSubmit: (values, { resetForm }) => {
      console.log("added artist", values);
      resetForm();
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: artistOnboardFormValidator,
  });

  return (
    <form
      className="space-y-8 bg-white p-8 shadow rounded-lg"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <Input
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Artist name"
        />
        <p className="text-sm text-red-600 mt-1">{errors.name}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Bio</label>
        <Textarea
          name="bio"
          value={values.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          placeholder="Tell us about yourself..."
        />
        <p className="text-sm text-red-600 mt-1">{errors.bio}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Service categories</label>
        <MultiSelectDropdown
          title="Select category"
          options={categories.map((cat) => cat.title)}
          onChange={(updated) => setFieldValue("categories", updated)}
          selected={values.categories}
        />
        <p className="text-sm text-red-600 mt-1">{errors.categories}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Languages</label>
        <MultiSelectDropdown
          title="Select language"
          options={languages}
          onChange={(updated) => setFieldValue("languages", updated)}
          selected={values.languages}
        />
        <p className="text-sm text-red-600 mt-1">{errors.languages}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Fee Range</label>
        <Select
          value={values.feeRange}
          onValueChange={(val) => setFieldValue("feeRange", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select fee range" />
          </SelectTrigger>
          <SelectContent>
            {feeRanges.map((f) => (
              <SelectItem key={f.value} value={f.value}>
                {f.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-red-600 mt-1">{errors.feeRange}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Location</label>
        <Input
          name="location"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. Mumbai"
        />
        <p className="text-sm text-red-600 mt-1">{errors.location}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Profile Image (optional)
        </label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFieldValue("image", e.target.files?.[0] || null)}
        />
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
