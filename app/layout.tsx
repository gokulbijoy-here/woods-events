import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import "leaflet/dist/leaflet.css";

export const metadata = {
    title: "Woods Events",
    description: "Premium Event Management",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <CursorGlow />
                {children}
            </body>
        </html>
    );
}
