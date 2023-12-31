import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server"


// Fetch all orders

export const GET = async (req: NextRequest) => {

    const session = await getAuthSession()

    try {
        if (!session) {
            return new NextResponse(
                JSON.stringify({ message: "Unauthorized" }), { status: 401 }
            )
        } else {
            if (session.user.isAdmin) {
                const orders = await prisma.order.findMany()
                return new NextResponse(JSON.stringify(orders), { status: 200 })

            }
            const orders = await prisma.order.findMany({
                where: {
                    userEmail: session.user.email!
                }
            })
            return new NextResponse(JSON.stringify(orders), { status: 200 })
        }
    }
    catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: "Internal Server Error" }), { status: 500 }
        )
    }
}

// Create an order

export const POST = async (req: NextRequest) => {

    const session = await getAuthSession()

    if (session) {

        try {
            const body = await req.json()

            const order = await prisma.order.create({
                data: body,
            })

            return new NextResponse(JSON.stringify(order), { status: 201 })
        } catch (error) {
            console.log(error);
            return new NextResponse(
                JSON.stringify({ message: "Internal Server Error" }), { status: 500 }
            )
        }
    }
    else {
        return new NextResponse(
            JSON.stringify({ message: "Unauthorized" }), { status: 401 }
        )
    }
}