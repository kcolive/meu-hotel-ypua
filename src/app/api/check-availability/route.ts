import { NextResponse } from "next/server";
import { client } from "@/libs/sanity";
import { checkRoomAvailabilityQuery } from "@/libs/sanityQueries";

export async function POST(req: Request) {
  try {
    const { roomId, checkinDate, checkoutDate } = await req.json();

    if (!roomId || !checkinDate || !checkoutDate) {
      return NextResponse.json(
        { message: "Dados inválidos" },
        { status: 400 }
      );
    }

    const bookings = await client.fetch(checkRoomAvailabilityQuery, {
      roomId,
      checkinDate,
      checkoutDate,
    });

    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);

    const hasConflict = bookings.some((booking: any) => {
      const existingCheckin = new Date(booking.checkinDate);
      const existingCheckout = new Date(booking.checkoutDate);

      return (
        checkin < existingCheckout &&
        checkout > existingCheckin
      );
    });

    return NextResponse.json({
      available: !hasConflict,
    });

  } catch (error) {
    console.error("Erro ao verificar disponibilidade:", error);

    return NextResponse.json(
      { message: "Erro interno" },
      { status: 500 }
    );
  }
}