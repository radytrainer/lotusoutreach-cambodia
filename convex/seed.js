// convex/seed.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedActivities = mutation({
  args: {
    activities: v.array(
      v.object({
        title: v.string(),
        content: v.string(),
        date: v.string(),
        author: v.string(),
        category: v.string(),
        image: v.string(),
        image1: v.array(v.string()),
        location: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const activity of args.activities) {
      await ctx.db.insert("activities", activity);
    }
    return { success: true, message: "Activities seeded successfully" };
  },
});