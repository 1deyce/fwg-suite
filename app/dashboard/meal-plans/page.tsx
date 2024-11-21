"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
    category: z.string(),
})

export default function Category() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            category: "",
        }
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {


        form.reset()
            return
        } catch (error) {
            return error
        }
    }


    return (
        <main className="flex min-w-screen p-4 flex-col items-center justify-between ">
            <div className="flex flex-col mb-[5rem] w-full">
                <h1 className=" text-3xl font-semibold tracking-tight">
                    Meal Plans
                </h1>
                <p className="leading-7 text-sm dark:text-gray-400">
                    Get ready to browse and select from a variety of thoughtfully crafted meal plans that have been designed and saved just for you.
                </p>
                <Separator orientation="horizontal" className="mt-4" />
            </div>
        </main>
    )
}