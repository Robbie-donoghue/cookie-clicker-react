export default function BigCookie({ count, setCount }) {
  return (
    <>
      <img
        className="big-cookie"
        onClick={() => {
          setCount((preCount) => preCount + 1);
          console.log("clicked");
        }}
        src="https://media.gettyimages.com/id/510127065/vector/chocolate-chip-cookie-cartoon.jpg?s=612x612&w=gi&k=20&c=XzJMUgjrPxv67BUsuNwFIhzE4M9yUB7sNJurvuufc_I="
        alt="big cookie"
      />
    </>
  );
}
