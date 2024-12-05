import { z } from "zod";

export const restaurantFromSchema = z.object({
  restaurantName: z
    .string()
    .nonempty({ message: "Restaurant name is required" }),
  city: z.string().nonempty({ message: "city is required" }),
  country: z.string().nonempty({ message: "country is required" }),
  deliveryTime: z
    .number()
    .min(0, { message: "Delivery time cannot be negative" }),
  cuisines: z.array(z.string()),
  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size !== 0, { message: "image file is required" }),
});

export type RestaurantFormSchema = z.infer<typeof restaurantFromSchema>;
