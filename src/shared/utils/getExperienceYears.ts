const startDate = '2012-09-01';

const getExperienceYears = () => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  return years;
};

export default getExperienceYears;
