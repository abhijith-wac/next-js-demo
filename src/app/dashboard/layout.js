import Navigation from "../components/navigation/Navigation";

export default function DashBoardLayout({ children }) {
  return (
    <div>
      <header>
        <Navigation></Navigation>
      </header>
      <section>{children}</section>
    </div>
  );
}
