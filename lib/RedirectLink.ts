import { NextResponse, NextRequest } from 'next/server';

function RedirectLink(ShortPath: string, OrgLink: string) {
    return (req: NextRequest) => {
        if (req.url === ShortPath) {
            return NextResponse.redirect(OrgLink, { status: 301 });
        }
        return NextResponse.next();
    };
}

