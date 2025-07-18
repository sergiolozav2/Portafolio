import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/Select";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

export function LanguagePicker() {
  const { i18n } = useTranslation();
  const navigator = useNavigate();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    navigator({
      to: "/$language",
      params: { language: value },
    });
  };
  const currentLanguage = i18n.resolvedLanguage ?? "en";

  return (
    <Select defaultValue={currentLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger className="relative p-0 text-[length:inherit]">
        <div className="bg-primary/90 absolute top-4 -right-1 px-0.5 text-xs">
          <SelectValue className="size-0" />
        </div>
        <MdLanguage className="text-inherit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="es">ES</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
