const tab = localStorage.getItem("tab");
const tabData = tab ? JSON.parse(tab) : {};

if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  const faviconLink = document.querySelector("link[rel='icon']");
  faviconLink.href = tabData.icon;
}

const storageKey = "selectedTheme";

let selectedTheme = localStorage.getItem(storageKey);

if (!selectedTheme) {
  selectedTheme = "default";
  document.body.setAttribute("data-theme", selectedTheme);
  localStorage.setItem(storageKey, selectedTheme);
} else {
  document.body.setAttribute("data-theme", selectedTheme);
}

const style = document.createElement("style");
style.textContent = `
  ::-webkit-scrollbar {
    width: 15px;
    background: var(--theme);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
    background: var(--theme);
  }
`;
document.head.appendChild(style);
