
const form = document.getElementById("carbonForm");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");
const totalDisplay = document.getElementById("total");
const advice = document.getElementById("advice");
const resetBtn = document.getElementById("resetBtn");

nextBtn.addEventListener("click", function () {
  const hours = Number(document.getElementById("hours").value);

  if (
    document.getElementById("hours").value === "" ||
    hours < 0 ||
    hours > 168
  ) {
    alert("Please enter travel hours between 0 and 168.");
    return;
  }

  step1.classList.add("d-none");
  step2.classList.remove("d-none");

  progressBar.style.width = "100%";
  progressBar.textContent = "Step 2 of 2";

  step2.scrollIntoView({ behavior: "smooth", block: "start" });
});

backBtn.addEventListener("click", function () {
  step2.classList.add("d-none");
  step1.classList.remove("d-none");

  progressBar.style.width = "50%";
  progressBar.textContent = "Step 1 of 2";

  step1.scrollIntoView({ behavior: "smooth", block: "start" });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const transport = Number(
    document.getElementById("transport").value
  );

  const hours = Number(
    document.getElementById("hours").value
  );

  const electricity = Number(
    document.getElementById("electricity").value
  );

  const diet = Number(
    document.getElementById("diet").value
  );

  const waste = Number(
    document.getElementById("waste").value
  );

  if (
    document.getElementById("hours").value === "" ||
    hours < 0 ||
    hours > 168
  ) {
    alert("Please enter valid travel hours.");
    return;
  }

  const transportationEmissions = transport * hours;
  const weeklyFootprint =
    transportationEmissions + electricity + diet + waste;

  const roundedTotal = Math.round(weeklyFootprint * 10) / 10;

  totalDisplay.textContent = roundedTotal.toFixed(1);

  if (roundedTotal < 20) {
    advice.textContent =
      "Great effort! Keep making planet-friendly choices and continue reducing your impact.";
  } else if (roundedTotal < 35) {
    advice.textContent =
      "There is room to improve. Try saving electricity, reducing waste, and choosing cleaner transport.";
  } else {
    advice.textContent =
      "Consider making more sustainable choices, such as reducing car travel, saving energy, and recycling.";
  }

  result.classList.remove("d-none");
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});

resetBtn.addEventListener("click", function () {
  form.reset();

  step2.classList.add("d-none");
  step1.classList.remove("d-none");
  result.classList.add("d-none");

  progressBar.style.width = "50%";
  progressBar.textContent = "Step 1 of 2";

  document.getElementById("hours").value = 5;

  document.getElementById("calculator").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
