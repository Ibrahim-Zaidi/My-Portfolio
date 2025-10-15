import SPA from "../../Utils/RoutingArray";

function RoutingBtn({
  toggleSwitching,
}: {
  toggleSwitching: (page: string | null) => void;
}) {
  return (
    <>
      {SPA.map((item: string) => (
        <button
          key={item}
          className="text-amber-50 hover:text-blue-200"
          onClick={(e) => toggleSwitching(e.currentTarget.textContent)}
        >
          {item}
        </button>
      ))}
    </>
  );
}

export default RoutingBtn;
