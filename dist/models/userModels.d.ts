export declare function readUserByEmail(email: any): import(".prisma/client").Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    email: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function createUser(record: any): import(".prisma/client").Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
