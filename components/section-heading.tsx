const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center dark:text-sky-400">
      {children}
    </h2>
  );
};

export default SectionHeading;
