// convex/mutations.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createActivity = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    date: v.string(),
    author: v.string(),
    category: v.string(),
    image: v.string(),
    image1: v.array(v.string()),
    location: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("activities", args);
    return id;
  },
});

export const updateActivity = mutation({
  args: {
    id: v.id("activities"),
    title: v.string(),
    content: v.string(),
    date: v.string(),
    author: v.string(),
    category: v.string(),
    image: v.string(),
    image1: v.array(v.string()),
    location: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
    return id;
  },
});

export const deleteActivity = mutation({
  args: { id: v.id("activities") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return { success: true };
  },
});