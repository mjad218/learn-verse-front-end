"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { NewCourseSchema, NewCourseType } from "@/types/course.type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

const CoursePanel = () => {
  const { handleSubmit, register } = useForm<NewCourseType>({
    resolver: zodResolver(NewCourseSchema),
  });

  const submitForm = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <span className="font-roboto text-2xl font-semibold">Add Course</span>
      <form onSubmit={() => handleSubmit(submitForm)}>
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
              className="file:cursor-pointer file:rounded-md file:bg-gray-800 file:text-white hover:cursor-pointer"
              {...register("image")}
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
          <div className="mx-auto">
            <Button
              type="submit"
              className={"self-center text-black disabled:border-gray-500"}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CoursePanel;
