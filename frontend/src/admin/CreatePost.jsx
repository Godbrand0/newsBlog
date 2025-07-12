import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [previewImages, setPreviewImages] = useState([]);

  const OnSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("snippet", data.snippet);
    formData.append("content", data.content);
    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i]);
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("post creates:", res.data);
      reset();
      setPreviewImages([]);
    } catch (error) {
      console.error("upload failed:", error);
    }
  };

  const handleImagePreview = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };
  return (
    <form
      onSubmit={handleSubmit(OnSubmit)}
      className="max-w-lg mx-auto mt-16 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <div>
        <label className="block mb-1">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm"> {errors.title.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1">Snippet</label>
        <textarea
          {...register("snippet", { required: "Snippet is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.snippet && (
          <p className="text-red-500 text-sm">{errors.snippet.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1"> Content</label>
        <textarea
          {...register("content", { required: "Content is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1">Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          {...register("images")}
          name="images"
          onChange={handleImagePreview}
          className="w-full bg-blue-600 cursor-pointer"
        />
        <div className="mt-2 flex gap-2">
          {previewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`preview ${index}`}
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isSubmitting ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
