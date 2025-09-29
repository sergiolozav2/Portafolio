const STORAGE_KEY = "showcase-mobile-profiles-v1";
const LAST_PROFILE_KEY = "showcase-mobile-profiles-last";

const PLACEHOLDER_IMAGES = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='740'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2338bdf8'/%3E%3Cstop offset='100%25' stop-color='%2317253b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g1)'/%3E%3Cg fill='%23ffffff' font-family='Inter,Arial,sans-serif' text-anchor='middle'%3E%3Ctext x='50%25' y='46%25' font-size='56'%3EMobile%3C/text%3E%3Ctext x='50%25' y='54%25' font-size='42' opacity='0.72'%3EPreview%201%3C/text%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='740'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f97316'/%3E%3Cstop offset='100%25' stop-color='%23142530'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g2)'/%3E%3Cg fill='%23ffffff' font-family='Inter,Arial,sans-serif' text-anchor='middle'%3E%3Ctext x='50%25' y='46%25' font-size='56'%3EMobile%3C/text%3E%3Ctext x='50%25' y='54%25' font-size='42' opacity='0.72'%3EPreview%202%3C/text%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='740'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%2311222f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g3)'/%3E%3Cg fill='%23ffffff' font-family='Inter,Arial,sans-serif' text-anchor='middle'%3E%3Ctext x='50%25' y='46%25' font-size='56'%3EMobile%3C/text%3E%3Ctext x='50%25' y='54%25' font-size='42' opacity='0.72'%3EPreview%203%3C/text%3E%3C/g%3E%3C/svg%3E",
];

const defaultSettings = {
  background: "linear-gradient(135deg, #1f2937, #0f172a)",
  backgroundColor: "#1f2937",
  scale: 1,
  gap: 48,
  alignment: "flat",
  alignmentOffset: 26,
  shadow: "0 60px 80px rgba(15, 23, 42, 0.45)",
  images: [...PLACEHOLDER_IMAGES],
};

const showcase = document.getElementById("showcase");
const phoneList = document.getElementById("phoneList");
const phoneFigures = Array.from(phoneList.querySelectorAll(".phone"));
const phoneImages = phoneFigures.map((figure) => figure.querySelector("img"));

const controls = document.getElementById("controls");
const openControlsButton = document.getElementById("openControlsButton");
const closeControlsButton = document.getElementById("closeControlsButton");
const controlsForm = document.getElementById("controlsForm");

const backgroundColorInput = document.getElementById("backgroundColor");
const backgroundStringInput = document.getElementById("backgroundString");
const phoneScaleInput = document.getElementById("phoneScale");
const phoneGapInput = document.getElementById("phoneGap");
const alignmentSelect = document.getElementById("alignment");
const alignmentOffsetInput = document.getElementById("alignmentOffset");
const shadowInput = document.getElementById("shadow");

const scaleValueOutput = document.getElementById("scaleValue");
const gapValueOutput = document.getElementById("gapValue");
const alignmentOffsetOutput = document.getElementById("alignmentOffsetValue");

const profileSelect = document.getElementById("profileSelect");
const profileNameInput = document.getElementById("profileName");
const newProfileButton = document.getElementById("newProfileButton");
const saveProfileButton = document.getElementById("saveProfileButton");
const loadProfileButton = document.getElementById("loadProfileButton");
const deleteProfileButton = document.getElementById("deleteProfileButton");

const imagePicker = document.getElementById("imagePicker");

let profiles = loadProfilesFromStorage();
let currentSettings = cloneSettings(defaultSettings);
let currentProfileId = null;
let pendingImageIndex = null;

function init() {
  hydratePhoneImages(currentSettings.images);
  applySettingsToDom(currentSettings);
  applySettingsToInputs(currentSettings);
  if (!profileNameInput.placeholder) {
    const seed = generateProfileId();
    profileNameInput.dataset.seed = seed;
    profileNameInput.placeholder = seed;
  }
  connectEventListeners();
  hydrateProfileSelect();
  const lastProfileId = localStorage.getItem(LAST_PROFILE_KEY);
  if (lastProfileId && profiles[lastProfileId]) {
    loadProfile(lastProfileId);
  } else if (Object.keys(profiles).length === 0) {
    saveProfile(generateProfileId(), "Default profile", currentSettings);
    hydrateProfileSelect();
  }
}

function connectEventListeners() {
  document.addEventListener("keydown", handleGlobalShortcut);
  openControlsButton.addEventListener("click", openControls);
  closeControlsButton.addEventListener("click", closeControls);

  controlsForm.addEventListener("submit", (event) => event.preventDefault());

  backgroundColorInput.addEventListener("input", () => {
    const color = backgroundColorInput.value || defaultSettings.backgroundColor;
    currentSettings.backgroundColor = color;
    currentSettings.background = color;
    applySettingsToDom(currentSettings);
    backgroundStringInput.value = currentSettings.background;
    backgroundColorInput.value = currentSettings.backgroundColor;
  });

  backgroundStringInput.addEventListener("input", () => {
    const value = backgroundStringInput.value.trim();
    if (!value) {
      currentSettings.background = defaultSettings.background;
    } else {
      currentSettings.background = value;
    }
    const detectedColor = tryExtractHexColor(value);
    if (detectedColor) {
      currentSettings.backgroundColor = detectedColor;
    }
    applySettingsToDom(currentSettings);
    backgroundStringInput.value = currentSettings.background;
    backgroundColorInput.value = currentSettings.backgroundColor;
  });

  phoneScaleInput.addEventListener("input", () => {
    const value = parseFloat(phoneScaleInput.value);
    currentSettings.scale = clamp(value, 0.3, 2);
    applySettingsToDom(currentSettings);
    phoneScaleInput.value = currentSettings.scale.toString();
    updateScaleOutput(currentSettings.scale);
  });

  phoneGapInput.addEventListener("input", () => {
    const value = parseFloat(phoneGapInput.value);
    currentSettings.gap = clamp(value, 0, 320);
    applySettingsToDom(currentSettings);
    phoneGapInput.value = currentSettings.gap.toString();
    updateGapOutput(currentSettings.gap);
  });

  alignmentSelect.addEventListener("change", () => {
    currentSettings.alignment = alignmentSelect.value;
    applySettingsToDom(currentSettings);
  });

  alignmentOffsetInput.addEventListener("input", () => {
    const value = parseFloat(alignmentOffsetInput.value);
    currentSettings.alignmentOffset = clamp(value, 0, 240);
    applySettingsToDom(currentSettings);
    alignmentOffsetInput.value = currentSettings.alignmentOffset.toString();
    updateAlignmentOffsetOutput(currentSettings.alignmentOffset);
  });

  shadowInput.addEventListener("input", () => {
    currentSettings.shadow = shadowInput.value.trim() || defaultSettings.shadow;
    applySettingsToDom(currentSettings);
    shadowInput.value = currentSettings.shadow;
  });

  phoneFigures.forEach((figure) => {
    figure.addEventListener("click", () => {
      const index = Number.parseInt(figure.dataset.index ?? "0", 10);
      pendingImageIndex = Number.isNaN(index) ? 0 : index;
      imagePicker.click();
    });
  });

  imagePicker.addEventListener("change", handleImagePick);

  profileSelect.addEventListener("change", () => {
    const selectedId = profileSelect.value;
    if (!selectedId) {
      return;
    }
    loadProfile(selectedId);
  });

  newProfileButton.addEventListener("click", () => {
    const newId = generateProfileId();
    currentSettings = cloneSettings(defaultSettings);
    applySettingsToDom(currentSettings);
    applySettingsToInputs(currentSettings);
    saveProfile(newId, newId, currentSettings);
    hydrateProfileSelect(newId);
  });

  saveProfileButton.addEventListener("click", () => {
    const name = (profileNameInput.value || "").trim() || generateProfileId();
    saveProfile(name, name, currentSettings);
    hydrateProfileSelect(name);
  });

  loadProfileButton.addEventListener("click", () => {
    const id = (profileNameInput.value || "").trim();
    if (id && profiles[id]) {
      loadProfile(id);
    }
  });

  deleteProfileButton.addEventListener("click", () => {
    const id = currentProfileId || profileSelect.value;
    if (!id) {
      return;
    }
    delete profiles[id];
    persistProfiles();
    const ids = Object.keys(profiles);
    const fallback = ids[0];
    hydrateProfileSelect(fallback || "");
    if (fallback) {
      loadProfile(fallback);
    } else {
      currentSettings = cloneSettings(defaultSettings);
      applySettingsToDom(currentSettings);
      applySettingsToInputs(currentSettings);
      currentProfileId = null;
      profileNameInput.value = "";
      localStorage.removeItem(LAST_PROFILE_KEY);
    }
  });
}

function handleGlobalShortcut(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    if (isFormElement(event.target)) {
      return;
    }
    if (!isControlsOpen()) {
      event.preventDefault();
      openControls();
    }
  } else if (event.key === "Escape") {
    if (isControlsOpen()) {
      closeControls();
    }
  }
}

function isControlsOpen() {
  return controls.classList.contains("controls--open");
}

function openControls() {
  controls.classList.add("controls--open");
  controls.setAttribute("aria-hidden", "false");
  setTimeout(() => {
    backgroundStringInput.focus();
  }, 120);
}

function closeControls() {
  controls.classList.remove("controls--open");
  controls.setAttribute("aria-hidden", "true");
}

function applySettingsToDom(settings) {
  const normalized = normalizeSettings(settings);
  currentSettings = cloneSettings(normalized);
  showcase.style.background = normalized.background;
  phoneList.style.gap = `${normalized.gap}px`;

  const offsets = computeOffsets(
    normalized.alignment,
    normalized.alignmentOffset,
  );
  phoneFigures.forEach((figure, index) => {
    const offset = offsets[index] ?? 0;
    figure.style.transform = `translateY(${offset}px) scale(${normalized.scale})`;
    figure.style.boxShadow = normalized.shadow;
  });

  phoneImages.forEach((img, index) => {
    if (!img) {
      return;
    }
    const src = normalized.images[index] || PLACEHOLDER_IMAGES[index];
    img.src = src;
  });
}

function applySettingsToInputs(settings) {
  const normalized = normalizeSettings(settings);
  backgroundColorInput.value = normalized.backgroundColor;
  backgroundStringInput.value = normalized.background;

  phoneScaleInput.value = normalized.scale.toString();
  phoneGapInput.value = normalized.gap.toString();
  alignmentSelect.value = normalized.alignment;
  alignmentOffsetInput.value = normalized.alignmentOffset.toString();
  shadowInput.value = normalized.shadow;

  updateScaleOutput(normalized.scale);
  updateGapOutput(normalized.gap);
  updateAlignmentOffsetOutput(normalized.alignmentOffset);
}

function updateScaleOutput(value = currentSettings.scale) {
  scaleValueOutput.textContent = `${Number.parseFloat(value).toFixed(2)}×`;
}

function updateGapOutput(value = currentSettings.gap) {
  gapValueOutput.textContent = `${Math.round(value)}px`;
}

function updateAlignmentOffsetOutput(value = currentSettings.alignmentOffset) {
  alignmentOffsetOutput.textContent = `${Math.round(value)}px`;
}

function hydratePhoneImages(images) {
  images.forEach((src, index) => {
    const img = phoneImages[index];
    if (!img) {
      return;
    }
    img.src = src || PLACEHOLDER_IMAGES[index];
  });
}

function handleImagePick(event) {
  const files = event.target.files;
  if (!files || files.length === 0 || pendingImageIndex === null) {
    event.target.value = "";
    pendingImageIndex = null;
    return;
  }

  const file = files[0];
  if (!file.type.startsWith("image/")) {
    event.target.value = "";
    pendingImageIndex = null;
    return;
  }

  const targetImage = phoneImages[pendingImageIndex];
  if (!targetImage) {
    event.target.value = "";
    pendingImageIndex = null;
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const result = typeof reader.result === "string" ? reader.result : null;
    if (!result) {
      return;
    }
    currentSettings.images[pendingImageIndex] = result;
    targetImage.src = result;
    applySettingsToDom(currentSettings);
    pendingImageIndex = null;
    event.target.value = "";
  });
  reader.readAsDataURL(file);
}

function loadProfilesFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return Object.fromEntries(
        Object.entries(parsed).map(([id, value]) => [
          id,
          {
            name: typeof value?.name === "string" ? value.name : id,
            settings: normalizeSettings(value?.settings ?? defaultSettings),
            updatedAt: Number(value?.updatedAt) || Date.now(),
          },
        ]),
      );
    }
    return {};
  } catch (error) {
    console.warn("Failed to parse stored profiles", error);
    return {};
  }
}

function persistProfiles() {
  const payload = {};
  for (const [id, profile] of Object.entries(profiles)) {
    payload[id] = {
      name: profile.name,
      settings: profile.settings,
      updatedAt: profile.updatedAt || Date.now(),
    };
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function hydrateProfileSelect(selectedId = currentProfileId) {
  const options = Object.keys(profiles)
    .map((id) => ({ id, name: profiles[id].name || id }))
    .sort((a, b) => a.name.localeCompare(b.name));

  profileSelect.innerHTML = "";
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = options.length
    ? "Choose a profile…"
    : "No profiles yet";
  profileSelect.appendChild(placeholderOption);

  options.forEach(({ id, name }) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    if (id === selectedId) {
      option.selected = true;
    }
    profileSelect.appendChild(option);
  });

  if (selectedId) {
    profileNameInput.value = profiles[selectedId]?.name || selectedId;
    currentProfileId = selectedId;
  }
}

function saveProfile(id, name, settings) {
  const safeId = id || generateProfileId();
  const safeName = name || safeId;
  profiles[safeId] = {
    name: safeName,
    settings: cloneSettings(normalizeSettings(settings)),
    updatedAt: Date.now(),
  };
  currentProfileId = safeId;
  profileNameInput.value = safeName;
  localStorage.setItem(LAST_PROFILE_KEY, safeId);
  persistProfiles();
}

function loadProfile(id) {
  const profile = profiles[id];
  if (!profile) {
    return;
  }
  currentSettings = cloneSettings(normalizeSettings(profile.settings));
  applySettingsToDom(currentSettings);
  applySettingsToInputs(currentSettings);
  hydratePhoneImages(currentSettings.images);
  currentProfileId = id;
  profileNameInput.value = profile.name || id;
  localStorage.setItem(LAST_PROFILE_KEY, id);
  hydrateProfileSelect(id);
}

function tryExtractHexColor(value) {
  if (!value) {
    return null;
  }
  const match = value.trim().match(/^#([0-9a-f]{3,8})$/i);
  if (match) {
    return `#${match[1].toLowerCase()}`;
  }
  return null;
}

function computeOffsets(alignment, offset) {
  const distance = Number.isFinite(offset)
    ? offset
    : defaultSettings.alignmentOffset;
  switch (alignment) {
    case "rise":
      return [-distance, 0, distance];
    case "fall":
      return [distance, 0, -distance];
    case "center":
      return [distance * 0.6, -distance, distance * 0.6];
    default:
      return [0, 0, 0];
  }
}

function normalizeSettings(settings) {
  const safe = settings && typeof settings === "object" ? settings : {};
  const resolvedBackground =
    typeof safe.background === "string" && safe.background.trim()
      ? safe.background.trim()
      : defaultSettings.background;
  const resolvedColor =
    tryExtractHexColor(safe.backgroundColor) ||
    tryExtractHexColor(resolvedBackground) ||
    defaultSettings.backgroundColor;
  const scale = clamp(parseNumber(safe.scale, defaultSettings.scale), 0.3, 2);
  const gap = clamp(parseNumber(safe.gap, defaultSettings.gap), 0, 320);
  const alignment = ["flat", "rise", "fall", "center"].includes(safe.alignment)
    ? safe.alignment
    : defaultSettings.alignment;
  const alignmentOffset = clamp(
    parseNumber(safe.alignmentOffset, defaultSettings.alignmentOffset),
    0,
    240,
  );
  const shadow =
    typeof safe.shadow === "string" && safe.shadow.trim()
      ? safe.shadow.trim()
      : defaultSettings.shadow;
  const images = Array.isArray(safe.images) ? safe.images.slice(0, 3) : [];
  const resolvedImages = [
    images[0] || PLACEHOLDER_IMAGES[0],
    images[1] || PLACEHOLDER_IMAGES[1],
    images[2] || PLACEHOLDER_IMAGES[2],
  ];
  return {
    background: resolvedBackground,
    backgroundColor: resolvedColor,
    scale,
    gap,
    alignment,
    alignmentOffset,
    shadow,
    images: resolvedImages,
  };
}

function cloneSettings(settings) {
  return JSON.parse(JSON.stringify(settings));
}

function parseNumber(value, fallback) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : fallback;
}

function generateProfileId() {
  const random = Math.floor(1000000 + Math.random() * 9000000);
  return `profile-${random}`;
}

function clamp(value, min, max) {
  if (!Number.isFinite(value)) {
    return min;
  }
  return Math.min(max, Math.max(min, value));
}

function isFormElement(element) {
  if (!element) {
    return false;
  }
  const tag = element.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

init();
