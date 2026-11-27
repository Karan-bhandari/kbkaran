const btn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (btn) {
  const isDark = () =>
    root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;

  const syncLabel = () => {
    btn.textContent = isDark() ? "Light" : "Dark";
  };

  syncLabel();
  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    syncLabel();
  });
}
