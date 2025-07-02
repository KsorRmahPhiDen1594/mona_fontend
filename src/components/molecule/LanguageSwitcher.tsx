'use client';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "th", label: "ภาษาไทย" },
    { code: "lo", label: "ລາວ" },
];

export function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [currentLang, setCurrentLang] = useState<string>('en');

    useEffect(() => {
        const localeCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('locale='))
            ?.split('=')[1];
        if (localeCookie) {
            setCurrentLang(localeCookie);
        }
    }, []);

    const handleLanguageChange = (locale: string) => {
        document.cookie = `locale=${locale}; path=/`;
        setCurrentLang(locale)
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                    🌐 {languages.find(l => l.code === currentLang)?.label || 'Language'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                    >
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
