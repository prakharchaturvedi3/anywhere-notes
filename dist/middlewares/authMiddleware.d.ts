export declare function protect(req: any, res: any, next: any): void;
export declare function access(req: any, res: any, next: any): Promise<void>;
export declare function registration(req: any, res: any, next: any): Promise<null | undefined>;
export declare function availability(req: any, res: any, next: any): Promise<null | undefined>;
