import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitMinute(meetingDate: Date) {
  try {
    const newMinute = await prisma.minute.create({
      data: {
        meetingDate,
      },
    });
    console.log("Minute saved:", newMinute);
  } catch (error) {
    console.error("Error saving minute:", error);
  }
}
