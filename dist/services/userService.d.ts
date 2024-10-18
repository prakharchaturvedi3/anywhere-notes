export declare function findUserByEmail(email: any): import(".prisma/client").Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    email: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function findUserById(id: any): any;
export declare function newUser(record: any): import(".prisma/client").Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}, never, import("@prisma/client/runtime/library").DefaultArgs> | null;
export declare function comparePassword(password: any, hash: any): any;
export declare function generateHash(password: any): any;
