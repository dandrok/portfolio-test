const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "12-03-2018";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);

tippy("#myButton", {
  content: "'When something is simple, it is very easy to understand or to do'",
  placement: "bottom", // or 'left', 'right', ...
  arrow: true,
  arrowType: "sharp", // or 'sharp' (default)
  animation: "perspective",
  delay: 400,
});
