function Skill({
    icon,
    label,
  }: {
    icon: string;
    label: string;
  }) {
    return (
      <li
        className="
          flex items-center
          gap-3
          px-4 py-2
          rounded-xl
          backdrop-blur-2xl
          shadow-2xl
        "
      >
        {icon !== "" && <img
          className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          src={icon}
          alt={label}
        />}
        <p className="text-sm sm:text-lg">{label}</p>
      </li>
    );
  }

  export default Skill;