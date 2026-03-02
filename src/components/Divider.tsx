const Divider = ({ icon = "❋" }: { icon?: string }) => (
  <div className="divider">
    <span className="text-maroon text-sm" style={{ color: "#7B1C35", fontSize: "18px" }}>{icon}</span>
  </div>
);

export default Divider;

