export const CourseMetaData = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-3 lg:flex-row">
      {/* Just dummy emojis, will get replaced later */}
      <p className="flex w-fit flex-wrap gap-2">
        ⭐⭐⭐⭐⭐ 5.00 stars,
        <span className="w-fit">25 Ratings</span>
      </p>
      <span className="w-fit">1000 Students</span>
    </div>
  );
};
