export default function AddToCalendar({ title, description, location, startDate, endDate, children, className="w-full" }) {
  const handleAddToCalendar = () => {
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

    window.open(url, '_blank');
  };

  return (
    <button  type="button" onClick={handleAddToCalendar} className={className}>
      {children}
    </button>
  );
}
