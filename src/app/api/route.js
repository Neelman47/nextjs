import { NextResponse } from "next/server"

export async function GET(request){
    return NextResponse.json({
        success: true, name : 'GET'
    })
}

export async function POST(request){
    return NextResponse.json({
        success: true, name : 'POST'
    })
}

export async function DELETE(request){
    return NextResponse.json({
        success: true, name : 'DELETE'
    })
}

export async function PUT(request){
    return NextResponse.json({
        success: true, name : 'PUT'
    })
}

export async function PATCH(request){
    return NextResponse.json({
        success: true, name : 'PATCH'
    })
}
