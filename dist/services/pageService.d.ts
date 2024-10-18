export declare function findPagesByUserId(id: any): import(".prisma/client").Prisma.PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    tags: string[];
}[]> | null;
export declare function findPageById(id: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function newPage(record: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function updatePage(record: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function deactivatePage(record: any): import(".prisma/client").Prisma.Prisma__PageClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    title: string;
    tags: string[];
    content: string;
    userId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
