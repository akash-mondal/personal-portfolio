import "./globals.css"
import { Inter } from "next/font/google"
import ThemeContextProvider from "@/context/theme-context"
import { ActionSectionContextProvider } from "@/context/action-section-context"
import ThemeSwitch from "@/components/ThemeTwich"
import { NextIntlClientProvider, useMessages } from "next-intl"
import WidgetWrapper from "@/components/WidgetWrapper"
import ClientLayout from "@/components/ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#433f68]"></div>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <ActionSectionContextProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
              <WidgetWrapper>
                <ThemeSwitch />
              </WidgetWrapper>
            </ActionSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
