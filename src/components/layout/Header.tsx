import { DarkLightMode } from "./DarkLightMode";

export function Header() {
  return (
    <header className="px-4 py-2">
      <nav className="flex items-center justify-between flex-wrap gap-4">
        <div></div>
        <DarkLightMode />
      </nav>
    </header>
  );
}
