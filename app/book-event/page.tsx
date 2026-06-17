"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import dynamic from "next/dynamic";

const EventLocationMap = dynamic(
  () => import("@/components/EventLocationMap"),
  {
    ssr: false,
  }
);


export default function BookEventPage() {

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const [location, setLocation] = useState("");
  const [preferences, setPreferences] = useState("");


  const eventTypes = [
    {
      icon: "💍",
      label: "Wedding",
    },
    {
      icon: "🎂",
      label: "Birthday",
    },
    {
      icon: "🏢",
      label: "Corporate",
    },
    {
      icon: "🍽",
      label: "Catering",
    },
    {
      icon: "🎉",
      label: "Other",
    },
  ];

  const handleBooking = async () => {
    if (!name || !phone || !email || !eventType || !eventDate) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          name,
          phone,
          email,
          address,
          event_type: eventType,
          event_date: eventDate,
          guest_count: guestCount,
          location,
          preferences,
          payment_status: "pending",
        },
      ])
      .select();

    setLoading(false);

    if (error) {
      alert("Failed to save booking");
      console.error(error);
      return;
    }

    const bookingId = data?.[0]?.id;

    const bookingNumber =
      "WE-" +
      String(Math.floor(Math.random() * 10000))
        .padStart(4, "0");

    await supabase
      .from("bookings")
      .update({
        booking_number: bookingNumber,
      })
      .eq("id", bookingId);

    alert(
      `Booking Created Successfully!\nBooking Number: ${bookingNumber}`
    );
  };

  return (

    <main className="min-h-screen bg-[#07192F] text-white">
      <div className="max-w-5xl mx-auto px-6 py-32">
        <h1
          className="
        text-5xl
        md:text-6xl
        font-serif
        text-center
        mb-6
      "
        >
          Book Your Event
        </h1>

        <p
          className="
        text-center
        text-white/70
        mb-16
      "
        >
          Let's start planning your celebration.
        </p>

        <div
          className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-xl
        p-8
        md:p-12
      "
        >
          {/* Personal Details */}
          <h2 className="text-2xl font-semibold mb-8">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)} placeholder="Address"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />
          </div>
          <div className="h-px bg-white/10 my-12" />
          {/* Event Details */}
          <h2 className="text-2xl font-semibold mt-16 mb-8">
            Event Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="md:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {eventTypes.map((type) => (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => setEventType(type.label)}
                    className={`
          p-5
          rounded-2xl
          border
          backdrop-blur-xl
          transition-all
          duration-300

          ${eventType === type.label
                        ? "border-[#D4AF37] bg-[#D4AF37]/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30"
                      }
        `}
                  >
                    <div className="text-3xl mb-2">
                      {type.icon}
                    </div>

                    <div className="text-sm font-medium">
                      {type.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>



            <div className="relative">
              <label className="block text-sm text-white/60 mb-2">
                Event Date
              </label>

              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="
    w-full
    bg-white/5
    border
    border-white/10
    rounded-xl
    p-4
    outline-none
    transition-all
    duration-300
    focus:border-[#D4AF37]
  "
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-white/60 mb-2">
                Expected Guests
              </label>

              <input
                type="number"
                min="1"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="e.g. 150"
                className="
    w-full
    bg-white/5
    border
    border-white/10
    rounded-xl
    p-4
    outline-none
    transition-all
    duration-300
    focus:border-[#D4AF37]
  "
              />
            </div>
          </div>
          <div className="h-px bg-white/10 my-12" />
          {/* Location */}
          <h2 className="text-2xl font-semibold mt-16 mb-8">
            Event Location
          </h2>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search Location"
            className="
    w-full
    bg-white/5
    border
    border-white/10
    rounded-xl
    p-4
  "
          />

          <EventLocationMap />
          <div className="h-px bg-white/10 my-12" />
          {/* Preferences */}
          <h2 className="text-2xl font-semibold mt-16 mb-8">
            Additional Preferences
          </h2>

          <textarea
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            rows={5}
            placeholder="Tell us about your event requirements..."
            className="
    w-full
    bg-white/5
    border
    border-white/10
    rounded-xl
    p-4
  "
          />
          <div className="h-px bg-white/10 my-12" />
          {/* Booking Advance */}
          <div
            className="
          mt-16
          rounded-2xl
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/5
          p-8
        "
          >
            <h3 className="text-2xl font-semibold mb-4">
              Reserve Your Date
            </h3>

            <p className="text-white/70">
              A refundable advance payment of ₹1000 is required to
              reserve your preferred event date.
            </p>

            <button
              onClick={handleBooking}
              disabled={loading}
              className="
    mt-6
    bg-[#D4AF37]
    text-black
    px-8
    py-4
    rounded-xl
    font-semibold
  "
            >
              {loading ? "Saving..." : "Continue to Payment"}
            </button>
          </div>

          {/* WhatsApp */}
          <div
            className="
          mt-12
          text-center
        "
          >
            <p className="text-white/60 mb-4">
              Need immediate assistance?
            </p>

            <a
              href="https://wa.me/916238120619"
              target="_blank"
              rel="noopener noreferrer"
              className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-xl
            border
            border-green-500/30
            bg-green-500/10
          "
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>


  );
}