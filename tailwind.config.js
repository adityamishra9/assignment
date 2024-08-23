/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "regal-gray": "#EBEDF0",
        "hover-blue": "#77ABF9",
        "right-back": "#F2F4F7",
        "hoverRight-back": "#C3D9FA",
        customGray: "#344054",
        rSideExpand: "#0F49A0",
        runReportButton: "#0F49A0",
      },
    },
  },
  plugins: [],
};
