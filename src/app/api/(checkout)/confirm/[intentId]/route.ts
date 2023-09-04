import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async ({ params }: { params: { intentId: string } }) => {

    console.log(params)
    const { intentId } = params;

    try {

        await prisma.order.update({
            where: {
                intent_id:intentId,
            },
            data: {
                status: "Paid"
            },
        });

        return new NextResponse(JSON.stringify({ message: "Order updated" }), { status: 200 })

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })

    }

}


