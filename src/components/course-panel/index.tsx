"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Category, NewCourseSchema, NewCourseType } from "@/types/course.type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAccessToken } from "../current-user/context";
import { addSingleCourse } from "@/services/courses/single-course";
import toast from "react-hot-toast";
import SettingsFormButton from "../authentication/_components/SettingFormButton";
import { toBase64 } from "@/lib/utils";
import Select, { MultiValue } from "react-select";
import { redirect } from "next/navigation";

const CoursePanel = ({ categories }: { categories: Category[] }) => {
  const { token } = useAccessToken();
  const { watch, register } = useForm<NewCourseType>({
    resolver: zodResolver(NewCourseSchema),
  });

  const [chosenCategories, setChosenCategories] =
    useState<MultiValue<{ label: string; value: string }>>();

  const optionsArray = categories.map((category) => ({
    label: category.nameEn,
    value: category.code,
  }));

  // const optionsArray = [
  //   {
  //     label: "blabla",
  //     value: "blabla",
  //   },
  //   {
  //     label: "asdfasdf",
  //     value: "asdfasdf",
  //   },
  // ];

  const [image, setImage] = useState<File | null | undefined>(null);
  const data = watch();

  const submitForm = async () => {
    const categoriesValues = chosenCategories?.map(
      (category) => category.value,
    );

    let img: string | ArrayBuffer | null = "";
    try {
      if (image) img = await toBase64(image);
    } catch (e) {
      toast.error("Error adding course");
    }
    console.log({
      img,
    });
    try {
      const res: Response = await addSingleCourse(
        data,
        img,
        categoriesValues,
        token,
      );
      const checkResponse = await res.json();
      console.log(checkResponse);
      toast.success("Course added Successfully");
      redirect("/");
    } catch (e) {}
  };

  return (
    <>
      <span className="font-roboto text-2xl font-semibold">Add Course</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <div className="mx-auto flex h-full max-w-md flex-col gap-6 py-4">
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              type="text"
              placeholder="Enter your course name"
              {...register("courseName")}
            />
            <p className="text-xs text-gray-700/60">Enter your course name.</p>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="course-description">Course Description</Label>
            <Textarea
              placeholder="Enter your course description"
              id="course-description"
              {...register("description")}
            />
            <p className="text-xs text-gray-700/60">
              Provide a description that is both attractive and concise.
            </p>
          </div>
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="picture">Course Banner</Label>
            <Input
              id="picture"
              type="file"
              onChange={(e) =>
                setImage(e.target?.files?.length ? e.target?.files[0] : null)
              }
              className="file:cursor-pointer file:rounded-md file:bg-gray-800 file:text-white hover:cursor-pointer"
            />
            <p className="text-xs text-gray-700/60">
              Make sure to include a high-quality Image.
            </p>
          </div>
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="course-name">Course Price</Label>
            <Input
              id="course-price"
              type="number"
              placeholder="Enter your course price"
              {...register("price")}
            />
          </div>
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="course-categories">Course Categories</Label>
            <Select
              isClearable={true}
              isMulti={true}
              options={optionsArray}
              onChange={(e) => setChosenCategories(e)}
            />
          </div>
          <div className="mx-auto">
            <SettingsFormButton className="w-full self-center text-black disabled:border-gray-500">
              Submit
            </SettingsFormButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default CoursePanel;
