// Re-run Mermaid on every page load, including Material's SPA navigation.
document$.subscribe(function () {
  mermaid.initialize({ startOnLoad: false, theme: "base" });
  mermaid.run({ nodes: document.querySelectorAll(".mermaid") });
});
