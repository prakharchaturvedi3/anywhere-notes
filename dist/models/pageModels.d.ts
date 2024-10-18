export declare function readPageById(pageId: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function readPagesByUserId(userId: any): import(".prisma/client").Prisma.PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    tags: string[];
}[]> | null;
export declare function createPage(record: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function writePage(record: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
