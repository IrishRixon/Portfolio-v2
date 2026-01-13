function SkillGroup({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col gap-3 ">
        <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
        <ul className="flex flex-wrap gap-3 sm:gap-4">
          {children}
        </ul>
      </div>
    );
  }

export default SkillGroup;