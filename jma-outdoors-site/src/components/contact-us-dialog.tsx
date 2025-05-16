"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

// Updated schema for both categories
const formSchema = z
  .object({
    category: z.enum(["lawncare", "landscaping"]),
    email: z.string().email(),
    phone: z.string().min(7, "Enter a valid phone number"),
    address: z.string().optional(),
    frequency: z.enum(["weekly", "bi-weekly"]).optional(),
    description: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.category === "lawncare" && (!data.address || data.address.trim().length < 1)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["address"],
        message: "Service address is required.",
      });
    }
    if (data.category === "landscaping" && (!data.description || data.description.trim().length < 1)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["description"],
        message: "Project description is required.",
      });
    }
  });

export default function ContactUsDialog({
  variant = "default",
}: {
  variant?: "default" | "home";
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "lawncare",
      email: "",
      phone: "",
      address: "",
      frequency: "weekly",
      description: "",
    },
  });

  // Watch category to conditionally render fields
  const category = form.watch("category");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // You can handle the submission as needed here
    console.log(values);
    toast.success("Your request has been sent successfully!");
    form.reset();
    setIsDialogOpen(false);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={variant === "home" ? "secondary" : "ghost"}>
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>
                  <span className="font-semibold">Call us:</span>{" "}
                  <a href="tel:555-123-4567" className="underline font-medium">
                    (555) 123-4567
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>
                  <span className="font-semibold">Or send us a message below:</span>
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                You only need to choose one option.
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 border-t" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lawncare">Lawncare</SelectItem>
                      <SelectItem value="landscaping">Landscaping</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {category === "lawncare" && (
              <>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City, State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="frequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired Frequency</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {category === "landscaping" && (
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your landscaping project..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
