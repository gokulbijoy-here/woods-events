"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {

    const [bookings, setBookings] = useState<any[]>([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const { data, error } = await supabase
            .from("bookings")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error(error);
            return;
        }

        setBookings(data || []);
    };

    return (
        <main className="min-h-screen bg-[#07192F] text-white">
            <div className="max-w-7xl mx-auto px-6 py-24">

                <h1 className="text-5xl font-serif mb-12">
                    Admin Dashboard
                </h1>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                        <h3 className="text-white/60 mb-2">
                            Total Bookings
                        </h3>

                        <p className="text-4xl font-bold text-[#D4AF37]">
                            {bookings.length}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                        <h3 className="text-white/60 mb-2">
                            Pending Payments
                        </h3>

                        <p className="text-4xl font-bold text-[#D4AF37]">
                            {
                                bookings.filter(
                                    (booking) => booking.payment_status === "pending"
                                ).length
                            }
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                        <h3 className="text-white/60 mb-2">
                            Upcoming Events
                        </h3>

                        <p className="text-4xl font-bold text-[#D4AF37]">
                            {
                                bookings.filter(
                                    (booking) =>
                                        new Date(booking.event_date) >= new Date()
                                ).length
                            }
                        </p>
                    </div>

                </div>

                {/* Table */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.05] overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-white/5">
                            <tr>
                                <th className="text-left p-5">Booking No</th>
                                <th className="text-left p-5">Customer</th>
                                <th className="text-left p-5">Event</th>
                                <th className="text-left p-5">Date</th>
                                <th className="text-left p-5">Payment</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className="border-t border-white/10"
                                >
                                    <td className="p-5">
                                        {booking.booking_number}
                                    </td>

                                    <td className="p-5">
                                        {booking.name}
                                    </td>

                                    <td className="p-5">
                                        {booking.event_type}
                                    </td>

                                    <td className="p-5">
                                        {booking.event_date}
                                    </td>

                                    <td
                                        className={`p-5 ${booking.payment_status === "paid"
                                            ? "text-green-400"
                                            : "text-yellow-400"
                                            }`}
                                    >
                                        {booking.payment_status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </main>
    );
}