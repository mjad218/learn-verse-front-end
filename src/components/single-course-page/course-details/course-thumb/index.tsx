import Image from "next/image";

export const CourseThumbnail = () => {
  return (
    <div className="h-96 w-full overflow-hidden rounded-2xl">
      <Image
        src={"/assets/how-to-be-happy.jpg"}
        width={900}
        height={600}
        alt="Course thumbnail"
        className="block h-full w-full object-cover"
      />
    </div>
  );
};
