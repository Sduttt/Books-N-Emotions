import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    try {
        // const body = await req.json()
        const { status } = await req.json()

        await prisma.order.update({
            where: {
                id: id
            },
            data: {
                status: status
            }
        })
        return new NextResponse(`Order ${id} updated`, { status: 200 })

    } catch (error) {
        console.log(error)
        return new NextResponse(`Internal Server Error`, { status: 500 })
    }

}