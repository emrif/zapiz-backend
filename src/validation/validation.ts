import { z } from "zod";

export const userSchema = z.object({
    username: z.string(),
    country: z.string().optional(),
    avatar: z.string(),
});


