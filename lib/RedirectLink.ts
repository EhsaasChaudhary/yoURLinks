
import { NextResponse, NextRequest } from 'next/server';

export function RedirectLink(ShortPath: string, OrgLink: string) {
    return (req: NextRequest) => {
        if (req.url === ShortPath) {
            return NextResponse.redirect(OrgLink, { status: 301 });
        }
        return NextResponse.next();
    };
}
