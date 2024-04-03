import { useEffect, useState } from "react";

export function useVisibleSection(sectionIDs: string[]) {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [done, setDone] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    function handleScroll() {
      const closestSection = findClosestElementToScrollY(sections);
      if (closestSection?.id) {
        setCurrentSection(closestSection?.id);
      }
    }
    setTimeout(() => {
      if (!done) {
        setSections(getSections(sectionIDs));
        setDone(true);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [done, sectionIDs, sections]);
  return { currentSection };
}

function getSections(sectionIDs: string[]) {
  const sections: HTMLElement[] = [];
  for (const id of sectionIDs) {
    const section = document.getElementById(id);
    if (!section) {
      throw new Error(`Element with id '${id}' not found.`);
    }
    sections.push(section);
  }
  return sections;
}

function findClosestElementToScrollY(elements: HTMLElement[]) {
  let closestElement: HTMLElement | null = null;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (const element of elements) {
    const rec = element.getBoundingClientRect();
    const distance = Math.abs(rec.top);
    if (distance < minDistance) {
      minDistance = distance;
      closestElement = element;
    }
  }

  return closestElement;
}
